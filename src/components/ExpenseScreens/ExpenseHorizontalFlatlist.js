import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";

const ExpenseHorizontalFlatlist = () => {
  const Data = [
    {
      id: "1",
      title1: "Trip Expense",
    },
    {
      id: "2",
      title2: "Vehicle Expense",
    },
    {
      id: "3",
      title3: "Device Expense",
    },
    // {
    //   id: "4",
    //   title4: "Completed",
    // },
    // {
    //   id: "5",
    //   title5: "Cancel",
    // },
  ];

  return (
    <View>
      <FlatList
        horizontal
        style={styles.flatlist}
        data={Data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <>
            <View>
              <View style={styles.list}>
                <Text style={styles.text}>{item.title1}</Text>
                <Text style={styles.text}>{item.title2}</Text>
                <Text style={styles.text}>{item.title3}</Text>
              </View>
            </View>
          </>
        )}
      />
    </View>
  );
};

export default ExpenseHorizontalFlatlist;

const styles = StyleSheet.create({
  list: {
    flexDirection: "row",
    padding: 7,
    // marginTop: 5,
    // borderWidth: 1,
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
  },
  flatlist: {
    padding: 5,
    // marginLeft: 17,
    // borderWidth: 1,
    paddingHorizontal: 20,
    backgroundColor: "white",
    marginTop: 2,
  },
});
