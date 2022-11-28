import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React from "react";
import Button from "../../Buttons/button";
import { useNavigation } from "@react-navigation/native";

const MainBillContainer = () => {
  const navigation = useNavigation();

  const EditExpense = (value) => {
    navigation.navigate(value);
  };
  return (
    <>
      <View style={styles.image}>
        <Image
          source={require("../../assets/Bill.png")}
          style={styles.imageMain}
        />
      </View>
      <View style={styles.main}>
        <View style={styles.border}>
          <View style={styles.container}>
            <Text style={styles.textExpense}>Expense Type</Text>
            <Text style={styles.foodBill}>Food Bill</Text>
          </View>
        </View>

        <View style={styles.border}>
          <View style={styles.container}>
            <Text style={styles.textExpense}>Title</Text>
            <Text style={styles.foodBill}>Afternoon Food</Text>
          </View>
        </View>

        <View style={styles.Amountborder}>
          <View style={styles.container}>
            <Text style={styles.textExpense}>Amount</Text>
            <Text style={styles.foodBill}>₹ 250</Text>
          </View>
        </View>

        <Button
          style={styles.btn}
          buttonStyle={styles.mainBtn}
          title={"Edit Details"}
          onClick={() => EditExpense("EditTripExpense")}
        />
      </View>
    </>
  );
};

export default MainBillContainer;

const styles = StyleSheet.create({
  image: {
    // borderWidth: 1,
    marginHorizontal: 20,
    width: "90%",
    marginVertical: 20,
  },
  imageMain: {
    height: 240,
    width: "100%",
    // borderWidth: 1,
    borderRadius: 16,
  },
  main: {
    // borderWidth: 1,
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    paddingVertical: 10,
    marginTop: 20,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  border: {
    borderBottomWidth: 1,
    // paddingHorizontal: 5,
    paddingVertical: 20,
    borderBottomColor: "#E9EFF3",
    // height: "20%",
  },
  textExpense: {
    fontSize: 17,
    fontWeight: "400",
  },
  foodBill: {
    fontSize: 17,
    fontWeight: "500",
    color: "#2196F3",
  },
  Amountborder: {
    paddingVertical: 20,
  },
  btn: {
    borderWidth: 1,
    width: "100%",
    padding: 10,
    borderColor: "#2196F3",
    // paddingVertical: 50,
  },
  mainBtn: {
    color: "#2196F3",
    fontSize: 18,
  },
});
