package com.rndemo;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Shell {

    // Define output streams.
    public static enum OUTPUT {
        NONE, STDOUT, STDERR, ALL
    }

    ;

    private static OUTPUT sOStream = OUTPUT.ALL;

    // Define su commands.
    private static enum SU_COMMAND {
        SU("su"),
        BIN("/system/bin/su"),
        XBIN("/system/xbin/su");

        private String mCmd;

        SU_COMMAND(String cmd) {
            mCmd = cmd;
        }

        /**
         * @return Set su command.
         */
        public String getCommand() {
            return mCmd;
        }
    }

    // Define uid commands.
    private static enum UID_COMMAND {
        ID("id"),
        BIN("/system/bin/id"),
        XBIN("/system/xbin/id");

        private String mCmd;

        UID_COMMAND(String cmd) {
            mCmd = cmd;
        }

        public String getCommand() {
            return mCmd;
        }
    }

    private static boolean StdErr = false;

    private static String sShell;
    private static final String EOL = System.getProperty("line.separator");
    private static final String EXIT = "exit" + Shell.EOL;

    /**
     * Shell Interface Utility Exception is used to compress IOExcptions and InterruptedExceptions.
     */
    public static class ShellException extends Exception {
        private static final long serialVersionUID = 4820332926695755116L;

        public ShellException() {
            super();
        }

        public ShellException(String msg) {
            super(msg);
        }
    }

    /**
     * Used to buffer shell output off of the main thread.
     */
    private static class Buffer extends Thread {
        private InputStream mInputStream;
        private StringBuffer mBuffer;

        /**
         * @param inputStream Data stream to get shell output from.
         */
        public Buffer(InputStream inputStream) {
            mInputStream = inputStream;
            mBuffer = new StringBuffer();
            this.start();
        }

        public String getOutput() {
            try {
                this.join();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            return mBuffer.toString();
        }

        /*
         * (non-Javadoc)
         * @see java.lang.Thread#run()
         */
        @Override
        public void run() {
            try {
                String line = "";
                BufferedReader reader = new BufferedReader(new InputStreamReader(mInputStream));
                if ((line = reader.readLine()) != null) {
                    mBuffer.append(line);
                    while ((line = reader.readLine()) != null) {
                        mBuffer.append(Shell.EOL).append(line);
                    }
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    /**
     * Block instantiation of this object.
     */
    private Shell() {
    }

    /**
     * Executes a command in the devices native shell.
     *
     * @param cmd The command to execute.
     * @return Output of the command, null if there is no output.
     * @throws ShellException
     */
    private static String nativeExec(String cmd) throws ShellException {
        Process proc = null;
        Buffer buffer = null;
        try {
            proc = Runtime.getRuntime().exec(cmd);
            buffer = getBuffer(proc);
            proc.waitFor();
            String output = buffer.getOutput();

            return output;
        } catch (Exception e) {
            throw new ShellException();
        }
    }

    /**
     * Executes a command in the su shell.
     *
     * @param cmd The command to execute.
     * @return Output of the command, null if there is no output.
     * @throws ShellException
     */
    private static String suExec(String cmd) throws ShellException {
        try {
            Process proc = Runtime.getRuntime().exec("su");
            DataOutputStream shell = new DataOutputStream(proc.getOutputStream());

            // Write su command to su shell.
            shell.writeBytes(cmd + Shell.EOL);
            shell.writeBytes(Shell.EXIT);
            shell.flush();
            proc.waitFor();
            Buffer buffer = getBuffer(proc);
            return buffer.getOutput();

        } catch (Exception e) {
            throw new ShellException();
        }
    }

    /**
     * Finds and sets the su shell that has root privileges.
     *
     * @throws ShellException
     */
    private static void setSuShell() throws ShellException {
        for (SU_COMMAND cmd : SU_COMMAND.values()) {
            sShell = cmd.getCommand();
            if (Shell.isRootUid()) {
                return;
            }
        }
        sShell = null;
    }

    private static void setStdErr(boolean isErr) {
        StdErr = isErr;
    }

    /**
     * Determines if the su shell has root privileges.
     *
     * @return True if the su shell has root privileges, false if not.
     * @throws ShellException
     */
    private static boolean isRootUid() throws ShellException {
        for (UID_COMMAND uid : UID_COMMAND.values()) {
            String output = Shell.sudo(uid.getCommand());
            if (output != null && output.length() > 0) {
                Matcher regex = Pattern.compile("^uid=(\\d+).*?").matcher(output);
                if (regex.matches()) {
                    if ("0".equals(regex.group(1))) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    /**
     * Gets the buffer for the shell output stream that is currently set.
     *
     * @param proc Process running the shell command.
     * @return The buffer containing the shell output stream, NULL is none.
     */
    private static Buffer getBuffer(Process proc) {
        Buffer buffer = null;
        switch (sOStream) {
            case NONE:
                new Buffer(proc.getInputStream());
                new Buffer(proc.getErrorStream());
                setStdErr(false);
                break;
            case STDOUT:
                buffer = new Buffer(proc.getInputStream());
                setStdErr(false);
                break;
            case STDERR:
                buffer = new Buffer(proc.getErrorStream());
                new Buffer(proc.getInputStream());
                setStdErr(!buffer.getOutput().isEmpty());
                break;
            case ALL:
                Buffer inputBuffer = new Buffer(proc.getInputStream());
                Buffer errorBuffer = new Buffer(proc.getErrorStream());
                String output = inputBuffer.getOutput();
                buffer = output.isEmpty() ? errorBuffer : inputBuffer;
                setStdErr(!errorBuffer.getOutput().isEmpty());
                break;
            default:
                return buffer;
        }

        return buffer;
    }

    /*
     * API
     *
     *
     *
     */

    /**
     * Sets the shell's {@link Shell.OUTPUT output stream}.  Default value is STDOUT.
     *
     * @param ostream The output Stream to read shell from.
     */
    synchronized public static void setOutputStream(Shell.OUTPUT ostream) {
        sOStream = ostream;
    }

    /**
     * Sets the su shell to be used.
     *
     * @param shell The shell to be used for sudo.
     */
    synchronized public static void setShell(String shell) {
        sShell = shell;
    }

    /**
     * Gains privileges to root shell.  Device must be rooted to use.
     *
     * @return True if root shell is obtained, false if not.
     */
    synchronized public static boolean su() {
        if (sShell == null) {
            try {
                Shell.setSuShell();
            } catch (ShellException e) {
                sShell = null;
            }
        }
        return sShell != null;
    }

    /**
     * Executes a command in the root shell.  Devices must be rooted to use.
     *
     * @param cmd The command to execute in root shell.
     * @return Output of the command, null if there is no output.
     * @throws ShellException
     * @throws InterruptedException
     * @throws IOException
     */
    synchronized public static String sudo(String cmd) throws ShellException {
        return Shell.suExec(cmd);
    }

    /**
     * Executes a native shell command.
     *
     * @param cmd The command to execute in the native shell.
     * @return Output of the command, null if there is no output.
     * @throws ShellException
     */
    synchronized public static String exec(String cmd) throws ShellException {
        return Shell.nativeExec(cmd);
    }

    synchronized public static Boolean getStdErr() {
        return StdErr;
    }
}
