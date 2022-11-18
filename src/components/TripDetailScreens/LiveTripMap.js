import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import * as SVG from "../../assets/SVG";
import RoundButtons from "../../Buttons/RoundButtons";
import { useNavigation } from "@react-navigation/native";

const LiveTripMap = ({ source }) => {
  return (
    <>
      <View>
        <Image source={source} style={styles.map} />
        <RoundButtons
          style={{ background: "white", top: "92%", left: 20 }}
          icon={
            <>
              <SVG.NavigateIcon />
            </>
          }
          //   onClick={() => backToStartTrip("StartTrip")}
          arrowIcon={
            <>
              <SVG.Arrow />
            </>
          }
          arrowStyle={{
            backgroundColor: "white",
            // borderWidth: 1,
            top: "58%",
            left: "51%",
          }}
        />
      </View>
    </>
  );
};

export default LiveTripMap;

const styles = StyleSheet.create({
  map: {
    width: "100%",
  },
});
