import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Button from "../../Buttons/button";
import { useNavigation } from "@react-navigation/native";

const TripPlan = ({ details }) => {
  // const [selectedTrip, setSelectedTrip] = useState(
  //   prop.route.params.TripDetails
  // );
  var navigation = useNavigation();

  const start = (details) => {
    // console.log("start", details);
    navigation.navigate("StartTrip", {
      TripDetails: details,
    });
  };

  const Notes = (value) => {
    navigation.navigate(value);
  };

  return (
    <View style={styles.main}>
      <View>
        <Text style={styles.heading}>Planned(Date & Time)</Text>
      </View>

      <View style={styles.tripHead}>
        <View style={styles.tripStart}>
          <Text style={styles.text}>Trip Start (Date & Time)</Text>
          <Text style={styles.date}>{details.TripStartDateAndTime}</Text>
        </View>

        <View style={styles.tripEnd}>
          <Text style={styles.text}>Trip End (Date & Time)</Text>
          <Text style={styles.date}>{details.TripEndDateAndTime}</Text>
        </View>
      </View>

      <View>
        <Text style={styles.heading}>Actual(Date & Time)</Text>
      </View>

      <View style={styles.tripHead}>
        <View style={styles.tripStart}>
          <Text style={styles.text}>Trip Start (Date & Time)</Text>
          <Text style={styles.date}>{details.TripStartDateAndTime}</Text>
        </View>

        <View style={styles.tripEnd}>
          <Text style={styles.text}>Trip End (Date & Time)</Text>
          <Text style={styles.date}>{details.TripEndDateAndTime}</Text>
        </View>
      </View>

      <Text style={styles.location}>Location</Text>
      <View style={styles.dot}>
        <View style={styles.green}></View>
        <View style={styles.red}></View>
      </View>

      <View style={styles.tripHead}>
        <View>
          <Text style={styles.date}>{details.TripStartLocation}</Text>
          <Text style={styles.headquarter}>{details.TripStartAddress}</Text>
        </View>

        <View>
          <Text style={styles.date}>{details.TripEndLocation}</Text>
          <Text style={styles.headquarter}>{details.TripEndAddress}</Text>
        </View>
      </View>

      <View style={styles.travel}>
        <View style={styles.travelDistance}>
          <Text style={styles.travelText}>Travel Distance</Text>
          <Text style={styles.travelDate}>250km</Text>
        </View>

        <View style={styles.travelDistance}>
          <Text style={styles.travelText}>Travel Time</Text>
          <Text style={styles.travelDate}>06hrs</Text>
        </View>
      </View>

      <View style={styles.travel}>
        <View style={styles.travelDistance}>
          <Text style={styles.travelText}>Top Speed</Text>
          <Text style={styles.travelDate}>120km/hr</Text>
        </View>

        <View style={styles.travelDistance}>
          <Text style={styles.travelText}>Average Speed</Text>
          <Text style={styles.travelDate}>80km/hr</Text>
        </View>
      </View>

      <View style={styles.btnview}>
        <Button
          title={"Add Notes"}
          style={styles.btn1}
          buttonStyle={{ fontSize: 17, fontWeight: "600" }}
          onClick={() => Notes("AddNotes")}
        />
        <Button
          title={"Start Trip"}
          style={styles.btn2}
          buttonStyle={{ fontSize: 17, color: "white", fontWeight: "600" }}
          onClick={() => start(details)}
        />
      </View>
      <View style={styles.cancel}>
        <Button
          title={"Cancel Trip"}
          style={styles.cancelbtn}
          buttonStyle={{
            fontSize: 17,
            color: "white",
            fontWeight: "600",
            letterSpacing: 1,
          }}
        />
      </View>
    </View>
  );
};

export default TripPlan;

const styles = StyleSheet.create({
  main: {
    // borderWidth: 1,
    marginHorizontal: 25,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 15,
    backgroundColor: "white",
    borderRadius: 14,
  },
  heading: {
    fontSize: 15,
    color: "#2496F3",
    fontWeight: "500",
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  tripHead: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    // borderWidth: 1,
    paddingHorizontal: 6,
  },
  tripStart: {
    // borderWidth: 1,
    paddingVertical: 6,
    paddingHorizontal: 6,
    borderRadius: 6,
    backgroundColor: "#E7F4FF",
    width: "47%",
  },
  tripEnd: {
    // borderWidth: 1,
    paddingVertical: 6,
    paddingHorizontal: 6,
    borderRadius: 6,
    backgroundColor: "#E7F4FF",
    width: "47%",
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
    fontWeight: "500",
    fontSize: 15,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  dot: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  green: {
    width: 15,
    height: 15,
    borderRadius: 10,
    backgroundColor: "#34C654",
    marginLeft: 8,
  },
  red: {
    width: 15,
    height: 15,
    borderRadius: 10,
    backgroundColor: "#EF3131",
    right: 145,
  },
  headquarter: {
    color: "#8C8C8C",
    padding: 2,
  },
  btnview: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  btn1: {
    backgroundColor: "white",
    width: "47%",
    borderWidth: 1,
    padding: 11,
  },
  btn2: {
    backgroundColor: "#2496F3",
    width: "47%",
    paddingHorizontal: 2,
    padding: 11,
  },
  cancel: {
    marginTop: 15,
  },
  cancelbtn: {
    backgroundColor: "#DC2127",
    width: "100%",
  },
  travel: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    // borderWidth: 1,
    paddingHorizontal: 6,
  },
  travelDistance: {
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 6,
    borderRadius: 6,
    // backgroundColor: "#E7F4FF",
    borderColor: "#E9EFF3",
    width: "47%",
  },
  travelText: {
    fontSize: 14,
    textAlign: "center",
    padding: 4,
  },
  travelDate: {
    fontWeight: "600",
    textAlign: "center",
    padding: 2,
    color: "#2694F3",
  },
});
