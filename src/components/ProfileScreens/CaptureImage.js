import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const CaptureImage = ({ Capture, buttonName }) => {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.capture}>{Capture}</Text>
        <TouchableOpacity style={styles.text}>
          <Text style={styles.uploadText}>{buttonName}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CaptureImage;

const styles = StyleSheet.create({
  main: {
    // borderWidth: 1,
    marginHorizontal: 25,
    paddingHorizontal: 16,
    paddingVertical: 15,
    marginTop: 15,
    backgroundColor: "white",
    borderRadius: 14,
    // height: "22%",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    // borderWidth: 1,
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 4,
    backgroundColor: "#2196F3",
  },
  uploadText: {
    fontSize: 18,
    color: "white",
    fontWeight: "600",
  },
  capture: {
    top: 7,
    fontSize: 17,
    fontWeight: "400",
  },
});
