import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";
import Input from "../components/Input";
import Button from "../Buttons/button";
import Footer from "../components/footer";
import { TouchableOpacity } from "react-native-gesture-handler";
import { isSignIn } from "../utils/helper";
import { storeData } from "../utils/service";
import Store from "../Store/mobXstore";
import AuthStore from "../Store/AuthStore";
import { observer } from "mobx-react";
import Toast from "react-native-root-toast";
import AsyncStorage from "@react-native-async-storage/async-storage";

// import { storeData } from "../utils/service";
// import * as LottiePlayer from "@lottiefiles/lottie-player";

const Login = ({ navigation }) => {
  const [isChecked, setChecked] = useState(false);
  const [message, setMessage] = useState("");

  // console.log("Login screen");
  const MoveTo = (page) => {
    navigation.navigate(page);
  };

  // const remeberMe = (data) => {
  //   setChecked(data);
  //   Store.setCount(true);
  // };
  // const showToast = () => {
  //   Toast.show("Wrong Credentials!", Toast.SHORT);
  // };

  const login = async () => {
    var a = isSignIn({
      Username: AuthStore.Username,
      Password: AuthStore.Password,
    });
    // console.log("first", Store.count);
    if (a === "Successfully login") {
      let b = {};
      await fetch("https://onlinetool.in/api/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password: AuthStore.Password,
          username: AuthStore.Username,
        }),
      })
        .then((response) => response.json())
        .then(async (response) => {
          console.log("response", response);
          b = response;
          if (response.detail) {
            Toast.show(response.detail, Toast.SHORT);
          } else {
            // await storeData("Token")
            var abc = storeData(response.Token);
            Store.setCount(true);
            console.log("store data", abc);
            // // console.log("store data", storeData("storage_Key", data));
            // console.log("abc", abc);
            // return JSON.parse(storeData("storage_Key"));
          }
          return response;
        })
        .catch((err) => {
          console.log("err", err);
        });

      // b.then((resp) => console.log("resp", resp));

      console.log("var b", b);
    } else {
      Store.setCount(false);
    }

    setMessage(a);
    // if (a === "Successfully login") {
    //   console.log("Successfully login");
    //   await storeData({
    //     Username: AuthStore.Username,
    //     Password: AuthStore.Password,
    //   });
    //   // navigation.navigate(page);
    // }
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
    borderBottomLeftRadius: "250 ",
    borderBottomRightRadius: "250 ",
  },
});
