import React from "react";
import { Pressable, SafeAreaView, StyleSheet } from "react-native";
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { color } from "../styles/theme";

const Switch = ({
  value,
  onPress,
  style,
  duration = 400,
  trackColors = { on: color.white, off: color.white },
}) => {
  const height = useSharedValue(0);
  const width = useSharedValue(0);

  const trackAnimatedStyle = useAnimatedStyle(() => {
    const color = interpolateColor(
      value.value,
      [0, 1],
      [trackColors.off, trackColors.on]
    );
    const colorValue = withTiming(color, { duration });

    return {
      backgroundColor: colorValue,
      borderRadius: withTiming(8, { duration }),
    };
  });

 const thumbAnimatedStyle = useAnimatedStyle(() => {
  const moveValue = interpolate(
    Number(value.value),
    [0, 1],
    [height.value - width.value, 0]
  );
  const translateValue = withTiming(moveValue, { duration });

  const thumbColor = interpolateColor(
    value.value,
    [0, 1],
    [color.red, color.primary]
  );
  const backgroundColor = withTiming(thumbColor, { duration });

  return {
    transform: [{ translateY: translateValue }],
    borderRadius: withTiming(8, { duration }),
    backgroundColor,
  };
});


  return (
    <Pressable onPress={onPress}>
      <Animated.View
        onLayout={(e) => {
          height.value = e.nativeEvent.layout.height;
          width.value = e.nativeEvent.layout.width;
        }}
        style={[switchStyles.track, style, trackAnimatedStyle]}
      >
        <Animated.View style={[switchStyles.thumb, thumbAnimatedStyle]} />
      </Animated.View>
    </Pressable>
  );
};

const switchStyles = StyleSheet.create({
  track: {
    justifyContent: "flex-start",
    width: 40,
    height: 100,
    padding: 4,
  },
  thumb: {
    width: "100%",
    aspectRatio: 1,
  },
});

export default function App() {
  const isOn = useSharedValue(false);

  const handlePress = () => {
    isOn.value = !isOn.value;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Switch value={isOn} onPress={handlePress} style={styles.switch} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  switch: {
    width: 40,
    height: 60,
  },
  container: {
    flex: 1,
  },
});
