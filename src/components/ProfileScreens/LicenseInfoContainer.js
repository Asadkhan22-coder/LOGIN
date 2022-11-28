import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const LicenseInfoContainer = () => {
  //   const getData = async () => {
  //     await fetch("http://13.233.175.113:11014/trips/driver-trips/349", {
  //       method: "GET",
  //     })
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .then((res) => {
  //         var Add = 0;
  //         var check = res.map((item) => {
  //           if (item.distance !== null) {
  //             Add = item.distance + Add;
  //           }
  //         });
  //         console.log("first", Add);
  //         // console.log("response", res);
  //         // var fullDistance = check.filter(function (item) {
  //         //   return item != null;
  //         // });
  //         // var Add = fullDistance.reduce((item, index) => item + index, 0);
  //         // console.log("Add", Add);
  //         // console.log("fullDistance--->", fullDistance);
  //         return res;
  //       })
  //       .catch((err) => {
  //         console.log("error", err);
  //       });
  //   };

  return (
    <>
      <View style={styles.main}>
        <View style={styles.container1}>
          <Text style={styles.text}>License Number</Text>
          <Text style={styles.num}>ASWE451235DE600</Text>
        </View>

        <View style={styles.container2}>
          <Text style={styles.text}>License Expiry Date</Text>
          <Text style={styles.num}>25-May-2023</Text>
        </View>
      </View>

      {/* <Button title="get" onPress={() => getData()} /> */}
    </>
  );
};

export default LicenseInfoContainer;

const styles = StyleSheet.create({
  main: {
    // borderWidth: 1,
    marginHorizontal: 25,
    paddingHorizontal: 16,
    paddingVertical: 15,
    marginTop: 15,
    backgroundColor: "white",
    borderRadius: 14,
    // height: "22%",
  },
  container1: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#E9EFF3",
  },
  container2: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 6,
  },
  text: {
    fontSize: 17,
    fontWeight: "400",
    paddingVertical: 5,
  },
  num: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2196F3",
    paddingVertical: 5,
  },
});
