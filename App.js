import React from "react";
import { View, Text } from "react-native";
import Navigation from "./src/Navigation/Index";
import { RootSiblingParent } from "react-native-root-siblings";

function App() {
  return (
    <RootSiblingParent>
      <Navigation />
    </RootSiblingParent>
  );
}

export default App;
