import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { observer } from "mobx-react";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import AddNotes from "../components/TripDetailScreens/AddNotes";
import LiveTrip from "../components/TripDetailScreens/LiveTrip";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import StartTrip from "../screens/StartTrip";
import TripDetail from "../screens/TripDetail";
import Welcome from "../screens/Welcome";
import Store from "../Store/mobXstore";
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
          <>
            <Stack.Screen name="homeScreen" component={BottomTabs} />
            <Stack.Screen name="TripDetail" component={TripDetail} />
            <Stack.Screen name="StartTrip" component={StartTrip} />
            <Stack.Screen name="LiveTrip" component={LiveTrip} />
            <Stack.Screen name="AddNotes" component={AddNotes} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default observer(Navigation);

const styles = StyleSheet.create({});
