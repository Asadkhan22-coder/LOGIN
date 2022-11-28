import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Input from "../Input";
import Button from "../../Buttons/button";

const ConfirmPassContainer = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>New Password</Text>

      <Input oneStyle={styles.container} style={styles.field} />

      <View style={styles.mainContainer2}>
        <Text style={styles.text}>Confirm Password</Text>
      </View>
      <Input oneStyle={styles.container} style={styles.field} />

      <Button
        title={"Save"}
        buttonStyle={{ color: "white" }}
        style={styles.btn}
      />
    </View>
  );
};

export default ConfirmPassContainer;

const styles = StyleSheet.create({
  main: {
    // borderWidth: 1,
    marginHorizontal: 25,
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginTop: 15,
    backgroundColor: "white",
    borderRadius: 14,
    height: "30%",
  },
  container: {
    height: "20%",
    width: "100%",
    borderRadius: 6,
    borderColor: "#CAD7E2",
  },
  field: {
    // borderWidth: 1,
    height: "100%",
    right: 50,
  },
  mainContainer2: {
    flexDirection: "row",
    paddingVertical: 2,
    marginTop: 10,
  },
  text: {
    fontSize: 15,
    fontWeight: "500",
    top: 7,
    left: 5,
  },
  btn: {
    backgroundColor: "#2196F3",
    marginTop: 25,
    width: "100%",
    padding: 10,
  },
});
