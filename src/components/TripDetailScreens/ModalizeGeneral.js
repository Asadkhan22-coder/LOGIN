import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ModalizeGeneral = ({ send }) => {
  return (
    <>
      <Modalize ref={send} adjustToContentHeight={true}>
        <Text>...your content</Text>
      </Modalize>
    </>
  );
};

export default ModalizeGeneral;

const styles = StyleSheet.create({});
