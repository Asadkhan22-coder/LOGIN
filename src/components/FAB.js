import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import * as SVG from "../assets/SVG";

const FAB = ({ modalState, visibleState }) => {
  return (
    <TouchableOpacity
      onPress={() => modalState(!visibleState)}
      style={styles.plusIcon}
    >
      <SVG.PlusIcon />
    </TouchableOpacity>
  );
};

export default FAB;

const styles = StyleSheet.create({
  plusIcon: {
    position: "absolute",
    // borderWidth: 1,
    bottom: 50,
    right: 30,
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 40,
  },
});
