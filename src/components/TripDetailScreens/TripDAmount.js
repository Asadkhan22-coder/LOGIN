import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Store } from "../../Store/mobXstore";
import { observer } from "mobx-react-lite";

const TripDAmount = ({ show, Amount }) => {
  // console.log("show", show);
  // const [show, setShow] = useState(false);

  /* <Button title={"test"} onPress={() => setShow(!show)} /> */

  return (
    <>
      <View style={styles.main}>
        <View style={styles.container}>
          <Text style={styles.text}>Advance Amount</Text>
          <Text style={styles.amount}>{Amount.AdvanceAmount}</Text>
        </View>
        {show && (
          <View style={styles.container}>
            <Text style={styles.text}>Amount Recieved From Customer</Text>
            <Text style={styles.amount}>{Amount.CustomerAmount}</Text>
          </View>
        )}

        <View style={styles.container}>
          <Text style={styles.text}>Bata Amount</Text>
          <Text style={styles.amount}>{Amount.BataAmount}</Text>
        </View>
      </View>
    </>
  );
};

export default observer(TripDAmount);

const styles = StyleSheet.create({
  main: {
    // borderWidth: 1,
    marginHorizontal: 25,
    paddingHorizontal: 10,
    paddingVertical: 7,
    marginTop: 15,
    backgroundColor: "white",
    // height: "12%",
    borderRadius: 14,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 6,
  },
  text: {
    fontWeight: "600",
    fontSize: 16,
  },
  amount: {
    color: "#2196F3",
    fontWeight: "600",
  },
});
