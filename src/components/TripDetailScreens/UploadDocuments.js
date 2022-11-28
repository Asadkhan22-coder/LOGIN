import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import * as SVG from "../../assets/SVG";
import { useNavigation } from "@react-navigation/native";

const UploadDocuments = () => {
  const navigation = useNavigation();
  const CameraScreen = (value) => {
    navigation.navigate(value);
  };

  return (
    <>
      <View style={styles.upload}>
        <Text style={{ top: 8, fontSize: 17 }}>Upload Document</Text>
        <TouchableOpacity
          style={styles.capture}
          onPress={() => CameraScreen("CameraScreen")}
        >
          <SVG.Camera style={{ marginRight: 10 }} />
          <Text style={{ color: "#2196F3", top: 5, fontWeight: "500" }}>
            Capture
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default UploadDocuments;

const styles = StyleSheet.create({
  upload: {
    flexDirection: "row",
    justifyContent: "space-between",
    // borderWidth: 1,
    paddingVertical: 15,
  },
  capture: {
    flexDirection: "row",
    borderWidth: 1,
    paddingHorizontal: 40,
    paddingVertical: 5,
    borderRadius: 6,
    borderColor: "#CAD7E2",
  },
});
