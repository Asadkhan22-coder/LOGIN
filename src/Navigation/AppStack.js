import { StyleSheet, Text, View } from "react-native";
import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";

const AppStack = (Stack) => {
  //   const Stack = createStackNavigator();

  return (
    <>
      <Stack.Screen name="homeScreen" component={Home} />
    </>
  );
};

export default AppStack;

const styles = StyleSheet.create({});
