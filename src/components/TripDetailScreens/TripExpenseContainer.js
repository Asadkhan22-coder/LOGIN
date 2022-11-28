import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";

const TripExpenseContainer = () => {
  const [secondDropdown, setSecondDropdown] = useState(null);

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
      <View style={styles.expenseType}>
        <Text style={{ marginRight: 5, marginTop: 10, fontSize: 17 }}>
          Expense Type
        </Text>
        <Dropdown
          style={styles.dropdown2}
          placeholderStyle={{ marginLeft: 10 }}
          iconStyle={styles.iconStyle}
          data={data}
          maxHeight={200}
          labelField="label"
          valueField="value"
          placeholder="Select Type"
          value={secondDropdown}
          onChange={(item) => {
            setSecondDropdown(item.secondDropdown);
          }}
        />
      </View>
    </>
  );
};

export default TripExpenseContainer;

const styles = StyleSheet.create({
  dropdown2: {
    width: "40%",
    borderWidth: 1,
    borderColor: "#CAD7E2",
    borderRadius: 6,
  },
  expenseType: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  iconStyle: {
    width: 25,
    height: 30,
    color: "black",
    right: 10,
  },
});
