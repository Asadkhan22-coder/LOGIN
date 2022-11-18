import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import Input from "../Input";
import Button from "../../Buttons/button";

const NotesContainer = () => {
  return (
    <>
      <View style={styles.main}>
        <Text style={styles.title}>Title</Text>
        <View style={styles.input}>
          <TextInput placeholder="Enter Title" />
        </View>

        <Text style={styles.title2}>Description</Text>
        {/* <View> */}
        <TextInput style={styles.input2} />
        {/* </View> */}

        <Button
          title={"Save"}
          style={styles.btn}
          buttonStyle={{ color: "white" }}
        />
      </View>
    </>
  );
};

export default NotesContainer;

const styles = StyleSheet.create({
  main: {
    // flex: 1,
    // borderWidth: 1,
    marginHorizontal: 25,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 15,
    backgroundColor: "white",
    borderRadius: 14,
    // position: "absolute",
    // borderWidth: 1,
    height: "43%",
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
  },
  input: {
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 6,
    marginTop: 15,
    borderColor: "#CAD7E2",
    // width: "97%",
  },
  title2: {
    fontSize: 16,
    fontWeight: "500",
    // paddingVertical: 20,
    marginTop: 20,
  },
  input2: {
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 6,
    marginTop: 15,
    borderColor: "#CAD7E2",
    height: "40%",
  },
  btn: {
    // borderWidth: 1,
    marginTop: 20,
    width: "100%",
    padding: 10,
    backgroundColor: "#2496F3",
  },
});
