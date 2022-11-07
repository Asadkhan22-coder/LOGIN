import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (value) => {
  try {
    var data = JSON.stringify(value);
    await AsyncStorage.setItem("storage_Key", data);
  } catch (e) {
    console.log("error", e);
    // saving error
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
    let res = await fetch("http://localhost:3000/api/login");
    return res;
  } catch (error) {
    console.log("error", error);
  }
};
