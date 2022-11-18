import {
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/MaterialIcons";
import * as SVG from "../assets/SVG";

const EmptyExpenseContainer = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <SVG.EmptyLogo style={styles.logo} />
    </View>
  );
};

export default EmptyExpenseContainer;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  logo: {
    justifyContent: "center",
    alignContent: "center",
    marginHorizontal: 35,
    marginVertical: 50,
  },
});
