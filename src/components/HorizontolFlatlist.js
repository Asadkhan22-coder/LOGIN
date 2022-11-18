import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";

const HorizontolFlatlist = () => {
  const Data = [
    {
      id: "1",
      title1: "All",
    },
    {
      id: "2",
      title2: "Not Started",
    },
    {
      id: "3",
      title3: "In Progress",
    },
    {
      id: "4",
      title4: "Completed",
    },
    {
      id: "5",
      title5: "Cancel",
    },
  ];

  return (
    <View>
      <FlatList
        horizontal
        style={{ padding: 5, marginLeft: 8 }}
        data={Data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <>
            <View>
              <View style={styles.list}>
                <Text style={styles.text}>{item.title1}</Text>
                <Text style={styles.text}>{item.title2}</Text>
                <Text style={styles.text}>{item.title3}</Text>
                <Text style={styles.text}>{item.title4}</Text>
                <Text style={styles.text}>{item.title5}</Text>
              </View>
            </View>
          </>
        )}
      />
    </View>
  );
};

export default HorizontolFlatlist;

const styles = StyleSheet.create({
  list: {
    flexDirection: "row",
    padding: 8,
    // marginTop: 5,
    // borderWidth: 1,
  },
  text: {
    fontSize: 19,
    fontWeight: "500",
  },
});
