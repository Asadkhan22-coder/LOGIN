import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/MaterialIcons";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import FontIcon from "@expo/vector-icons/FontAwesome";

import Home from "../screens/Home";
import TripListing from "../screens/TripListing";
import Expense from "../screens/Expense";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    // this is bottom tab navigator file

    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={Home}
        // onPress={() => setActiveTabIndex(0)}
        options={{
          tabBarShowLabel: false,
          tabBarInactiveTintColor: "blue",
          tabBarActiveTintColor: "red",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="home"
              size={30}
              color={focused ? "#2196F3" : "grey"}
              // fill={activeTabIndex == 0 ? "blue" : "red"}
            />
          ),
        }}
      />

      <Tab.Screen
        name="TripListing"
        component={TripListing}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <Icon
              name="clock-outline"
              size={30}
              color={focused ? "#2196F3" : "grey"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Expense"
        component={Expense}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <Icon
              name="golf-cart"
              size={30}
              color={focused ? "#2196F3" : "grey"}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <FontIcon
              name="user"
              size={30}
              color={focused ? "#2196F3" : "grey"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({});
