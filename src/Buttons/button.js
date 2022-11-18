import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import Color from "../assets/Color";
import { Ionicons } from "@expo/vector-icons";
import * as SVG from "../assets/SVG";

const Button = ({ onClick, title, style, buttonStyle, name, iconstyle }) => {
  return (
    <TouchableOpacity
      style={[styles.signUp, { backgroundColor: Color.WHITE }, style]}
      onPress={() => onClick()}
    >
      <Text style={[styles.title, { color: Color.BLACK }, buttonStyle]}>
        {title}
      </Text>
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
  },
  title: {
    fontSize: 22,
    fontWeight: "500",
  },
});
