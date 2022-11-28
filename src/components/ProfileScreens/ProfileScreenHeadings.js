import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const ProfileScreenHeadings = ({ info, edit, onClick, style, mainStyle }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text style={styles.profile}>{info}</Text>
      <TouchableOpacity
        style={[styles.Edit, mainStyle]}
        onPress={() => onClick()}
      >
        <Text style={style}>{edit}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreenHeadings;

const styles = StyleSheet.create({
  profile: {
    fontSize: 19,
    fontWeight: "500",
    marginLeft: 20,
    marginTop: 20,
  },
  // Edit: {
  //   marginRight: 25,
  //   marginTop: 20,
  //   // borderWidth: 1,
  //   paddingHorizontal: 15,
  //   borderRadius: 6,
  //   backgroundColor: "#DC2127",
  //   paddingVertical: 2,
  // },
  // btn: {

  // },
});
