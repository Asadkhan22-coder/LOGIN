import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const ExpensesFlatlistScreen = () => {
  const data = [
    {
      id: 1,
      name: "Trip ID & Name",
      amount: 12345678,
      date: "01-05-2022",
    },
    {
      id: 2,
      name: "Trip ID & Name",
      amount: 12345678,
      date: "01-05-2022",
    },
    {
      id: 3,
      name: "Trip ID & Name",
      amount: 12345678,
      date: "01-05-2022",
    },
    {
      id: 4,
      name: "Trip ID & Name",
      amount: 12345678,
      date: "01-05-2022",
    },
    {
      id: 5,
      name: "Trip ID & Name",
      amount: 12345678,
      date: "01-05-2022",
    },
    {
      id: 6,
      name: "Trip ID & Name",
      amount: 12345678,
      date: "01-05-2022",
    },
    {
      id: 7,
      name: "Trip ID & Name",
      amount: 12345678,
      date: "01-05-2022",
    },
    {
      id: 8,
      name: "Trip ID & Name",
      amount: 12345678,
      date: "01-05-2022",
    },
    {
      id: 9,
      name: "Trip ID & Name",
      amount: 12345678,
      date: "01-05-2022",
    },
    {
      id: 10,
      name: "Trip ID & Name",
      amount: 12345678,
      date: "01-05-2022",
    },
    {
      id: 11,
      name: "Trip ID & Name",
      amount: 12345678,
      date: "01-05-2022",
    },
  ];

  const navigation = useNavigation();
  const BillingScreen = (value) => {
    navigation.navigate(value);
  };

  return (
    <>
      <FlatList
        data={data}
        style={{ marginTop: 13 }}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <>
            <TouchableOpacity
              onPress={() => BillingScreen("ExpenseBillScreen")}
            >
              <View style={styles.main}>
                <View style={styles.firstView}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.name2}>{item.amount}</Text>
                </View>

                <View style={styles.firstView}>
                  <Text style={styles.status}>Trip Date</Text>
                  <Text style={styles.status}>{item.date}</Text>
                </View>
              </View>
            </TouchableOpacity>
          </>
        )}
      />
    </>
  );
};

export default ExpensesFlatlistScreen;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 25,
    // height: "70%",
    paddingBottom: 150,
  },
  main: {
    marginHorizontal: 20,
    backgroundColor: "white",
    // height: 110,
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
    // color: "#2196F3",
  },
  name2: {
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
