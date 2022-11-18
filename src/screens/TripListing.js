import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomHeader from "../components/CustomHeader";
import * as SVG from "../assets/SVG";
import DashboardContainer from "../components/DashboardContainer";
import HorizontolFlatlist from "../components/HorizontolFlatlist";
import Input from "../components/Input";
import AuthStore from "../Store/AuthStore";
import { observer } from "mobx-react-lite";

const TripListing = () => {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <CustomHeader
          title={"Trip Listing"}
          backIcon={
            <>
              <SVG.BackIcon />
            </>
          }
          icon={<SVG.Filter />}
        />
        <HorizontolFlatlist />

        <Input
          name={"search"}
          placeholder={"Search"}
          fieldStyle={styles.fieldStyle}
          oneStyle={styles.oneStyle}
          onChangeABC={(data) => AuthStore.setUsername(data)}
          data={AuthStore.Username}
        />
        <DashboardContainer
          maincontainerstyle={{
            height: "90%",
            paddingBottom: 150,
            marginTop: 25,
          }}
        />
      </SafeAreaView>
    </>
  );
};

export default observer(TripListing);

const styles = StyleSheet.create({
  fieldStyle: {},
  oneStyle: {
    borderRadius: 6,
    height: "6%",
    backgroundColor: "#fff",
    borderWidth: "none",
    marginHorizontal: 18,
    // width: "80%",
    // justifyContent: "space-between",
    // alignContent: "center",
  },
});
