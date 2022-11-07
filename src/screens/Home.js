import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Button from "../Buttons/button";
import { clearStorage } from "../utils/service";
import Store from "../Store/mobXstore";
import { observer } from "mobx-react";

const Home = () => {
  const logout = async () => {
    await clearStorage("storage_Key");
    Store.setCount(false);
  };
  return (
    <SafeAreaView>
      <Button title={"Log out"} onClick={() => logout()} />
    </SafeAreaView>
  );
};

export default observer(Home);

const styles = StyleSheet.create({});
