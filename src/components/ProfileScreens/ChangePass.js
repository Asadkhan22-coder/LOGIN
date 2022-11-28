import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import ProfileHeader from "../ProfileHeader";
import * as SVG from "../../assets/SVG";
import ChangePassContainer from "./ChangePassContainer";
import { useNavigation } from "@react-navigation/native";

const ChangePass = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ProfileHeader
        BackIcon={<SVG.BackIcon />}
        source={require("../../assets/ChangePass.png")}
        style={styles.image}
        onclick={() => navigation.goBack()}
      />
      <View style={styles.para}>
        <Text style={styles.text}>
          Please Enter Your Phone number. We'll send you a confirmation code. We
          use it to ensure the security of our users.
        </Text>
      </View>
      <ChangePassContainer />
    </SafeAreaView>
  );
};

export default ChangePass;

const styles = StyleSheet.create({
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
  image: {
    height: 200,
    width: 200,
    marginTop: "20%",
  },
});
