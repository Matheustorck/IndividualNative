
import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  container: {
    marginTop: 2,
  },
  postContainer: {
    marginTop: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    marginBottom: 8,
  },
  profileImage: {
    height: 30,
    width: 30,
    borderRadius: 15,
  },
  username: {
    paddingLeft: 10,
    fontSize: 16,
    fontWeight: "600",
    color: "black",
  },
  postImage: {
    height: 400,
    width: screenWidth,
  },
  actionContainer: {
    paddingHorizontal: 13,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  actionIcon: {
    height: 24,
    width: 28,
  },
  actionIconComment: {
    height: 24,
    width: 24,
    marginLeft: 15,
  },
  actionIconMessage: {
    height: 24,
    width: 28,
    marginLeft: 15,
  },
  likeText: {
    marginLeft: 13,
    marginTop: 10,
    fontSize: 16,
    fontWeight: "600",
    color: "black",
  },
  captionContainer: {
    flexDirection: "row",
    paddingHorizontal: 13,
    alignItems: "center",
  },
  captionUsername: {
    color: "black",
    fontSize: 16,
    fontWeight: "500",
  },
  captionText: {
    color: "black",
  },
});
