import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Input from "../Input";
import * as SVG from "../../assets/SVG";
import Button from "../../Buttons/button";

const ProfileInputScreen = () => {
  return (
    <View style={styles.main}>
      <View style={styles.mainContainer}>
        <SVG.User />
        <Text style={styles.text}>First Name</Text>
      </View>
      <Input oneStyle={styles.container} style={styles.field} />

      <View style={styles.mainContainer2}>
        <SVG.User />
        <Text style={styles.text}>Last Name</Text>
      </View>
      <Input oneStyle={styles.container} style={styles.field} />
      <Button
        title={"Save Profile"}
        buttonStyle={{ color: "white" }}
        style={styles.btn}
      />
    </View>
  );
};

export default ProfileInputScreen;

const styles = StyleSheet.create({
  main: {
    // borderWidth: 1,
    marginHorizontal: 25,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 15,
    backgroundColor: "white",
    borderRadius: 14,
    height: "33%",
  },
  mainContainer: {
    flexDirection: "row",
    paddingVertical: 2,
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
  container: {
    height: "18%",
    width: "100%",
    borderRadius: 6,
    borderColor: "#CAD7E2",
  },
  field: {
    // borderWidth: 1,
    height: "100%",
    right: 50,
  },
  btn: {
    backgroundColor: "#2196F3",
    marginTop: 25,
    width: "100%",
    padding: 10,
  },
});
