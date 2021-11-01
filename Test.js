import React from "react";
import { View, TextInput, StyleSheet,Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

function AppTextInput({ icon, ...otherProps }) {
  return (
  
    <View  style = {styles.container}>
      {icon &&  <MaterialCommunityIcons name={icon} />}
      <TextInput style={styles.input}  />
    </View>
  ); 
}

const styles = StyleSheet.create({
  container: {
  },
  input: {
backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  }
});

export default AppTextInput;