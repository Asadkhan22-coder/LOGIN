import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
} from "react-native";
import React from "react";
import Button from "../Buttons/button";
import Color from "../assets/Color";
import Footer from "../components/footer";
import Login from "../screens/Login";
import { useNavigation } from "@react-navigation/native";

const Welcome = ({ navigation }) => {
  const nav = useNavigation();
  const MoveTo = (page) => {
    nav.navigate(page);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "lightblue",
      }}
    >
      <View style={{ width: "100%", alignItems: "center", paddingTop: 25 }}>
        <Text style={styles.heading}>Welcome to BTC Exchange</Text>
        <Text style={styles.container}>
          We are offering digital asset exchange with maximum security and
          advanced trading features
        </Text>
      </View>

      <View
        style={{
          width: "100%",
          height: "60%",
        }}
      >
        <Image
          source={require("../assets/Crypto.png")}
          resizeMode="center"
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
        />
      </View>
      <View
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button title={"SIGN UP"} onClick={() => MoveTo("signUp")} />

        <Footer
          heading={"Already a member?"}
          name={"Sign In"}
          reciever={() => MoveTo("login")}
        />
      </View>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  heading: {
    fontSize: 32,
    fontWeight: "400",
    textAlign: "center",
  },
  container: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 30,
    width: "80%",
  },
});
