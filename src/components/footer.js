import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const Footer = ({ name, heading, reciever }) => {
  return (
    <View style={styles.main}>
      <Text style={styles.heading}>{heading}</Text>
      <TouchableOpacity onPress={() => reciever()}>
        <Text style={styles.name}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  heading: {
    textAlign: "center",
    // marginTop: 30,
    fontSize: 17,
    letterSpacing: 1,
  },
  name: {
    textAlign: "center",
    // marginTop: 10,
    fontSize: 22,
    fontWeight: "500",
  },
  main: {
    marginVertical: 40,
  },
});
