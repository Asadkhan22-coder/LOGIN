import { StyleSheet, Text, View } from "react-native";
import React from "react";
import * as SVG from "../../assets/SVG";

const AddBills = () => {
  return (
    <>
      <View style={styles.main}>
        <View style={styles.heading}>
          <Text style={styles.text}>Added Billes</Text>
          <View style={styles.number}>
            <SVG.Plus style={styles.icon} />
            <Text style={styles.addExpenses}>Add Expenses</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default AddBills;

const styles = StyleSheet.create({
  main: {
    // borderWidth: 1,
    marginHorizontal: 25,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginTop: 15,
    backgroundColor: "white",
    borderRadius: 14,
  },
  heading: {
    flexDirection: "row",
    justifyContent: "space-between",
    top: 5,
    paddingVertical: 5,
  },
  text: {
    fontSize: 15,
    fontWeight: "500",
  },
  icon: {
    right: 5,
    top: 2,
  },
  number: {
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 5,
    bottom: 4,
    borderRadius: 4,
    borderColor: "#2496F3",
    fontSize: 16,
    flexDirection: "row",
  },
  addExpenses: {
    color: "#2496F3",
    fontWeight: "500",
  },
});
