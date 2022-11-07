import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../screens/Welcome";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import Home from "../screens/Home";
import AuthStack from "./AuthStack";
import AppStack from "./AppStack";
import { getData, storeData } from "../utils/service";
import Store from "../Store/mobXstore";
import { observer } from "mobx-react";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const [islogin, setIslogin] = useState(false);

  useEffect(() => {
    getLoacal();
  }, [Store.count]);
  const getLoacal = async () => {
    var data = await getData();
    console.log("getLocal", data);
    if (data !== null) {
      setIslogin(true);
      console.log("getLocal", data);
    } else {
      setIslogin(false);
    }
  };
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={"welcome"}
      >
        {/* {true ? AuthStack(Stack) : AppStack(Stack)} */}
        {!islogin ? (
          <>
            <Stack.Screen name="welcome" component={Welcome} />
            <Stack.Screen name="signUp" component={SignUp} />
            <Stack.Screen name="login" component={Login} />
          </>
        ) : (
          <Stack.Screen name="homeScreen" component={Home} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default observer(Navigation);

const styles = StyleSheet.create({});
