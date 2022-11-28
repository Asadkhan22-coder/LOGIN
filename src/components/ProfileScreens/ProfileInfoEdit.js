import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import ProfileHeader from "../ProfileHeader";
import * as SVG from "../../assets/SVG";
import { useNavigation } from "@react-navigation/native";
import ProfileScreenHeadings from "./ProfileScreenHeadings";
import ProfileInputScreen from "./ProfileInputScreen";

const ProfileInfoEdit = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <ProfileHeader
        source={require("../../assets/sundarPichai.webp")}
        Icon={<SVG.CameraIcon />}
        BackIcon={<SVG.BackIcon />}
        style={styles.imageStyle}
        iconStyle={styles.icon}
        onclick={() => navigation.goBack()}
      />
      <ProfileScreenHeadings info={"Profile Information"} />
      <ProfileInputScreen />
    </View>
  );
};

export default ProfileInfoEdit;

const styles = StyleSheet.create({
  imageStyle: {
    width: 200,
    height: 200,
  },
  icon: {
    // position: "absolute",
    // top: "100%",
    // left: "40%",
    // marginRight: "20%",
  },
});
