import { StyleSheet } from "react-native";
import variables from "../patterns/variables";

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  component: {
    flex: 1,
    marginBottom: variables.baseSpacing,
    height: 150,
  },
  name: {
    fontSize: variables.baseHeadingSize,
    backgroundColor: "transparent",
    color: "white",
    position: "absolute",
    top: 20,
    bottom: 0,
    left: 20,
    right: 0,
  },
  description: {
    fontSize: variables.baseFontSize,
    backgroundColor: "transparent",
    color: "white",
    position: "absolute",
    top: 45,
    bottom: 0,
    left: 20,
    right: 0,
  },
  image: {
    flex: 1,
  },
  linearGradient: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: 150,
    opacity: .7,
  }
});

export default styles;
