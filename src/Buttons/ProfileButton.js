import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import * as SVG from "../assets/SVG";

const ProfileButton = ({
  icon1,
  title,
  icon2,
  styling,
  stylingbtn,
  iconstyle,
}) => {
  return (
    <>
      <View style={[styles.btnContainer, styling]}>
        <View style={styles.head}>
          <Text style={[{ left: 5 }, iconstyle]}>{icon1}</Text>

          <Text style={[styles.text, stylingbtn]}>{title}</Text>
        </View>
        <Text style={{ right: 10 }}>{icon2}</Text>
      </View>
    </>
  );
};

export default ProfileButton;

const styles = StyleSheet.create({
  btnContainer: {
    // borderWidth: 1,
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    height: "8%",
    backgroundColor: "#ffffff",
    alignItems: "center",
    borderRadius: 12,
    left: 20,
    top: 30,
    marginBottom: 20,
  },
  head: {
    flexDirection: "row",
  },
  text: {
    fontSize: 20,
    left: 22,
    bottom: 1,
    fontWeight: "500",
  },
});
