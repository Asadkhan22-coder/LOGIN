import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Store from "../../Store/mobXstore";
import { observer } from "mobx-react-lite";
import { FlatList } from "react-native-gesture-handler";

const TripNotes = () => {
  return (
    <>
      {Store.note.map((item) => {
        return (
          <>
            <View style={styles.main}>
              <View>
                <Text style={styles.heading}>Trip Notes</Text>
              </View>
              <View style={styles.container}>
                <Text style={styles.text}>{item.title}</Text>
                <Text style={styles.para}>{item.description}</Text>
              </View>
            </View>
          </>
        );
      })}
    </>
  );
};

export default observer(TripNotes);

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
    // borderBottomWidth: 1,
    paddingVertical: 15,
    // borderColor: "#E9EFF3",
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
