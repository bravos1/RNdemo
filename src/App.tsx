import React from 'react';
import { NativeBaseProvider } from 'native-base';

import { CustomTheme } from './theme';
import * as Demo from './Demo';

export default function App() {
  return (
    <NativeBaseProvider theme={CustomTheme}>
      <Demo.Demo1 />
    </NativeBaseProvider>
  );
}
