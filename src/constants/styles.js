import { StyleSheet } from "react-native";

import { DeviceData } from "../service/DeviceData";

export const styles = StyleSheet.create({
  screenContainer: {
    width: "100%",
    maxWidth: 800,
    alignSelf: "center",
    padding: 14,
  },

  screenContent: {
    paddingBottom: 48,
  },

  // menu

  menuItemText: {
    paddingVertical: 18,
  },

  menuPadding: {
    paddingLeft: 18,
  },

  menuItemBorder: {
    borderBottomColor: "grey",
    borderBottomWidth: 1,
  },

  listPadding: {
    paddingLeft: 36,
  },

  listItemMargin: {
    paddingVertical: 2,
  },

  highlight: {
    color: "teal",
  },

  // app

  appContainer: {
    flex: 1,
    height: DeviceData.windowHeight() - 2,
  },

  // audio

  audioPlayer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },

  audioTouchable: {
    margin: 16,

    padding: 12,
    paddingLeft: 14,

    height: 41,
    width: 41,

    borderRadius: 4,
    borderWidth: 1,
    borderColor: "teal",
  },

  // link

  linkIcon: {
    paddingHorizontal: 12,
    paddingVertical: 4,
  },

  linkView: {
    flexDirection: "row",
    alignItems: "center",
  },
});
