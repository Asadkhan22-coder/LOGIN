import { StyleSheet, Text, View } from "react-native";
import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../screens/Welcome";
import Login from "../screens/Login";
import SignUp from "../screens/Login";

export default (Stack) => {
  //   const Stack = createStackNavigator();

  return (
    <>
      <Stack.Screen name="login" component={SignUp} />
      <Stack.Screen name="signUp" component={Login} />
      <Stack.Screen name="welcome" component={Welcome} />
    </>
  );
};

// export default AuthStack;

const styles = StyleSheet.create({});
