import { StyleSheet, Text, View } from "react-native";
import React from "react";

const FMenu = ({ isvisible }) => {
  return (
    <>
      {isvisible && (
        <View style={styles.container}>
          <View style={styles.text}>
            <Text style={styles.modalText}>Trip Expense</Text>
          </View>
          <View style={styles.text}>
            <Text style={styles.modalText}>Vehical Expense</Text>
          </View>
          <View>
            <Text style={styles.modalText}>General</Text>
          </View>
        </View>
      )}
    </>
  );
};

export default FMenu;

const styles = StyleSheet.create({
  modalText: {
    marginTop: 2,
    padding: 10,
    fontWeight: "500",
  },
  container: {
    position: "absolute",
    bottom: 130,
    right: 50,
    backgroundColor: "white",
    borderRadius: 16,
    paddingHorizontal: 15,
  },
  text: {
    borderBottomWidth: 1,
  },
});
