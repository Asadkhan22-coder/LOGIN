import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import * as SVG from "../assets/SVG";
import CustomHeader from "../components/CustomHeader";
import StartTripMap from "../components/TripDetailScreens/StartTripMap";
import StartTripContainer from "../components/TripDetailScreens/StartTripContainer";
import { useNavigation } from "@react-navigation/native";

const StartTrip = (prop) => {
  const [selectedTrip, setSelectedTrip] = useState(
    prop.route.params.TripDetails
  );
  // console.log("details", prop.route.params.TripDetails);

  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader
        title={"Start Trip"}
        backIcon={<SVG.BackIcon />}
        icon={
          <>
            <SVG.PlusIcon />
          </>
        }
        onClick={() => navigation.goBack()}
      />
      <StartTripMap source={require("../assets/startTripMap.png")} />
      <StartTripContainer detail={selectedTrip} />
    </SafeAreaView>
  );
};

export default StartTrip;

const styles = StyleSheet.create({});
