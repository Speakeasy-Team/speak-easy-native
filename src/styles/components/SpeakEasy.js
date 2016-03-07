import { StyleSheet } from "react-native";
import variables from "../variables";

const styles = StyleSheet.create({
  view: {
    flex: 1,
    paddingTop: variables.navHeight,
    backgroundColor: variables.backgroundColor,
  },
  image: {
    height: 240,
  },
  header: {
    fontWeight: variables.boldFontWeight,
  },
  description: {
    textAlign: "justify",
  },
  lastItem: {
    marginBottom: 0,
  }
});

export default styles;
