import { StyleSheet, Text, View } from "react-native";
import React from "react";
import * as SVG from "../../assets/SVG";
import Button from "../../Buttons/button";
import Input from "../Input";
import { useNavigation } from "@react-navigation/native";

const ChangePassContainer = () => {
  const navigation = useNavigation();
  const OTPScreen = (value) => {
    navigation.navigate(value);
  };

  return (
    <View style={styles.main}>
      <View style={styles.mainContainer}>
        <Text style={styles.text}>Enter Email or Phone Number</Text>
      </View>
      <Input
        oneStyle={styles.container}
        style={styles.field}
        placeholder={"Demo@gmail.com"}
      />

      <Button
        title={"Continue"}
        buttonStyle={{ color: "white" }}
        style={styles.btn}
        onClick={() => OTPScreen("OTPScreen")}
      />
    </View>
  );
};

export default ChangePassContainer;

const styles = StyleSheet.create({
  main: {
    // borderWidth: 1,
    marginHorizontal: 25,
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginTop: 15,
    backgroundColor: "white",
    borderRadius: 14,
    height: "22%",
  },
  mainContainer: {
    flexDirection: "row",
    paddingVertical: 2,
  },
  text: {
    fontSize: 15,
    fontWeight: "500",
    top: 7,
    left: 5,
  },
  container: {
    height: "32%",
    width: "100%",
    borderRadius: 6,
    borderColor: "#CAD7E2",
  },
  btn: {
    backgroundColor: "#2196F3",
    marginTop: 25,
    width: "100%",
    padding: 10,
  },
});
