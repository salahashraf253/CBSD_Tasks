import React from "react";
import {
  View,
  StyleSheet,
  Button,
  SafeAreaView,
  Pressable,
  Text,
} from "react-native";

const LoginButton = ({ onPress, text }) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
    // <View>
    //   <Button title="login" color="#f194ff" />
    // </View>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#f194ff",
    padding: 15,
    marginVertical: 5,
    alignItems: "center",
    // width: '100%',
    borderRadius:5,
  },
  text: {
    fontWeight: "bold",
    color: "black",
  },
});

export default LoginButton;
