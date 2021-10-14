import React from "react";
import { View, TextInput, StyleSheet, SafeAreaView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from '../config/styles';

function AppTextInput({ icon, ...otherProps }) {
  return (
    <SafeAreaView>
    <View style={styles.container}>
      {icon &&  (<MaterialCommunityIcons 
      name={icon}
       size={20}
        color={defaultStyles.colors.medium}
         style={styles.icon} />
      )}
      <TextInput style={defaultStyles.text} {...otherProps} />
    </View>
    </SafeAreaView>
  ); 
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
      color: defaultStyles.colors.primary,
    marginRight: 10,
  },
});

export default AppTextInput;





