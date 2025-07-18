import React from 'react';
import { View, Text, StyleSheet, Dimensions, Alert } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');
const SLIDER_WIDTH = width * 0.9;
const BUTTON_WIDTH = 130;
const BUTTON_HEIGHT = 60;

const SlideButton = () => {
  const translateX = useSharedValue(0);
  const completed = useSharedValue(false); 

  const onSlideComplete = () => {
    Alert.alert('Ride Started', 'You have successfully started the ride.');
  };

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      if (completed.value) return; 
      ctx.startX = translateX.value;
    },
    onActive: (event, ctx) => {
      if (completed.value) return;

      const newTranslateX = ctx.startX + event.translationX;
      if (newTranslateX >= 0 && newTranslateX <= SLIDER_WIDTH - BUTTON_WIDTH) {
        translateX.value = newTranslateX;
      }
    },
    onEnd: () => {
      if (completed.value) return;

      if (translateX.value > SLIDER_WIDTH - BUTTON_WIDTH - 10) {
        translateX.value = withTiming(SLIDER_WIDTH - BUTTON_WIDTH, { duration: 300 });
        completed.value = true;
        runOnJS(onSlideComplete)();
      } else {
        translateX.value = withTiming(0, { duration: 300 });
      }
    },
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
    opacity: completed.value ? 0.6 : 1, 
  }));

  return (
    <View style={styles.container}>
      <View style={styles.slider}>
        <PanGestureHandler onGestureEvent={gestureHandler}>
          <Animated.View style={[styles.button, animatedStyle]}>
            <Text style={styles.buttonText}>Start Ride</Text>
          </Animated.View>
        </PanGestureHandler>
      </View>
    </View>
  );
};

export default SlideButton;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 10,
  },
  slider: {
  
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    width: '100%',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  button: {
    width: BUTTON_WIDTH,
    height: BUTTON_HEIGHT,
    backgroundColor: '#707070',
    borderRadius: 12,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
 
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
