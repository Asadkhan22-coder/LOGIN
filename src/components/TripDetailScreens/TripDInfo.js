import { StyleSheet, Text, View } from "react-native";
import React from "react";

const TripDInfo = ({ trip }) => {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.text}>Trip Name & ID</Text>
        <Text style={styles.text2}>{trip.Tripname}</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.text}>License Plate Number</Text>
        <Text style={styles.text2}>{trip.LicensePlateNumber}</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.text}>Vehicle Insurance Expiry</Text>
        <Text style={styles.text2}>{trip.VehicleInsuranceExpiry}</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.text}>Vehicle Type</Text>
        <Text style={styles.text2}>{trip.VehicleType}</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.text}>Trip Type</Text>
        <View style={styles.one}>
          <Text style={styles.oneway}>{trip.TripType}</Text>
        </View>
      </View>

      <View style={styles.container}>
        <Text style={styles.text}>Trip Status</Text>
        <Text style={styles.notStarted}>{trip.TripStatus}</Text>
      </View>
    </View>
  );
};

export default TripDInfo;

const styles = StyleSheet.create({
  main: {
    // borderWidth: 1,
    marginHorizontal: 25,
    paddingHorizontal: 10,
    paddingVertical: 7,
    marginTop: -30,
    backgroundColor: "white",
    // height: "29%",
    borderRadius: 14,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 6,
  },
  text: {
    color: "grey",
  },
  text2: {
    fontWeight: "500",
  },
  one: {
    backgroundColor: "#2196F3",
    borderRadius: 12,
  },
  oneway: {
    paddingHorizontal: 14,
    paddingVertical: 2,
    color: "white",
    fontWeight: "500",
  },
  notStarted: {
    // borderWidth: 1,
    paddingHorizontal: 9,
    backgroundColor: "#FFEAC0",
    color: "#FFAA2B",
    paddingVertical: 2,
  },
});
