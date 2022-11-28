import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import * as SVG from "../../assets/SVG";
import FAB from "../FAB";
import DeletePopUp from "./DeletePopUp";

const BillingScreenContainer = ({ onPress }) => {
  const [timesPressed, setTimesPressed] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const data = [
    {
      id: 1,
      name: "Afternoon Food",
      bill: "Food Bill",
      amount: "₹ 120",
    },
    // {
    //   id: 2,
    //   nameRepair: "Tyre Repair",
    //   amount: 123,
    // },
    // {
    //   id: 3,
    //   name: "first",
    //   amount: 123,
    // },
    // {
    //   id: 4,
    //   name: "first",
    //   amount: 123,
    // },
  ];

  return (
    <>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <>
            <Pressable
              // onPressOut={() => setTimesPressed(false)}
              onLongPress={() => {
                // console.log("first");
                setTimesPressed(true);
              }}
              // children={}

              onPress={() => onPress()}
              style={({ pressed }) => [
                {
                  backgroundColor: timesPressed ? "#B5DEFF" : "white",
                  opacity: timesPressed ? "0.7" : "1",
                },
                styles.container,
              ]}
            >
              <View style={styles.mainContainer}>
                <View style={styles.main}>
                  <View style={{ flexDirection: "row" }}>
                    <View style={{ width: "20%" }}>
                      <View style={styles.icon}>
                        <SVG.Food />
                      </View>
                    </View>
                    <View style={styles.AfternoonContainer}>
                      <Text style={styles.text}>{item.name}</Text>
                      <Text style={styles.food}>{item.bill}</Text>
                    </View>
                  </View>
                  <View>
                    <Text style={styles.amount}>{item.amount}</Text>
                  </View>
                </View>
              </View>
            </Pressable>

            {timesPressed && (
              <TouchableOpacity
              // onPress={() => modalState(!visibleState)}
              // onPress={() => PopUpScreen()}
              >
                <FAB
                  modalState={setModalVisible}
                  visibleState={modalVisible}
                  icon={<SVG.Delete />}
                  style={styles.DeleteiconHead}
                />
                <DeletePopUp
                  isvisible={modalVisible}
                  onPress={() => onPress()}
                />
              </TouchableOpacity>
            )}
          </>
        )}
      />

      {/* <View style={styles.container}>
        <View style={styles.mainContainer}>
          <View style={styles.main}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ width: "20%" }}>
                <View style={styles.icon}>
                  <SVG.CarRepair />
                </View>
              </View>
              <View style={styles.AfternoonContainer}>
                <Text style={styles.text}>Tyre Repair</Text>
                <Text style={styles.food}>Car Service</Text>
              </View>
            </View>
            <View>
              <Text style={styles.amount}>₹ 70</Text>
            </View>
          </View>
        </View>

        <View style={styles.mainContainer}>
          <View style={styles.main}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ width: "20%" }}>
                <View style={styles.icon}>
                  <SVG.Toll />
                </View>
              </View>
              <View style={styles.AfternoonContainer}>
                <Text style={styles.text}>Pune Highway Toll</Text>
                <Text style={styles.food}>Toll Tax</Text>
              </View>
            </View>
            <View>
              <Text style={styles.amount}>₹ 120</Text>
            </View>
          </View>
        </View>

        <View>
          <View style={styles.main}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ width: "20%" }}>
                <View style={styles.icon}>
                  <SVG.Food />
                </View>
              </View>
              <View style={styles.AfternoonContainer}>
                <Text style={styles.text}>Dinner</Text>
                <Text style={styles.food}>Food Bill</Text>
              </View>
            </View>
            <View>
              <Text style={styles.amount}>₹ 120</Text>
            </View>
          </View>
        </View>
      </View> */}
    </>
  );
};

export default BillingScreenContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    // backgroundColor: "white",
    borderRadius: 6,
    paddingHorizontal: 15,
    marginHorizontal: 20,
    paddingVertical: 15,
    marginTop: 20,
    position: "absolute",
    width: "91%",
    // alignItems: "center",
    // marginLeft: 2,
    // justifyContent: "center",
  },
  mainContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#E9EFF3",
    paddingVertical: 5,
    // borderWidth: 1,
    // position: "absolute",
  },
  main: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 7,
  },
  AfternoonContainer: {
    width: "70%",
    // borderWidth: 1,
  },

  icon: {
    // borderWidth: 1,
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    marginRight: 5,
    marginBottom: 5,
    backgroundColor: " rgba(33, 150, 243, 0.2);",

    // padding: 10,
  },
  text: {
    fontSize: 18,
  },
  amount: {
    fontSize: 17,
    fontWeight: "500",
    color: "#2196F3",
    marginTop: 5,
  },
  food: {
    fontSize: 12,
    color: "#AEAEAE",
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
  },
  DeleteiconHead: {
    height: 30,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginRight: 5,
    marginBottom: 5,
    backgroundColor: "white",
    // position: "absolute",
    left: "84%",
    top: 55,
    // bottom: 200,
    // borderWidth: 1,
    // marginLeft: 5,
  },
});
