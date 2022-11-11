import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";
import Input from "../components/Input";
import Button from "../Buttons/button";
import Footer from "../components/footer";
import { TouchableOpacity } from "react-native-gesture-handler";
import { isSignUp } from "../utils/helper";
import AuthStore from "../Store/AuthStore";
import { observer } from "mobx-react";

const SignUp = ({ navigation }) => {
  const [isChecked, setChecked] = useState(false);
  const [message, setMessage] = useState("");

  const MoveTo = (page) => {
    // console.log("sign up page", page);
    navigation.navigate(page);
  };

  const signIn = async (page) => {
    var arr = isSignUp({
      username: AuthStore.Username,
      mail: AuthStore.Mail,
      password: AuthStore.Password,
      repeat: AuthStore.Repeat,
    });

    await fetch("https://mocki.io/v1/319a8728-fb92-4add-9012-eaf3d8107bf4", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password2: "123456852",
        password: "123456852",
        email: "a@gmail.com",
        firstname: "akshay",
        lastname: "last",
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log("response", res);
        return res;
      })
      .catch((err) => {
        console.log("error", err);
      });

    setMessage(arr);
    if (arr === "Succesfully Sign up") {
      navigation.navigate(page);
    }
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
        <Text style={styles.heading}>Create Account</Text>

        <Input
          name={"login"}
          placeholder={"Eg - John Doe..."}
          onChangeABC={(data) => AuthStore.setUsername(data)}
          data={AuthStore.Username}
        />

        <Input
          name={"mail"}
          placeholder={"example@gmail.com"}
          onChangeABC={(data) => AuthStore.setMail(data)}
          data={AuthStore.Mail}
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
        <Input
          name={"lock-outline"}
          righticon={"remove-red-eye"}
          hideicon={"do-not-disturb-on"}
          placeholder={"Repeat Password"}
          type={"password"}
          onChangeABC={(data) => AuthStore.setRepeat(data)}
          data={AuthStore.Repeat}
        />

        <View style={styles.section}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Checkbox
              style={styles.checkbox}
              value={isChecked}
              onValueChange={setChecked}
            />
            <Text style={styles.paragraph}>
              I agree to the
              <Text style={{ color: "blue", fontWeight: "500" }}>
                Terms and conditions
              </Text>
            </Text>
          </View>
        </View>

        <Text>{message}</Text>

        <Button
          title={"Sign Up"}
          onClick={() => signIn("signUp")}
          style={{
            marginTop: "50%",
            justifyContent: "space-between",
          }}
        />
        <View>
          <Footer
            heading={"Already have an account"}
            name={"Sign In from here"}
            reciever={() => MoveTo("login")}
          />
        </View>
      </View>
    </View>
  );
};

export default observer(SignUp);

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
