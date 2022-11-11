import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";
import Input from "../components/Input";
import Button from "../Buttons/button";
import Footer from "../components/footer";
import { TouchableOpacity } from "react-native-gesture-handler";
import { isSignIn } from "../utils/helper";
import { signinAPI } from "../utils/service";
import Store from "../Store/mobXstore";
import AuthStore from "../Store/AuthStore";
import { observer } from "mobx-react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = ({ navigation }) => {
  const [isChecked, setChecked] = useState(false);
  const [message, setMessage] = useState("");

  const MoveTo = (page) => {
    navigation.navigate(page);
  };

  // const remeberMe = (data) => {
  //   setChecked(data);
  //   Store.setCount(true);
  // };

  const login = async () => {
    var a = isSignIn({
      Username: AuthStore.Username,
      Password: AuthStore.Password,
    });
    // console.log("first", Store.count);
    if (a === "Successfully login") {
      signinAPI();
    } else {
      Store.setCount(false);
    }
    setMessage(a);
  };

  return (
    <View
      style={{
        backgroundColor: "lightblue",

        height: "100%",
      }}
    >
      <View style={styles.mainContainer}></View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: "80%",
        }}
      >
        <Text style={styles.heading}>Sign In Now</Text>

        <Input
          name={"login"}
          placeholder={"Eg - John Doe..."}
          onChangeABC={(data) => AuthStore.setUsername(data)}
          data={AuthStore.Username}
        />

        <Input
          name={"lock-outline"}
          righticon={"remove-red-eye"}
          hideicon={"do-not-disturb-on"}
          placeholder={"Password"}
          type={"password"}
          onChangeABC={(data) => AuthStore.setPassword(data)}
          data={AuthStore.Password}
        />

        <View style={styles.section}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Checkbox
              style={styles.checkbox}
              value={isChecked}
              onValueChange={(data) => remeberMe(data)}
            />
            <Text style={styles.paragraph}>Remember me</Text>
          </View>
          <Text style={styles.paragraph2}>Forget Password?</Text>
        </View>
        <Text>{message}</Text>

        <Button
          title={"Sign In"}
          onClick={() => login("homeScreen")}
          style={{
            marginTop: "50%",
            justifyContent: "space-between",
          }}
        />
        <View>
          <Footer
            heading={"Don't you have an account?"}
            name={"Sign Up from here"}
            reciever={() => MoveTo("signUp")}
          />
        </View>
      </View>
    </View>
  );
};

export default observer(Login);

const styles = StyleSheet.create({
  heading: {
    textAlign: "center",
    fontSize: 28,
    letterSpacing: 1,
    fontWeight: "500",
    marginTop: "15%",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 25,
    paddingTop: 12,
  },
  paragraph: {
    fontSize: 15,
  },
  paragraph2: {
    fontSize: 15,
  },
  checkbox: {
    margin: 8,
  },
  mainContainer: {
    width: "100%",
    height: "18%",
    backgroundColor: "white",
    borderBottomLeftRadius: 250,
    borderBottomRightRadius: 250,
  },
});
