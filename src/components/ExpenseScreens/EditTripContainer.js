import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import Input from "../Input";
import TripExpenseInput from "../TripDetailScreens/TripExpenseInput";
import Button from "../../Buttons/button";

const EditTripContainer = () => {
  const [value, setValue] = useState(null);

  const data = [
    { label: "Item 1", value: "1" },
    { label: "Item 2", value: "2" },
    { label: "Item 3", value: "3" },
    { label: "Item 4", value: "4" },
    { label: "Item 5", value: "5" },
    { label: "Item 6", value: "6" },
    { label: "Item 7", value: "7" },
    { label: "Item 8", value: "8" },
  ];

  return (
    <>
      <TouchableOpacity style={styles.image}>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("../../assets/Bill.png")}
            style={styles.imageMain}
          />
          <View style={styles.changebtn}>
            <Text style={{ color: "white", fontWeight: "500" }}>Change</Text>
          </View>
        </View>
      </TouchableOpacity>

      <View style={styles.main}>
        <Text style={styles.textExpense}>Expense Type</Text>
        <Dropdown
          style={styles.dropdown2}
          placeholderStyle={{ marginLeft: 10 }}
          iconStyle={styles.iconStyle}
          data={data}
          maxHeight={200}
          labelField="label"
          valueField="value"
          placeholder="Select Type"
          value={value}
          onChange={(item) => {
            setValue(item.secondDropdown);
          }}
        />
        <View style={{ marginTop: 10 }}>
          <TripExpenseInput btnName={"Update"} />
        </View>
      </View>
    </>
  );
};

export default EditTripContainer;

const styles = StyleSheet.create({
  image: {
    // borderWidth: 1,
    marginHorizontal: 20,
    width: "90%",
    marginVertical: 20,
  },
  imageMain: {
    height: 240,
    width: "100%",
    // borderWidth: 1,
    borderRadius: 16,
  },
  main: {
    // borderWidth: 1,
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    paddingVertical: 20,
    marginTop: 20,
  },
  main2: {
    // width: "100%",
    // borderWidth: 1,
    // paddingHorizontal: 25,
  },
  textExpense: {
    fontSize: 17,
    fontWeight: "400",
  },
  dropdown2: {
    // width: "40%",
    height: 50,
    borderWidth: 1,
    // marginLeft: 17,
    borderColor: "#CAD7E2",
    borderRadius: 6,
    marginTop: 20,
  },
  iconStyle: {
    width: 25,
    height: 30,
    color: "black",
    marginRight: 10,
  },
  text: {
    fontSize: 17,
    marginLeft: 5,
    fontWeight: "400",
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
  text2: {
    fontSize: 17,
    marginLeft: 5,
    fontWeight: "400",
    marginTop: 10,
  },
  input2: {
    flexDirection: "row",
    justifyContent: "space-around",
    // borderWidth: 1,
  },
  input3: {
    // borderWidth: 1,
    height: "100%",
    right: 50,
  },
  oneStyle2: {
    height: 50,
    borderRadius: 6,
    width: "100%",
    borderColor: "#CAD7E2",
    width: "75%",
    // borderWidth: 1,
  },
  rupee: {
    marginTop: 16,
    // borderWidth: 1,
    paddingHorizontal: 30,
    paddingVertical: 14,
    borderRadius: 4,
    backgroundColor: "#2196F3",
    color: "white",
    fontSize: 17,
    fontWeight: "500",
  },
  changebtn: {
    position: "absolute",
    left: "77%",
    top: 12,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 4,
    backgroundColor: "#2196F3",
  },
});
