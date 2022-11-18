import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomHeader from "../CustomHeader";
import * as SVG from "../../assets/SVG";
import { useNavigation } from "@react-navigation/native";
import Input from "../Input";
import NotesContainer from "./NotesContainer";

const AddNotes = () => {
  const navigation = useNavigation();

  const back = (value) => {
    navigation.navigate(value);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader
        title={"Trip Details"}
        backIcon={
          <>
            <SVG.BackIcon />
          </>
        }
        onClick={() => navigation.goBack()}
      />
      <Text style={styles.notes}>Add Notes</Text>
      <NotesContainer />
    </SafeAreaView>
  );
};

export default AddNotes;

const styles = StyleSheet.create({
  notes: {
    fontSize: 20,
    marginTop: 25,
    marginLeft: 20,
    fontWeight: "600",
  },
});
