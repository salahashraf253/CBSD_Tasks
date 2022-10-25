import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomInput from "../components/CustomInput/CustomInput";
import LoginButton from "../components/CustomButton/LoginButton";
import CustomText from "../components/customText/customText";
//FirstProject\src\components\Button.js
//
const LoginScreen = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
  const OnLoginPress = () => {
    console.warn("sign in");
  };
  return (
    <View style={styles.container}>
      <CustomText bodyText="Enter your Email" />
      <CustomInput
        placeholder="user@email.com"
        // value={userName}
        // setValue={setUsername}
        isPassword={false}
      />
      <CustomText bodyText="Enter your password" />
      <CustomInput
        placeholder="Password"
        isPassword={true}
        // value={password}
        // setValue={setPassword}
      />
      <LoginButton text={"login"} onPress={OnLoginPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "dodgerblue",
    // alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    fontSize: 20,
  },
});

export default LoginScreen;
