import {  TextInput, View } from "react-native";
import React from "react";
import {styles} from './style'

const InputBox = ({
  placeholder,
  secureTextEntry,
}) => {
  return (
    <View style={styles.mainContainer}>
      <TextInput
        style={styles.inputText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default InputBox;


