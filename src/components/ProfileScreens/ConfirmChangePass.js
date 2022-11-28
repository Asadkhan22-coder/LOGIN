import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProfileHeader from "../ProfileHeader";
import ConfirmPassContainer from "./confirmPassContainer";
import * as SVG from "../../assets/SVG";
import { useNavigation } from "@react-navigation/native";

const ProfileConfirmPass = () => {
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
          Your new password must be different from previous used password
        </Text>
      </View>
      <ConfirmPassContainer />
    </View>
  );
};

export default ProfileConfirmPass;

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
    fontSize: 16,
    left: 8,
    // letterSpacing: 1,
    color: "#3E3E3E",
    marginTop: 10,
  },
});
