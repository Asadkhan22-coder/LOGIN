import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/MaterialIcons";

const Input = (props) => {
  const [secure, setSecure] = useState(false);
  const [type, settype] = useState("");
  // const [data, setData] = useState("");
  // console.log(props);

  const isPassword = props.type === "password" ? true : false;

  // const login = (type) => {
  //   console.log("login", type);
  // };

  return (
    <View style={[styles.container, props.oneStyle]}>
      <Ionicons
        size={30}
        color="black"
        style={[styles.icon, props.styleIcon]}
        name={props.name}
      />

      <TextInput
        style={[styles.input, props.style, props.fieldStyle]}
        placeholder={props.placeholder}
        secureTextEntry={secure}
        value={props.data}
        onChangeText={(data) => props.onChangeABC(data)}
      />

      {isPassword ? (
        <TouchableOpacity
          style={styles.icon}
          onPress={() => setSecure(!secure)}
        >
          <Ionicons
            size={30}
            color="black"
            name={secure ? "do-not-disturb-on" : "remove-red-eye"}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={props.styleRightIcon}>
          {props?.RightIcon && props?.RightIcon}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    borderWidth: 1,
    borderRadius: 30,
    marginTop: 15,
    height: "8%",
  },
  input: {
    flex: 1,
    width: "80%",
    justifyContent: "space-between",
    alignContent: "center",
    // borderWidth: 1,
    // height: "100%",
  },
  icon: {
    width: "20%",
    padding: 10,
  },
  fieldStyle: {
    borderWidth: 4,
    backgroundColor: "red",
  },
});
