import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import CustomHeader from "../CustomHeader";
import * as SVG from "../../assets/SVG";
import LicenseInfoContainer from "./LicenseInfoContainer";
import Clock from "./Clock";
import Button from "../../Buttons/button";
import { useNavigation } from "@react-navigation/native";

const LicenseInformation = () => {
  const navigation = useNavigation();
  const EditInfo = (value) => {
    navigation.navigate(value);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader
        title={"License Information"}
        backIcon={<SVG.BackIcon />}
        icon={<SVG.Edit />}
        next={() => EditInfo("LicenseEditInfo")}
        onClick={() => navigation.goBack()}
      />

      <Image
        source={require("../../assets/License.png")}
        style={styles.image}
      />
      <Text style={styles.text}>License Information</Text>
      <LicenseInfoContainer />
      <Clock />
    </SafeAreaView>
  );
};

export default LicenseInformation;

const styles = StyleSheet.create({
  image: {
    width: "90%",
    height: "30%",
    marginTop: 10,
    marginLeft: 20,
  },
  text: {
    fontSize: 21,
    fontWeight: "500",
    marginTop: 20,
    marginLeft: 25,
  },
});
