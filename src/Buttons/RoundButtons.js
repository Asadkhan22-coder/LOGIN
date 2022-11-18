import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const RoundButtons = ({ icon, onClick, style, arrowIcon, arrowStyle }) => {
  return (
    <>
      <TouchableOpacity style={[styles.icon, style]} onPress={() => onClick()}>
        {icon}
      </TouchableOpacity>

      <TouchableOpacity style={[styles.icon, arrowStyle]}>
        {arrowIcon}
      </TouchableOpacity>
    </>
  );
};

export default RoundButtons;

const styles = StyleSheet.create({
  icon: {
    left: 30,
    position: "absolute",
    top: 30,
    zIndex: 100,
    width: 40,
    height: 40,
    borderRadius: 20,
    // borderWidth: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
