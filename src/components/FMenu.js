import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useRef } from "react";
import { Modalize } from "react-native-modalize";

const FMenu = ({ isvisible, onPress }) => {
  return (
    <>
      {isvisible && (
        <View style={styles.container}>
          <View style={styles.text}>
            <TouchableOpacity onPress={() => onPress()}>
              <Text style={styles.modalText}>Trip Expense</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.text}>
            <TouchableOpacity>
              <Text style={styles.modalText}>Vehical Expense</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <Text style={styles.modalText}>General</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default FMenu;

const styles = StyleSheet.create({
  modalText: {
    marginTop: 2,
    padding: 10,
    fontWeight: "500",
  },
  container: {
    position: "absolute",
    bottom: 130,
    right: 50,
    backgroundColor: "white",
    borderRadius: 16,
    paddingHorizontal: 15,
  },
  text: {
    borderBottomWidth: 1,
    // borderWidth: 1,
  },
  modal: {
    width: "100%",
    // position: "absolute",
  },
});
