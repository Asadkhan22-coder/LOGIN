import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";

const TripExpenseHeading = () => {
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
      <View style={styles.main}>
        <Text style={styles.text}>Add Expense</Text>
        <Text style={styles.trip}>Trip Expense</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.name}>Trip ID & Name</Text>
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="Select"
          searchPlaceholder="Search..."
          value={value}
          onChange={(item) => {
            setValue(item.value);
          }}
        />
      </View>
    </>
  );
};

export default TripExpenseHeading;

const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 25,
    // borderWidth: 1,
  },
  text: {
    fontSize: 21,
    fontWeight: "500",
  },
  trip: {
    color: "#2196F3",
    fontWeight: "500",
    top: 5,
  },
  name: {
    fontSize: 17,
    fontWeight: "400",
  },
  container: {},
  dropdown: {
    marginTop: 16,
    height: 50,
    borderWidth: 1,
    borderColor: "#CAD7E2",
    borderRadius: 6,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
    left: 10,
  },
  selectedTextStyle: {
    fontSize: 16,
    left: 10,
  },
  iconStyle: {
    width: 25,
    height: 30,
    color: "black",
    right: 10,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
