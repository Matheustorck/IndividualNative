import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import { UserData } from "../../utils/UserData";
import {styles} from './style'

const Post = () => {
 
  return (
    <View style={styles.container}>
      {UserData.map((item) => {
        return (
          <View key={item.id} style={styles.postContainer}>
            <View
              style={styles.header}
            >
              <Image
                style={styles.profileImage}
                source={item.profile}
              />
              <Text
                style={styles.username}
              >
                {item.name}
              </Text>
            </View>
            <View>
              <Image
                style={styles.postImage}
                source={item.post.image}
              />
            </View>
            <View
              style={styles.actionContainer}
            >
              <TouchableOpacity>
                <Image
                  style={styles.actionIcon}
                  source={require("../../../assets/Like.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={styles.actionIconComment}
                  source={require("../../../assets/Comment.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={styles.actionIconMessage}
                  source={require("../../../assets/Messanger.png")}
                />
              </TouchableOpacity>
            </View>
            <Text
              style={styles.likeText}
            >
              {item.post.like} likes
            </Text>
            <View
              style={styles.captionContainer}
            >
              <Text style={styles.captionUsername}>
                {item.name}{" "}
              </Text>
              <Text style={styles.captionText}>{item.post.caption}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default Post;
