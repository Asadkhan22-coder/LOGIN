import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import * as SVG from "../assets/SVG";
import Button from "../Buttons/button";
// import { logout } from "../screens/Home";
import Store from "../Store/mobXstore";
import { clearStorage } from "../utils/service";

const Header = () => {
  const logout = async () => {
    await clearStorage("storage_Key");
    Store.setCount(false);
  };
  // const Path

  return (
    <>
      <View style={styles.heading}>
        <View style={styles.icon}>
          <Image
            source={require("../assets/sundarPichai.webp")}
            style={styles.image}
          />

          <View>
            <SVG.Vector style={{ marginTop: 10 }} />

            <View
              style={{
                width: 10,
                height: 10,
                borderRadius: 5,
                backgroundColor: "red",
                position: "absolute",
                left: 16,
                marginTop: 5,
              }}
            ></View>
          </View>
        </View>
        <View style={styles.subhead}>
          <Text style={styles.name}>Alok Shriwastava</Text>
          <Button
            title={"online"}
            style={styles.btn}
            onClick={() => logout()}
            buttonStyle={{ fontSize: 18, color: "white" }}
          />
        </View>
        <Text style={styles.number}>#123456789</Text>

        <View style={styles.row}>
          <View style={styles.pending}>
            <SVG.Frame style={{ marginLeft: 5 }} />
            <View style={styles.trip}>
              <Text style={styles.text}>Pending trips</Text>
              <Text style={styles.num}>12</Text>
            </View>
          </View>

          <View style={[styles.pending, { backgroundColor: "#DBEFFF" }]}>
            <Text style={[styles.text, { color: "#2196F3" }]}>1250Km</Text>
            <View style={styles.trip}>
              <Text style={[styles.text, { color: "#2196F3" }]}>
                Distance travelled
              </Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  heading: {
    // flex: 1,
    width: "100%",
    height: "30%",
    backgroundColor: "white",
  },
  icon: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 50,
    marginHorizontal: 30,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 8,
  },
  subhead: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    marginTop: 20,
  },
  name: {
    fontSize: 34,
    fontWeight: "500",
  },
  btn: {
    backgroundColor: "#34C654",
    width: "22%",
    padding: 5,
    height: 35,
    borderRadius: 8,
  },
  number: {
    color: "grey",
    fontSize: 18,
    marginLeft: 18,
    letterSpacing: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    // marginBottom: -120,
    // position: "absolute",
    // marginTop: 250,
  },
  pending: {
    padding: 12,
    backgroundColor: "#2196F3",
    borderRadius: 8,
    width: "48%",
    justifyContent: "space-around",
  },
  trip: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 4,
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
    color: "white",
  },
  num: {
    marginLeft: 12,
    padding: 4,
    backgroundColor: "red",
    color: "white",
    fontWeight: "500",
    fontWeight: "700",
    textAlign: "center",
    borderWidthL: 1,
  },
});
