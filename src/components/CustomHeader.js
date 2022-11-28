import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as SVG from "../assets/SVG";

const CustomHeader = ({ title, onClick, backIcon, icon, next }) => {
  return (
    <View style={styles.heading}>
      <View style={styles.heading2}>
        <View style={{ width: "20%", alignItems: "center" }}>
          <TouchableOpacity onPress={() => onClick()}>
            {backIcon}
          </TouchableOpacity>
        </View>
        <View style={{ width: "60%", alignItems: "center" }}>
          <Text style={styles.name}>{title}</Text>
        </View>
        <TouchableOpacity
          style={{ width: "20%", alignItems: "center" }}
          onPress={() => next()}
        >
          {icon}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  heading: {
    width: "100%",
    height: "8%",
    backgroundColor: "white",
    alignItems: "center",
  },
  heading2: {
    flexDirection: "row",
    paddingHorizontal: 8,
    width: "100%",
    alignItems: "center",
    height: "100%",
  },
  name: {
    fontSize: 25,
    fontWeight: "500",
  },
  filter: {
    flexDirection: "row",
    fontSize: 20,
  },
});
