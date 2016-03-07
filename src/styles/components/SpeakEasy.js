import { StyleSheet } from "react-native";
import variables from "../patterns/variables";

const styles = StyleSheet.create({
  view: {
    flex: 1,
    paddingTop: variables.navHeight,
    backgroundColor: variables.backgroundColor,
  },
  image: {
    height: 240,
  },
  info: {
    padding: variables.baseSpacing,
    borderBottomWidth: variables.baseBorderWidth,
    borderBottomColor: variables.baseBorderColor,
  },
  header: {
    fontWeight: variables.boldFontWeight,
  },
  description: {
    textAlign: "justify",
  },
  lastItem: {
    borderBottomWidth: 0,
  }
});

export default styles;
