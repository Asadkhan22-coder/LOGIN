import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { observer } from "mobx-react";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import Home from "../screens/Home";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import Welcome from "../screens/Welcome";
import Store from "../Store/mobXstore";
import { isSignIn } from "../utils/helper";
import { getData } from "../utils/service";
import BottomTabs from "./BottomTabs";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const [islogin, setIslogin] = useState(false);

  useEffect(() => {
    getLoacal();
    console.log("islogin", islogin);
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
          <Stack.Screen name="homeScreen" component={BottomTabs} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default observer(Navigation);

const styles = StyleSheet.create({});
