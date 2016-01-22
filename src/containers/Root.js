import React, { Component, View } from "react-native";
import ExNavigator from "@exponent/react-native-navigator";
import Router from "../Router"

class Root extends Component {
  render() {
    return (
      <ExNavigator
        showNavigationBar={true}
        style={{ flex: 1 }}
        initialRoute={Router.getSpeakEasiesRoute()}
      />
    );
  }
}

export default Root;
