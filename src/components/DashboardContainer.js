import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";

const DashboardContainer = () => {
  const Data = [
    {
      id: "1",
      Name: "Rahul Sharma",
      trip: "Trip Start",
      Date: "10-11-2022",
      status: "Status",
      notStart: "Not Started",
    },
    {
      id: "2",
      Name: "Rahul Sharma",
      trip: "Trip Start",
      Date: "10-11-2022",
      status: "Status",
      notStart: "Not Started",
    },
    {
      id: "3",
      Name: "Rahul Sharma",
      trip: "Trip Start",
      Date: "10-11-2022",
      status: "Status",
      notStart: "Not Started",
    },
    {
      id: "4",
      Name: "Rahul Sharma",
      trip: "Trip Start",
      Date: "10-11-2022",
      status: "Status",
      notStart: "Not Started",
    },
  ];

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={Data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <>
            <View style={styles.main}>
              <View style={styles.firstView}>
                <Text style={styles.name}>{item.Name}</Text>
                <Text style={styles.name}>{item.Name}</Text>
              </View>

              <View style={styles.firstView}>
                <Text style={styles.status}>{item.trip}</Text>
                <Text style={styles.status}>{item.status}</Text>
              </View>

              <View style={styles.firstView}>
                <Text style={styles.date}>{item.Date}</Text>
                <View style={styles.start}>
                  <Text style={styles.notStart}>{item.notStart}</Text>
                </View>
              </View>
            </View>
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
    width: "100%",
  },
  main: {
    marginHorizontal: 20,
    backgroundColor: "white",
    height: 110,
    marginTop: 1,
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
