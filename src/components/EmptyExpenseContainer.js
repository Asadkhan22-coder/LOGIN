import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import * as SVG from "../assets/SVG";

const EmptyExpenseContainer = () => {
  return (
    <View style={styles.container}>
      <SVG.EmptyLogo style={styles.logo} />
    </View>
  );
};

export default EmptyExpenseContainer;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  logo: {
    justifyContent: "center",
    alignContent: "center",
    marginHorizontal: 35,
    marginVertical: 50,
  },
});
