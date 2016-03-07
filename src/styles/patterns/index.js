import { StyleSheet } from "react-native";
import variables from "../variables";

const patterns = StyleSheet.create({
  card: {
    padding: variables.baseSpacing * 3,
    backgroundColor: variables.darkenedBackgroundColor,
    marginBottom: variables.baseSpacing,
  }
});

export default patterns;
