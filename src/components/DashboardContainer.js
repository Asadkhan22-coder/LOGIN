import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const DashboardContainer = ({ maincontainerstyle }) => {
  var navigation = useNavigation();

  // const fnc = (value) => {
  //   return value;
  // };
  // var a = fnc();
  // console.log("a", a);

  const Data = [
    {
      TripData: {
        Tripname: "To mumbai(#95918-5ec3b69a)",
        LicensePlateNumber: "MH-04-CS-2153",
        VehicleInsuranceExpiry: "02-10-2023",
        VehicleType: "Car(Swift)",
        TripType: "Oneway",
        TripStatus: "Not Started",
        TripStart: "Trip Start",
        status: "Status",
      },
      TripAmount: {
        AdvanceAmount: "₹ 1500",
        CustomerAmount: "₹ 1000",
        BataAmount: "₹ 3000",
      },
      CustomerInformation: {
        Name: "Test 1",
        ContactNumber: "+91 1234567890",
        Address: "63 Bhagwati Market Blank Street Pune",
      },
      PlannedDateAndTime: {
        TripStartDateAndTime: "12-05-2022 02:40PM",
        TripEndDateAndTime: "13-05-2022 01:00AM",
        TripStartLocation: "Pune (Maharashtra)",
        TripEndLocation: "Mumbai (Maharashtra)",
        TripStartAddress: "Pune H.O, Pune",
        TripEndAddress: "Andheri H.O",
      },
    },
    {
      TripData: {
        Tripname: "To Indore(#95918-5ec3b69a)",
        LicensePlateNumber: "MH-04-CS-2153",
        VehicleInsuranceExpiry: "02-10-2023",
        VehicleType: "Car (Audi)",
        TripType: "Oneway",
        TripStatus: "Not Started",
        TripStart: "Trip Start",
        status: "Status",
      },
      TripAmount: {
        AdvanceAmount: "₹ 1500",
        CustomerAmount: "₹ 1000",
        BataAmount: "₹ 3000",
      },
      CustomerInformation: {
        Name: "Rahul Sharma",
        ContactNumber: "91 1234567890",
        Address: "63 Bhagwati Market Blank Street Pune",
      },
      PlannedDateAndTime: {
        TripStartDateAndTime: "12-05-2022 02:40PM",
        TripEndDateAndTime: "13-05-2022 01:00AM",
        TripStartLocation: "Pune (Maharashtra)",
        TripEndLocation: "Mumbai (Maharashtra)",
        TripStartAddress: "Pune H.O, Pune",
        TripEndAddress: "Andheri H.O",
      },
    },
    {
      TripData: {
        Tripname: "To Bhopal(#95918-5ec3b69a)",
        LicensePlateNumber: "MH-04-CS-2153",
        VehicleInsuranceExpiry: "02-10-2023",
        VehicleType: "Car(Swift)",
        TripType: "Oneway",
        TripStatus: "Not Started",
        TripStart: "Trip Start",
        status: "Status",
      },
      TripAmount: {
        AdvanceAmount: "₹ 1500",
        CustomerAmount: "₹ 1000",
        BataAmount: "₹ 3000",
      },
      CustomerInformation: {
        Name: "testing",
        ContactNumber: "91 1234567890",
        Address: "63 Bhagwati Market Blank Street Pune",
      },
      PlannedDateAndTime: {
        TripStartDateAndTime: "12-05-2022 02:40PM",
        TripEndDateAndTime: "13-05-2022 01:00AM",
        TripStartLocation: "Pune (Maharashtra)",
        TripEndLocation: "Mumbai (Maharashtra)",
        TripStartAddress: "Pune H.O, Pune",
        TripEndAddress: "Andheri H.O",
      },
    },
    {
      TripData: {
        Tripname: "To Jaipur(#95918-5ec3b69a)",
        LicensePlateNumber: "MH-04-CS-2153",
        VehicleInsuranceExpiry: "02-10-2023",
        VehicleType: "Car(Swift)",
        TripType: "Oneway",
        TripStatus: "Not Started",
        TripStart: "Trip Start",
        status: "Status",
      },
      TripAmount: {
        AdvanceAmount: "₹ 1500",
        CustomerAmount: "₹ 1000",
        BataAmount: "₹ 3000",
      },
      CustomerInformation: {
        Name: "Rahul Sharma",
        ContactNumber: "91 1234567890",
        Address: "63 Bhagwati Market Blank Street Pune",
      },
      PlannedDateAndTime: {
        TripStartDateAndTime: "12-05-2022 02:40PM",
        TripEndDateAndTime: "13-05-2022 01:00AM",
        TripStartLocation: "Pune (Maharashtra)",
        TripEndLocation: "Mumbai (Maharashtra)",
        TripStartAddress: "Pune H.O, Pune",
        TripEndAddress: "Andheri H.O",
      },
    },
  ];

  const moveTo = (item) => {
    navigation.navigate("TripDetail", {
      TripDetails: item,
    });
  };

  return (
    <View style={[styles.mainContainer, maincontainerstyle]}>
      <FlatList
        data={Data}
        scrollEnabled={true}
        // horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <>
            <TouchableOpacity onPress={() => moveTo(item)}>
              <View style={styles.main}>
                <View style={styles.firstView}>
                  <Text style={styles.name}>{item.TripData.Tripname}</Text>
                  <Text style={styles.name}>{item.TripData.TripType}</Text>
                </View>

                <View style={styles.firstView}>
                  <Text style={styles.status}>Trip Start</Text>
                  <Text style={styles.status}>{item.TripData.status}</Text>
                </View>

                <View style={styles.firstView}>
                  <Text style={styles.date}>
                    {item.PlannedDateAndTime.TripStartDateAndTime}
                  </Text>
                  <View style={styles.start}>
                    <Text style={styles.notStart}>
                      {item.TripData.TripStatus}
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </>
        )}
      />
    </View>
  );
};

export default DashboardContainer;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 25,
    // height: "70%",
    paddingBottom: 150,
  },
  main: {
    marginHorizontal: 20,
    backgroundColor: "white",
    height: 110,
    marginTop: 3,
    padding: 10,
    borderRadius: 8,
  },
  firstView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
    marginHorizontal: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
    color: "#2196F3",
  },
  status: {
    color: "grey",
  },
  date: {
    fontSize: 17,
    fontWeight: "600",
  },
  notStart: {
    backgroundColor: "#FFEAC0",
    color: "#FFAA2B",
    textAlign: "center",
    padding: 4,
  },
  start: {
    width: "30%",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#FFEAC0",
  },
});
