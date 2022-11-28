import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomHeader from "../CustomHeader";
import * as SVG from "../../assets/SVG";
import CaptureImageHead from "./CaptureImageHead";
import Button from "../../Buttons/button";
import { useNavigation } from "@react-navigation/native";

const CameraScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader
        backIcon={<SVG.BackIcon />}
        title={"Add Expense"}
        onClick={() => navigation.goBack()}
      />
      <CaptureImageHead />
      <View style={styles.capture}>
        <SVG.CaptureImage />
      </View>
      <View style={styles.btn}>
        <Button
          buttonStyle={{ color: "white" }}
          style={{ backgroundColor: "#2196F3", padding: 10, width: "100%" }}
          title={"Capture"}
        />
      </View>
    </SafeAreaView>
  );
};

export default CameraScreen;

const styles = StyleSheet.create({
  capture: {
    alignItems: "center",
    justifyContent: "center",
    // marginLeft: 25,
  },
  btn: {
    // borderWidth: 1,
    marginHorizontal: "12%",
    marginTop: 15,
  },
});
