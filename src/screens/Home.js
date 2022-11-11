import Ionicons from "@expo/vector-icons/MaterialIcons";
import { observer } from "mobx-react";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import DashboardContainer from "../components/DashboardContainer";
import Header from "../components/Header";
import Store from "../Store/mobXstore";
import { clearStorage } from "../utils/service";

const Home = () => {
  const logout = async () => {
    await clearStorage("storage_Key");
    Store.setCount(false);
  };

  return (
    <>
      <View style={styles.main}>
        <Header />

        <View style={styles.centerContainer}>
          <Text style={styles.trip}>Trip Listing</Text>
          <Text style={styles.view}>View All</Text>
        </View>
        <DashboardContainer />
        <Ionicons size={30} color="black" />
      </View>
    </>
  );
};

export default observer(Home);

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#E8E8E8",
  },
  centerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 30,
    marginTop: 70,
  },
  trip: {
    fontSize: 24,
    fontWeight: "600",
  },
  view: {
    fontSize: 18,
    // textDecorationStyle: "dotted",
    // textDecorationLine: 1,
    // textDecorationColor: "#2196F3",
    color: "#2196F3",
  },
  iconHead: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 65,
  },
  // icon: {
  //   marginHorizontal: 50,
  //   marginVertical: 50,
  // },
});
