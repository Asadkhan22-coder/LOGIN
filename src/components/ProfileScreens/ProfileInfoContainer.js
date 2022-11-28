import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ProfileInfoContainer = () => {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.text}>Phone</Text>
        <Text style={styles.num}>+91 1234567890</Text>
      </View>

      <View style={styles.container2}>
        <Text style={styles.text}>Email</Text>
        <Text style={styles.num}>Demo@gmail.com</Text>
      </View>

      <View>
        <Text style={styles.add}>Address</Text>
        <Text style={styles.num}>141-2, Vijay Nagar, Indore</Text>
      </View>
    </View>
  );
};

export default ProfileInfoContainer;

const styles = StyleSheet.create({
  main: {
    // borderWidth: 1,
    marginHorizontal: 25,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 15,
    backgroundColor: "white",
    // borderRadius: 14,
  },
  container: {
    borderBottomWidth: 1,
    borderBottomColor: "#E9EFF3",
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  container2: {
    borderBottomWidth: 1,
    borderBottomColor: "#E9EFF3",
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  text: {
    fontSize: 15,
    fontWeight: "500",
  },
  num: {
    paddingVertical: 10,
    fontSize: 14,
    color: "#2196F3",
    fontWeight: "500",
  },
  add: {
    fontSize: 15,
    fontWeight: "500",
    marginTop: 10,
  },
});
