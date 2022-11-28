import { StyleSheet, Text, View } from "react-native";
import React from "react";
import * as SVG from "../../assets/SVG";
import Button from "../../Buttons/button";

const DeletePopUp = ({ isvisible, onPress }) => {
  return (
    <>
      {isvisible && (
        <View style={styles.main}>
          <View style={styles.iconHead}>
            <SVG.PopupDelete />
          </View>
          <View>
            <Text style={styles.textHeading}>
              You are about to delete the bill
            </Text>
            <Text style={styles.textPara}>
              This will be delete your bill. Are you sure?
            </Text>
          </View>

          <View style={styles.btns}>
            <Button
              style={{ backgroundColor: "#DEDEDE", width: "35%", padding: 10 }}
              buttonStyle={{ fontSize: 17 }}
              title={"Cancel"}
            />
            <Button
              style={{ backgroundColor: "#DC2127", width: "35%", padding: 10 }}
              buttonStyle={{ fontSize: 17, color: "white" }}
              title={"Delete"}
            />
          </View>
        </View>
      )}
    </>
  );
};

export default DeletePopUp;

const styles = StyleSheet.create({
  main: {
    // borderWidth: 1,
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    paddingVertical: 25,
    top: 90,
    width: "91%",
    alignItems: "center",
  },
  iconHead: {
    // borderWidth: 1,
    height: 65,
    width: 65,
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    // paddingVertical: 50,
  },
  textHeading: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    paddingVertical: 5,
    marginTop: 20,
  },
  textPara: {
    fontSize: 12,
    textAlign: "center",
    marginLeft: 5,
    color: "#7D7D7D",
  },
  btns: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    // borderWidth: 1,
    width: "100%",
    marginTop: 10,
    // marginHorizontal: 120,
    marginVertical: 20,
    paddingVertical: 10,
  },
});
