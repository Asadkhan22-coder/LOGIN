import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CaptureImageHead = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>Capture Bill</Text>
      <Text style={styles.capture}>Capture clear picture of Bill</Text>
    </View>
  );
};

export default CaptureImageHead;

const styles = StyleSheet.create({
  main: {
    // borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 40,
  },
  text: {
    fontSize: 20,
    fontWeight: "500",
  },
  capture: {
    fontSize: 15,
    marginTop: 2,
  },
});
