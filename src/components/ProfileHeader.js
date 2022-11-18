import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import * as SVG from "../assets/SVG";
import Button from "../Buttons/button";
import Ionicons from "@expo/vector-icons/Ionicons";

const ProfileHeader = ({ source, heading, Icon, number, button }) => {
  return (
    <>
      <View style={styles.header}>
        <View>
          <Image source={source} style={styles.image} />
          <View style={styles.camera}>{Icon}</View>
        </View>
        <Text style={styles.heading}>{heading}</Text>
        <Text style={[styles.heading, { fontSize: 14, color: "#B1B1B1" }]}>
          {number}
        </Text>
        <View style={styles.btn}>
          <View style={styles.status}>
            <Text style={{ fontSize: 16, fontWeight: "500" }}>Status</Text>
          </View>
          <View style={styles.online}>
            <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
              {button}
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "35%",
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 10,
    top: 15,
  },
  heading: {
    top: 15,
    fontSize: 22,
    fontWeight: "500",
    letterSpacing: 1,
  },
  camera: {
    backgroundColor: "#2196F3",
    width: 30,
    textAlign: "center",
    alignItems: "center",
    padding: 4,
    top: 5,
    left: 38,
    borderRadius: 6,
  },
  btn: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    top: 30,
  },
  status: {
    left: 30,
    top: 10,
  },
  online: {
    right: 40,
    height: 35,
    width: 90,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    backgroundColor: "#34C654",
  },
});
