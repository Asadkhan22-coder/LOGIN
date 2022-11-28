import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Input from "../Input";
import Button from "../../Buttons/button";

const TripExpenseInput = ({ Amountstyle, titleStyle, btnName = "Submit" }) => {
  return (
    <>
      <View style={styles.main}>
        <Text style={styles.text}>Title</Text>
        <Input style={[styles.input, titleStyle]} oneStyle={styles.oneStyle} />

        <Text style={styles.text2}>Amount</Text>
        <View style={styles.input2}>
          <Input
            style={[styles.input3, Amountstyle]}
            oneStyle={styles.oneStyle2}
          />
          <View style={styles.rupeeMain}>
            <Text style={styles.rupee}>Rs</Text>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <Button
          title={btnName}
          buttonStyle={{ color: "white" }}
          style={{
            backgroundColor: "#2196F3",
            width: "100%",
            padding: 10,
            // borderWidth: 1,
          }}
        />
      </View>
    </>
  );
};

export default TripExpenseInput;

const styles = StyleSheet.create({
  main: {
    // paddingHorizontal: 25,
  },
  text: {
    fontSize: 17,
    marginLeft: 5,
    fontWeight: "400",
    marginTop: 10,
  },
  text2: {
    fontSize: 17,
    marginLeft: 5,
    fontWeight: "400",
    marginTop: 15,
  },
  oneStyle: {
    height: 50,
    borderRadius: 6,
    width: "100%",
    borderColor: "#CAD7E2",
  },
  input: {
    // borderWidth: 1,
    height: "100%",
    right: 60,
  },
  input3: {
    // borderWidth: 1,
    height: "100%",
    right: 50,
  },
  oneStyle2: {
    height: 50,
    borderRadius: 6,
    // width: "100%",
    borderColor: "#CAD7E2",
    width: "70%",
    // borderWidth: 1,
  },
  input2: {
    flexDirection: "row",
    justifyContent: "space-between",
    // borderWidth: 1,
  },
  rupeeMain: {
    // borderWidth: 1,
    paddingHorizontal: 30,
    // paddingVertical: 14,
    borderRadius: 8,
    backgroundColor: "#2196F3",
    justifyContent: "center",
    height: 50,
    marginTop: 14,
  },
  rupee: {
    color: "white",
    fontSize: 17,
    fontWeight: "500",
  },
  footer: {
    // borderWidth: 1,
    // marginHorizontal: 30,
    marginVertical: 15,
  },
});
