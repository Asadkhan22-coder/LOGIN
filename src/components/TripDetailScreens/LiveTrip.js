import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native";
import * as SVG from "../../assets/SVG";
import LiveTripFooter from "./LiveTripFooter";
import LiveTripMap from "./LiveTripMap";

const LiveTrip = (prop) => {
  const [selectedTrip, setSelectedTrip] = useState(
    prop.route.params.TripDetails
  );

  // console.log("trip details", JSON.stringify(prop));
  const navigation = useNavigation();

  const backToStartTrip = (value) => {
    navigation.navigate(value);
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LiveTripMap source={require("../../assets/LiveTrip.png")} />
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
        <SVG.BackIcon />
      </TouchableOpacity>
      <LiveTripFooter detail={selectedTrip} />
    </SafeAreaView>
  );
};

export default LiveTrip;

const styles = StyleSheet.create({
  back: {
    position: "absolute",
    top: 80,
    left: 25,
    height: 40,
    width: 40,
    // borderWidth: 1,
    borderRadius: 20,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
