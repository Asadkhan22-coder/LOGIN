import React from "react";
import { StyleSheet, Text } from "react-native";
import { Modalize } from "react-native-modalize";
import TripExpenseContainer from "./TripExpenseContainer";
import TripExpenseHeading from "./TripExpenseHeading";
import TripExpenseInput from "./TripExpenseInput";
import UploadDocuments from "./UploadDocuments";

const Modalizer = ({ send, onPress }) => {
  return (
    <>
      <Modalize
        ref={send}
        adjustToContentHeight={true}
        modalStyle={{ paddingHorizontal: 35 }}
      >
        <TripExpenseHeading />
        <TripExpenseContainer />
        <UploadDocuments />
        <TripExpenseInput onPress={() => onPress()} />
      </Modalize>
    </>
  );
};

export default Modalizer;

const styles = StyleSheet.create({});
