import { StyleSheet, Text, View } from "react-native";
import React from "react";
import * as SVG from "../../assets/SVG";

const TripCustomerInfo = ({ information }) => {
  return (
    <View style={styles.main}>
      <View>
        <Text style={styles.customer}>Customer Information</Text>
      </View>

      <View style={styles.heading}>
        <Text style={styles.text}>{information.Name}</Text>
        <SVG.Telephone style={styles.icon} />
        <Text style={styles.number}>{information.ContactNumber}</Text>
      </View>

      <View style={styles.addressHead}>
        <Text style={styles.add}>Address</Text>
        <Text style={styles.address}>{information.Address}</Text>
      </View>
    </View>
  );
};

export default TripCustomerInfo;

const styles = StyleSheet.create({
  main: {
    // borderWidth: 1,
    marginHorizontal: 25,
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginTop: 15,
    backgroundColor: "white",
    borderRadius: 14,
  },
  customer: {
    color: "#2196F3",
    fontSize: 15,
    fontWeight: "600",
  },
  heading: {
    flexDirection: "row",
    justifyContent: "space-between",
    top: 5,
    borderBottomWidth: 1,
    paddingVertical: 5,
    borderBottomColor: "#E9EFF3",
  },
  text: {
    fontSize: 15,
    fontWeight: "500",
  },
  icon: {
    left: 35,
  },
  number: {
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    bottom: 4,
    borderRadius: 6,
    color: "#2496F3",
    borderColor: "#2496F3",
    fontWeight: "600",
    fontSize: 16,
  },
  addressHead: {
    top: 5,
  },
  add: {
    fontSize: 15,
    color: "#2496F3",
    fontWeight: "500",
    paddingVertical: 10,
  },
  address: {
    fontWeight: "500",
    fontSize: 15,
  },
});
