import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import * as SVG from "../assets/SVG";
import ProfileButton from "../Buttons/ProfileButton";
import ProfileHeader from "../components/ProfileHeader";
import { clearStorage } from "../utils/service";
import store from "../Store/mobXstore";
import { observer } from "mobx-react-lite";

const Profile = () => {
  const logout = async () => {
    await clearStorage("storage_Key");
    store.setCount(false);
  };

  return (
    <View style={{ flex: 1 }}>
      <ProfileHeader
        source={require("../assets/sundarPichai.webp")}
        heading={"Alok Shriwastva"}
        Icon={
          <>
            <SVG.CameraIcon />
          </>
        }
        number={"#123456789"}
        button={"Online"}
      />
      <ProfileButton
        icon1={
          <>
            <SVG.User />
          </>
        }
        title={"Profile Setting"}
        icon2={
          <>
            <SVG.ForwardIcon />
          </>
        }
      />

      <ProfileButton
        icon1={
          <>
            <SVG.ChangePassword />
          </>
        }
        title={"Change Password"}
        icon2={
          <>
            <SVG.ForwardIcon />
          </>
        }
      />
      <ProfileButton
        icon1={
          <>
            <SVG.BataAllowance />
          </>
        }
        title={"Bata Allowance"}
        icon2={
          <>
            <SVG.ForwardIcon />
          </>
        }
      />
      <ProfileButton
        icon1={
          <>
            <SVG.LicenseInfo />
          </>
        }
        title={"License Information"}
        icon2={
          <>
            <SVG.ForwardIcon />
          </>
        }
      />

      <TouchableOpacity onPress={() => logout()}>
        <ProfileButton
          title={"Logout"}
          icon1={
            <>
              <SVG.Logout />
            </>
          }
          styling={styles.logButton}
          stylingbtn={styles.btn}
          iconstyle={styles.icons}
        />
      </TouchableOpacity>
    </View>
  );
};

export default observer(Profile);

const styles = StyleSheet.create({
  logButton: {
    backgroundColor: "#2196F3",
    borderRadius: 40,
    top: "30%",
    height: 50,
  },
  btn: {
    color: "white",
    fontWeight: "700",
    left: 150,
  },
  icons: {
    left: 130,
  },
});
