import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ModalizerVehicleExp = ({ send }) => {
  return (
    <>
      <Modalize ref={send} adjustToContentHeight={true}>
        <Text>...your content</Text>
      </Modalize>
    </>
  );
};

export default ModalizerVehicleExp;

const styles = StyleSheet.create({});
