import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomHeader from "../CustomHeader";
import * as SVG from "../../assets/SVG";
import ProfileButton from "../../Buttons/ProfileButton";
import { useNavigation } from "@react-navigation/native";

const BataAllowance = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader
        title={"Bata Allowance"}
        backIcon={
          <>
            <SVG.BackIcon />
          </>
        }
        onClick={() => navigation.goBack()}
      />
      <ProfileButton
        icon1={<SVG.Amount />}
        title={"Bata Recieved"}
        icon2={"₹ 12,500"}
        onClick={() => ProfileScreens("ProfileInfo")}
        secondIcon={{ color: "#2196F3", fontSize: 17, fontWeight: "600" }}
      />
      <ProfileButton
        icon1={<SVG.Car />}
        title={"Total Trips"}
        icon2={"12"}
        onClick={() => ProfileScreens("ProfileInfo")}
        secondIcon={{ color: "#2196F3", fontSize: 17, fontWeight: "600" }}
      />
    </SafeAreaView>
  );
};

export default BataAllowance;

const styles = StyleSheet.create({});
