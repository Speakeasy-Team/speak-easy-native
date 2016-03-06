import { StyleSheet } from "react-native";
import variables from "../patterns/variables";

const styles = StyleSheet.create({
  view: {
    flex: 1,
    paddingTop: variables.navHeight,
    alignItems: 'center',
    backgroundColor: variables.backgroundColor,
  },
  name: {
    paddingTop: variables.baseSpacing,
    textAlign: 'center',
    fontSize: variables.baseHeadingSize,
  },
  tags: {
    padding: variables.baseSpacing,
  },
  description: {
    margin: variables.baseSpacing,
  },
  image: {
    height: 60,
    width: 60
  },
});

export default styles;
