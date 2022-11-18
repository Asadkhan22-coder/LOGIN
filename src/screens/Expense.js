import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CustomHeader from "../components/CustomHeader";
import * as SVG from "../assets/SVG";
import EmptyExpenseContainer from "../components/EmptyExpenseContainer";
import FAB from "../components/FAB";
import FMenu from "../components/FMenu";

const Expense = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <CustomHeader title={"Trip Expenses"} backIcon={<SVG.BackIcon />} />
        <EmptyExpenseContainer />
        <FAB modalState={setModalVisible} visibleState={modalVisible} />
        <FMenu isvisible={modalVisible} />
      </SafeAreaView>
    </>
  );
};

export default Expense;

const styles = StyleSheet.create({});
