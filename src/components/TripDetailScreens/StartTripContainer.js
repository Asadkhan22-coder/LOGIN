import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import * as SVG from "../../assets/SVG";
import { useNavigation } from "@react-navigation/native";

const StartTripContainer = ({ detail }) => {
  const goNavigate = (detail) => {
    navigation.navigate("LiveTrip", {
      TripDetails: detail,
    });
  };

  const navigation = useNavigation();

  return (
    <>
      <View
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          marginTop: -50,
        }}
      >
        <TouchableOpacity onPress={() => goNavigate(detail)}>
          <View style={styles.navigate}>
            <Text style={styles.textnav}>Navigate</Text>
            <SVG.Arrow style={styles.arrow} />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.main}>
        <View style={styles.tripHead}>
          <View style={styles.tripStart}>
            <Text style={styles.text}>Trip Start (Date & Time)</Text>
            <Text style={styles.date}>{detail.TripStartDateAndTime}</Text>
          </View>

          <View style={styles.tripEnd}>
            <Text style={styles.text}>Trip End (Date & Time)</Text>
            <Text style={styles.date}>{detail.TripEndDateAndTime}</Text>
          </View>
        </View>

        <View style={styles.location}>
          <Text style={styles.loc}>{detail.TripStartLocation}</Text>
          <Text style={styles.dis}>{detail.TripEndLocation}</Text>
        </View>

        <View style={styles.locate}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: 2,
            }}
          >
            <View style={styles.green}></View>
            <Text style={styles.pune}>Pune (Maharashtra)</Text>
            <Text style={{ color: "#2496F3", fontWeight: "600" }}>259.6km</Text>
          </View>
          <View>
            <Text style={styles.add}>Postmaster, Pune H.O, Pune</Text>
          </View>
        </View>

        <View style={styles.locate}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={styles.red}></View>
            <Text style={styles.mumbai}>Mumbai (Maharashtra)</Text>
            <Text style={styles.average}>Average Speed</Text>
          </View>
          <View style={styles.mumbailocation}>
            <Text style={styles.andheri}>Andheri H.O, Mumbai</Text>
            <Text style={{ color: "#2496F3", fontWeight: "600" }}>60km/hr</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default StartTripContainer;

const styles = StyleSheet.create({
  navigate: {
    flexDirection: "row",
    // borderWidth: 1,
    // width: "31%",
    // padding: 5,
    justifyContent: "center",
    borderRadius: 16,
    backgroundColor: "white",
    paddingVertical: 5,
    paddingHorizontal: 15,
    alignItems: "center",
    // marginTop: -50,
    // marginLeft: 150,
  },
  textnav: {
    fontSize: 15,
    fontWeight: "600",
    marginRight: 5,
  },
  arrow: {
    // left: 10,
    // top: 3,
  },
  main: {
    // borderWidth: 1,
    marginTop: 50,
    backgroundColor: "white",
    paddingHorizontal: 30,
    paddingVertical: 30,
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
  },
  tripHead: {
    // borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical: 10,
  },
  tripStart: {
    // borderWidth: 1,
    paddingVertical: 6,
    borderRadius: 6,
    backgroundColor: "#E7F4FF",
    width: "44%",
  },
  tripEnd: {
    // borderWidth: 1,
    paddingVertical: 6,
    borderRadius: 6,
    backgroundColor: "#E7F4FF",
    width: "42%",
  },
  text: {
    fontSize: 11,
    textAlign: "center",
    color: "#414141",
    padding: 4,
  },
  date: {
    fontWeight: "500",
    textAlign: "center",
    padding: 2,
  },
  location: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginTop: 5,
  },
  loc: {
    fontSize: 15,
    fontWeight: "600",
    marginTop: 6,
  },
  dis: {
    fontSize: 15,
    fontWeight: "600",
    marginTop: 6,
  },
  locate: {
    // borderWidth: 1,
    paddingHorizontal: 16,
    marginTop: 12,
  },
  green: {
    height: 12,
    width: 12,
    // borderWidth: 1,
    borderRadius: 6,
    backgroundColor: "#34C654",
    top: 2,
  },
  red: {
    height: 12,
    width: 12,
    // borderWidth: 1,
    borderRadius: 6,
    backgroundColor: "#EF3131",
    top: 2,
  },
  pune: {
    right: 48,
    fontWeight: "600",
  },
  add: {
    fontSize: 12,
    left: 29,
    color: "#414141",
  },
  mumbai: {
    right: 14,
    fontWeight: "600",
  },
  mumbailocation: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingVertical: 2,
  },
  andheri: {
    left: 29,
    fontSize: 12,
    color: "#414141",
  },
  average: {
    fontSize: 15,
    fontWeight: "600",
  },
});
