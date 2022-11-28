import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomHeader from "../CustomHeader";
import * as SVG from "../../assets/SVG";
import CaptureImage from "./CaptureImage";
import LicenseInfoContainer from "./LicenseEditInfoContainer";
import { useNavigation } from "@react-navigation/native";

const LicenseEditInfo = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader
        title={"License Information"}
        backIcon={<SVG.BackIcon />}
        onClick={() => navigation.goBack()}
      />

      <Text style={styles.text}>License Information</Text>
      <CaptureImage Capture={"Capture Image"} buttonName={"Upload"} />
      <LicenseInfoContainer />
    </SafeAreaView>
  );
};

export default LicenseEditInfo;

const styles = StyleSheet.create({
  text: {
    fontSize: 21,
    fontWeight: "500",
    marginTop: 20,
    marginLeft: 25,
  },
});
