
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    paddingHorizontal: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 50,
    backgroundColor: "white",
  },
  logoImage: {
    height: 28,
    width: 110,
  },
  iconsContainer: {
    flexDirection: "row",
  },
  iconButton: {
    marginRight: 15,
  },
  messengerIconContainer: {
    position: "relative",
  },
  notificationBadge: {
    position: "absolute",
    bottom: 12,
    left: 13,
    backgroundColor: "red",
    paddingHorizontal: 5,
    borderRadius: 10,
  },
});
