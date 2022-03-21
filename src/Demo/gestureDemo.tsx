import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, {
	runOnJS,
	useAnimatedGestureHandler,
	useAnimatedStyle,
	useSharedValue,
	withSpring,
	withTiming
} from "react-native-reanimated";

const gestureDemo = () => {

    const isPressed = useSharedValue(false);
    const offset = useSharedValue({ x: 0, y: 0 });

    const animatedStyles = useAnimatedStyle(() => {
      return {
        transform: [
          { translateX: offset.value.x },
          { translateY: offset.value.y },
          { scale: withSpring(isPressed.value ? 1.2 : 1) },
        ],
        backgroundColor: isPressed.value ? 'yellow' : 'blue',
      };
    });

    const start = useSharedValue({ x: 0, y: 0 });

const gesture = Gesture.Pan()
  .onBegin(() => {
    isPressed.value = true;
  })
  .onUpdate((e) => {
    offset.value = {
      x: e.translationX + start.value.x,
      y: e.translationY + start.value.y,
    };
  })
  .onEnd(() => {
    start.value = {
      x: offset.value.x,
      y: offset.value.y,
    };
  })
  .onFinalize(() => {
    isPressed.value = false;
  });

  return (
    <View>
      <Text>gestureDemo</Text>

      <GestureDetector gesture={gesture}>
        <Animated.View style={[styles.ball, animatedStyles]} />
      </GestureDetector>
    </View>
  )
}

export default gestureDemo

const styles = StyleSheet.create({
    ball: {
      width: 100,
      height: 100,
      borderRadius: 100,
      backgroundColor: 'pink',
      alignSelf: 'center',
    },
  });

