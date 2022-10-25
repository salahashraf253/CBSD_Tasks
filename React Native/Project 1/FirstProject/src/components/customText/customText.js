import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const CustomText = ({ bodyText }) => {
  return (
    <View style={styles.container}>
      <Text>{bodyText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
    //   backgroundColor: "white",
      width: "100%",
        alignItems:'center',
    //   borderColor: "#e8e8e8",
    //   borderWidth: 1,
    //   borderRadius: 5,
    //   paddingHorizontal: 10,
      marginVertical: 5,
    },
  input: {},
});

export default CustomText;
