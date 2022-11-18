import { StyleSheet, Text, View } from "react-native";
import React from "react";
import * as SVG from "../../assets/SVG";
import Button from "../../Buttons/button";
import { useNavigation } from "@react-navigation/native";
import { Store } from "../../Store/mobXstore";

const LiveTripFooter = ({ detail }) => {
  const navigation = useNavigation();
  const Cancel = (detail) => {
    navigation.navigate("TripDetail", {
      TripDetails: detail,
    });
  };

  return (
    <View style={styles.main}>
      <View style={styles.location}>
        <Text style={styles.loc}>Current Location</Text>
        <Text style={styles.dis}>RemainingDistance</Text>
      </View>

      <View style={styles.locate}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={styles.green}>
            <SVG.UpperArrow />
          </View>
          <Text style={styles.pune}>{detail.TripStartLocation}</Text>
          <Text style={{ color: "#2496F3", fontWeight: "600" }}>129.6km</Text>
        </View>
        <View>
          <Text style={styles.add}>{detail.TripStartAddress}</Text>
        </View>
      </View>
      <Button
        style={styles.button}
        title={"End Trip"}
        buttonStyle={styles.pickup}
        onClick={() => Cancel(detail)}
      />
    </View>
  );
};

export default LiveTripFooter;

const styles = StyleSheet.create({
  main: {
    // borderWidth: 1,
    // marginTop: 1,
    backgroundColor: "white",
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
  },
  tripHead: {
    // borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical: 10,
  },
  tripStart: {
    // borderWidth: 1,
    paddingVertical: 6,
    borderRadius: 6,
    backgroundColor: "#E7F4FF",
    width: "44%",
  },
  tripEnd: {
    // borderWidth: 1,
    paddingVertical: 6,
    borderRadius: 6,
    backgroundColor: "#E7F4FF",
    width: "42%",
  },
  text: {
    fontSize: 11,
    textAlign: "center",
    color: "#414141",
    padding: 4,
  },
  date: {
    fontWeight: "500",
    textAlign: "center",
    padding: 2,
  },
  location: {
    flexDirection: "row",
    justifyContent: "space-between",
    // paddingHorizontal: 16,
    marginTop: 5,
  },
  loc: {
    fontSize: 15,
    fontWeight: "600",
    marginTop: 6,
  },
  dis: {
    fontSize: 15,
    fontWeight: "600",
    marginTop: 6,
  },
  locate: {
    // borderWidth: 1,
    // paddingHorizontal: 16,
    marginTop: 12,
  },
  green: {
    height: 30,
    width: 30,
    // borderWidth: 1,
    borderRadius: 15,
    backgroundColor: "white",
    top: 8,
    left: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  pune: {
    right: 52,
    fontWeight: "600",
  },
  add: {
    fontSize: 12,
    left: 50,
    color: "#414141",
  },
  button: {
    padding: 10,
    width: "100%",
    marginTop: 30,
    backgroundColor: "#DC2127",
  },
  pickup: {
    color: "white",
    fontSize: 21,
  },
});
