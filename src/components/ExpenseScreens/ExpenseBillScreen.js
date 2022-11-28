import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomHeader from "../CustomHeader";
import * as SVG from "../../assets/SVG";
import BillingScreenContainer from "./BillingScreenContainer";
import MainBill from "./MainBill";
import { useNavigation } from "@react-navigation/native";

const ExpenseBillScreen = () => {
  const navigation = useNavigation();
  const BillScreen = (value) => {
    navigation.navigate(value);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title={"Trip Expense"} backIcon={<SVG.BackIcon />} />
      <BillingScreenContainer onPress={() => BillScreen("MainBill")} />
    </SafeAreaView>
  );
};

export default ExpenseBillScreen;

const styles = StyleSheet.create({});
