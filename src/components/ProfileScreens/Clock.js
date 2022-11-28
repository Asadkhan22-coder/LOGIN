import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Input from "../Input";
import * as SVG from "../../assets/SVG";
import Button from "../../Buttons/button";

const Clock = () => {
  return (
    <>
      <View style={styles.main}>
        <View style={styles.mainContainer2}>
          <Text style={styles.text}>Set Reminder</Text>
        </View>
        <View
          style={{
            height: "100%",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Input
            oneStyle={styles.container}
            style={styles.field}
            RightIcon={
              <>
                <SVG.Calendar />
              </>
            }
            styleRightIcon={{ marginHorizontal: 15 }}
          />
          <Input
            oneStyle={styles.container}
            style={styles.field}
            RightIcon={
              <>
                <SVG.Clock />
              </>
            }
            styleRightIcon={{ marginHorizontal: 15 }}
          />
        </View>
        <Button
          title={"Save"}
          buttonStyle={{ color: "white" }}
          style={styles.btn}
        />

        <View style={styles.footer}>
          <SVG.AlarmClock style={{ marginLeft: 12 }} />
          <Text style={styles.dateText}>12-05-2023 12:00PM</Text>
        </View>
      </View>
    </>
  );
};

export default Clock;

const styles = StyleSheet.create({
  main: {
    // borderWidth: 1,
    marginHorizontal: 25,
    paddingHorizontal: 8,
    paddingVertical: 15,
    marginTop: 15,
    backgroundColor: "white",
    borderRadius: 14,
    height: "15%",
  },
  container: {
    height: "52%",
    width: "45%",
    borderRadius: 6,
    borderColor: "#CAD7E2",
  },
  field: {
    // borderWidth: 1,
    // height: "100%",
    right: 50,
  },
  text: {
    fontSize: 18,
    left: 5,
    fontWeight: "600",
  },
  btn: {
    backgroundColor: "#2196F3",
    marginTop: 10,
    width: "100%",
    padding: 10,
  },
  footer: {
    flexDirection: "row",
    // borderWidth: 1,
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#E8E8E8",
    marginTop: 20,
  },
  dateText: {
    fontSize: 17,
    marginLeft: 10,
    // letterSpacing: 1,
    fontWeight: "600",
    color: "#6D6D6D",
  },
});
