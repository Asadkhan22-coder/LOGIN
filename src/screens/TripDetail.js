import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import Map from "../components/TripDetailScreens/Map";
import CustomHeader from "../components/CustomHeader";
import * as SVG from "../assets/SVG";
import TripDInfo from "../components/TripDetailScreens/TripDInfo";
import TripDAmount from "../components/TripDetailScreens/TripDAmount";
import TripCustomerInfo from "../components/TripDetailScreens/TripCustomerInfo";
import TripPlan from "../components/TripDetailScreens/TripPlan";
import { useNavigation, useRoute } from "@react-navigation/native";
import AddBills from "../components/TripDetailScreens/AddBills";
import { Store } from "../Store/mobXstore";
import { observer } from "mobx-react-lite";
import TripNotes from "../components/TripDetailScreens/TripNotes";

const TripDetail = (prop) => {
  const [first, setfirst] = useState(false);
  const [selectedTrip, setSelectedTrip] = useState(
    prop.route.params.TripDetails
  );

  var navigation = useNavigation();

  const back = (value) => {
    navigation.navigate(value);
  };
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <CustomHeader
          title={"Trip Details"}
          backIcon={<SVG.BackIcon />}
          icon={<SVG.PlusIcon />}
          onClick={() => back("TripListing")}
        />
        <ScrollView style={{ height: "100%" }}>
          <Map />
          <TripDInfo trip={selectedTrip.TripData} />
          <TripDAmount
            show={() => Store.setEndTrip(!Store.EndTrip)}
            Amount={selectedTrip.TripAmount}
          />
          <TripCustomerInfo information={selectedTrip.CustomerInformation} />
          <AddBills />
          <TripPlan details={selectedTrip.PlannedDateAndTime} />
          <TripNotes />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default observer(TripDetail);

const styles = StyleSheet.create({});
