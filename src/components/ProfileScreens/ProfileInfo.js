import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import ProfileHeader from "../ProfileHeader";
import * as SVG from "../../assets/SVG";
import ProfileInfoContainer from "./ProfileInfoContainer";
import ProfileScreenHeadings from "./ProfileScreenHeadings";
import { useNavigation } from "@react-navigation/native";

const ProfileInfo = () => {
  const navigation = useNavigation();
  const ProfileEdit = (value) => {
    navigation.navigate(value);
  };

  return (
    <>
      <View style={{ flex: 1 }}>
        <ProfileHeader
          source={require("../../assets/sundarPichai.webp")}
          heading={"Alok Shriwastva"}
          Icon={<SVG.CameraIcon />}
          number={"#123456789"}
          status={"Status"}
          button={"Online"}
          BackIcon={<SVG.BackIcon />}
          onclick={() => navigation.goBack()}
        />
        <ProfileScreenHeadings
          info={"Profile Information"}
          edit={"Edit"}
          onClick={() => ProfileEdit("ProfileInfoEdit")}
          style={[{ fontSize: 16, fontWeight: "500", color: "white" }]}
          mainStyle={styles.btn}
        />
        <ProfileInfoContainer />
      </View>
    </>
  );
};

export default ProfileInfo;

const styles = StyleSheet.create({
  btn: {
    marginRight: 25,
    marginTop: 20,
    // borderWidth: 1,
    paddingHorizontal: 15,
    borderRadius: 6,
    backgroundColor: "#DC2127",
    paddingVertical: 2,
  },
});
