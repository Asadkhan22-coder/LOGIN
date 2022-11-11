import React from "react";
import { View, Text } from "react-native";
import Navigation from "./src/Navigation/Index";
import { RootSiblingParent } from "react-native-root-siblings";
import BottomTabs from "./src/Navigation/BottomTabs";

function App() {
  return (
    <RootSiblingParent>
      <Navigation />
      {/* <BottomTabs /> */}
    </RootSiblingParent>
  );
}

export default App;
