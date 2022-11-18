import React from "react";
import { Image, StyleSheet, View } from "react-native";

const Map = () => {
  return (
    <View>
      <Image
        source={require("../../assets/Map.png")}
        style={{ width: "100%" }}
      />
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({});
