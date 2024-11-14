import {  Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { AppColors } from "../../utils/Colors";
import {styles} from './style'

const CustomButton = ({ buttonTitle, onPress, disabled }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <TouchableOpacity onPress={onPress} disabled={disabled}>
        <View
          style={[
            styles.buttonContainer,
            {
              backgroundColor: disabled
                ? AppColors.BUTTON_DISABLED
                : AppColors.BUTTON,
            },
          ]}
        >
          <Text style={styles.textStyle}>{buttonTitle}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;


