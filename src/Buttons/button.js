import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import Color from "../assets/Color";

const Button = ({ onClick, title, style }) => {
  return (
    <TouchableOpacity
      style={[styles.signUp, { backgroundColor: Color.WHITE }, style]}
      onPress={() => onClick()}
    >
      <Text style={[styles.title, { color: Color.BLACK }]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  signUp: {
    // borderWidth: 1,
    padding: 16,
    width: "80%",
    borderRadius: 29,
    alignItems: "center",
    // position: "absolute",
    // marginLeft: 64,
    // marginTop: "95%",
  },
  title: {
    fontSize: 22,
    fontWeight: "500",
  },
});
