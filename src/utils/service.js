import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthStore from "../Store/AuthStore";
import Toast from "react-native-root-toast";
import Store from "../Store/mobXstore";

export const storeData = async (value) => {
  try {
    var data = JSON.stringify(value);
    await AsyncStorage.setItem("storage_Key", data);
  } catch (e) {
    console.log("error", e);
  }
};

export const getData = async () => {
  try {
    var arr = await AsyncStorage.getItem("storage_Key")
      .then((data) => {
        return data;
      })
      .catch((err) => {
        return err;
      });
    return JSON.parse(arr);
  } catch (error) {}
};
export const clearStorage = async (key) => {
  try {
    var arr = await AsyncStorage.removeItem(key)
      .then((data) => {
        return data;
      })
      .catch((err) => {
        return err;
      });
    return JSON.parse(arr);
  } catch (error) {}
};
export const signinAPI = async () => {
  try {
    await fetch("https://onlinetool.in/api/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: AuthStore.Password,
        username: AuthStore.Username,
      }),
    })
      .then((response) => response.json())
      .then(async (response) => {
        console.log("response", response);

        if (response.detail) {
          Toast.show(response.detail, Toast.SHORT);
        } else {
          var abc = storeData(response.Token);
          Store.setCount(true);
          console.log("store data", abc);
        }
        return response;
      })
      .catch((err) => {
        console.log("err", err);
      });
  } catch (error) {
    console.log("error", error);
  }
};
