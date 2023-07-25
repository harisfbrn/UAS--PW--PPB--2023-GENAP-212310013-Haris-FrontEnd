import React from "react";
import { View, StyleSheet } from "react-native";

const Circle = ({ size, color }) => {
  return <View style={[styles.circle, { width: size, height: size, backgroundColor: color }]} />;
};

const styles = StyleSheet.create({
  circle: {
    borderRadius: 200, // setengah dari width dan height
    justifyContent: 'center',
    opacity: 0.2
  },
});

export default Circle;