import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { UserData } from "../../utils/UserData";
import {styles} from './style'

const Stories = () => {
  return (
    <View
      style={styles.container}
    >
      {UserData.map((item) => {
        console.log(item);
        return (
          <View style={styles.storyItem}>
            <TouchableOpacity>
              <View
                style={styles.storyBorder}
              >
                <Image
                  style={styles.storyImage}
                  source={item.story.image}
                />
              </View>
            </TouchableOpacity>
            <Text style={styles.usernameText}>
              {item.username}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

export default Stories;
