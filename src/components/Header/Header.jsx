import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import {styles} from './style'

const Header = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.logoImage}
          source={require("../../../assets/Instagram.png")}
        />
      </View>
      <View style={styles.iconsContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <Image source={require("../../../assets/Like.png")} />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.messengerIconContainer}>
            <Image source={require("../../../assets/Messanger.png")} />
            <View style={styles.notificationBadge}>
              <Text
            
              >
                6
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
