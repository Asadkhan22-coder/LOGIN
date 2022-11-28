import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomHeader from "../CustomHeader";
import * as SVG from "../../assets/SVG";
import { useNavigation } from "@react-navigation/native";
import EditTripContainer from "./EditTripContainer";

const EditTripExpense = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader
        title={"Trip Expenses"}
        backIcon={<SVG.BackIcon />}
        onClick={() => navigation.goBack()}
      />
      <EditTripContainer />
    </SafeAreaView>
  );
};

export default EditTripExpense;

const styles = StyleSheet.create({});
