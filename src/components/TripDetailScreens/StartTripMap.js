import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const StartTripMap = ({ source }) => {
  return (
    <View>
      <Image style={styles.image} source={source} />
    </View>
  );
};

export default StartTripMap;

const styles = StyleSheet.create({
  image: {
    // height: "0%",
    width: "85%",
    // borderWidth: 1,
    left: 30,
    marginTop: 25,
    // justifyContent: "center",
    // alignItems: "center",
    // alignContent: "center",
  },
});
