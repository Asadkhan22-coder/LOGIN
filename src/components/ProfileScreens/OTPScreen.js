import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import ProfileHeader from "../ProfileHeader";
import * as SVG from "../../assets/SVG";
import OTPContainer from "./OTPContainer";
import { useNavigation } from "@react-navigation/native";

const OTPScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <ProfileHeader
        source={require("../../assets/ChangePass.png")}
        style={styles.image}
        BackIcon={<SVG.BackIcon />}
        onclick={() => navigation.goBack()}
      />
      <View style={styles.para}>
        <Text style={styles.text}>
          Enter the 6 digit verification code that has been sent to{" "}
          <Text style={{ color: "#2196F3", fontWeight: "600" }}>
            +0 000 000 0000
          </Text>{" "}
          to reset your password
        </Text>
      </View>

      <OTPContainer />
    </View>
  );
};

export default OTPScreen;

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 200,
    marginTop: "20%",
  },
  para: {
    // borderWidth: 1,
    padding: 20,
  },
  text: {
    fontSize: 15,
    left: 8,
    letterSpacing: 1,
    color: "#3E3E3E",
  },
});
