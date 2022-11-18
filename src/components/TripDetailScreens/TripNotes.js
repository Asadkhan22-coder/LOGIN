import { StyleSheet, Text, View } from "react-native";
import React from "react";

const TripNotes = () => {
  return (
    <View style={styles.main}>
      <View>
        <Text style={styles.heading}>Trip Notes</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Heading here</Text>
        <Text style={styles.para}>
          Excepteur reprehenderit esse cillum ipsum esse velit incididunt
          voluptate ad magna. Fugiat incididunt est aliquip cillum sunt aute.
          Excepteur tempor labore aliquip duis aliqua cillum sit incididunt.
        </Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.text}>Heading here</Text>
        <Text style={styles.para}>
          Excepteur reprehenderit esse cillum ipsum esse velit incididunt
          voluptate ad magna. Fugiat incididunt est aliquip cillum sunt aute.
          Excepteur tempor labore aliquip duis aliqua cillum sit incididunt.
        </Text>
      </View>

      <View style={styles.lastcontainer}>
        <Text style={styles.text}>Heading here</Text>
        <Text style={styles.para}>
          Excepteur reprehenderit esse cillum ipsum esse velit incididunt
          voluptate ad magna. Fugiat incididunt est aliquip cillum sunt aute.
          Excepteur tempor labore aliquip duis aliqua cillum sit incididunt.
        </Text>
      </View>
    </View>
  );
};

export default TripNotes;

const styles = StyleSheet.create({
  main: {
    // borderWidth: 1,
    marginHorizontal: 25,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 15,
    backgroundColor: "white",
    borderRadius: 14,
  },
  heading: {
    fontSize: 15,
    color: "#2496F3",
    fontWeight: "500",
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  container: {
    borderBottomWidth: 1,
    paddingVertical: 15,
    borderColor: "#E9EFF3",
  },
  text: {
    fontWeight: "500",
    padding: 2,
    marginLeft: 7,
    fontSize: 16,
  },
  para: {
    marginLeft: 9,
    marginTop: 5,
  },
  lastcontainer: {
    paddingVertical: 15,
  },
});
