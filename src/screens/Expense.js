import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState, useRef } from "react";
import CustomHeader from "../components/CustomHeader";
import * as SVG from "../assets/SVG";
import EmptyExpenseContainer from "../components/EmptyExpenseContainer";
import FAB from "../components/FAB";
import FMenu from "../components/FMenu";
import { Modalize } from "react-native-modalize";
import ModalizerTripExpense from "../components/TripDetailScreens/ModalizerTripExpense";
import ModalizeGeneral from "../components/TripDetailScreens/ModalizeGeneral";
import ModalizerVehicleExp from "../components/TripDetailScreens/ModalizerVehicleExp";
import ExpensesFlatlistScreen from "../components/ExpenseScreens/ExpensesFlatlistScreen";
import ExpenseHorizontalFlatlist from "../components/ExpenseScreens/ExpenseHorizontalFlatlist";

const Expense = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const modalizeRef = useRef();

  const onPress = () => {
    modalizeRef.current?.open();
  };

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <CustomHeader title={"Trip Expenses"} backIcon={<SVG.BackIcon />} />

        {/* <EmptyExpenseContainer /> */}
        <View>
          <ExpenseHorizontalFlatlist />
          <ExpensesFlatlistScreen />
        </View>
        <FAB
          modalState={setModalVisible}
          visibleState={modalVisible}
          icon={<SVG.Plus />}
        />
        <FMenu isvisible={modalVisible} onPress={() => onPress()} />
      </SafeAreaView>
      <ModalizerTripExpense send={modalizeRef} />
      {/* <ModalizeGeneral send={modalizeRef} />
      <ModalizerVehicleExp send={modalizeRef} /> */}
    </>
  );
};

export default Expense;

const styles = StyleSheet.create({});
