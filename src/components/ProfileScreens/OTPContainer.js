import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import Button from "../../Buttons/button";
import { useNavigation } from "@react-navigation/native";
// import OTPInputView from "@twotalltotems/react-native-otp-input";

const OTPContainer = () => {
  const [box, setBox] = useState();

  const navigation = useNavigation();

  const ConfirmPass = (value) => {
    navigation.navigate(value);
  };

  return (
    <>
      <View style={styles.main}>
        <Text>OTP</Text>
        <OTPInputView
          style={{ width: "100%", height: 70, color: "red" }}
          pinCount={6}
          //code={box} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
          // onCodeChanged = {code => { this.setState({code})}}
          onCodeChanged={(box) => setBox(box)}
          autoFocusOnLoad={true}
          codeInputFieldStyle={{ color: "black" }}
          // codeInputHighlightStyle={{ color: "bla" }}
          onCodeFilled={(code) => {
            console.log(`Code is ${code}, you are good to go!`);
          }}
          //   secureTextEntry
        />

        <Button
          title={"Continue"}
          buttonStyle={styles.btnText}
          style={styles.fullbtn}
          onClick={() => ConfirmPass("ProfileConfirmPass")}
        />
      </View>
    </>
  );
};

export default OTPContainer;

const styles = StyleSheet.create({
  main: {
    // borderWidth: 1,
    marginHorizontal: 25,
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginTop: 15,
    backgroundColor: "white",
    borderRadius: 14,
    // height: "22%",
  },
  btnText: {
    color: "white",
  },
  fullbtn: {
    backgroundColor: "#2196F3",
    width: "100%",
    padding: 10,
    marginTop: 10,
  },
});
