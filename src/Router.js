import React from "react-native";
import SpeakEasies from "./containers/SpeakEasies";
import SpeakEasy from "./components/SpeakEasy";
import NavButton from "./components/NavButton";
import SpeakEasiesMapView from "./components/SpeakEasiesMapView";
import SpeakEasyMapView from "./components/SpeakEasyMapView";
import ExNavigator from "@exponent/react-native-navigator";

const { Button, Text, TouchableHighlight } = React;

const Router = {
  getSpeakEasiesRoute() {
    return {
      renderScene(navigator) {
        return (
          <SpeakEasies navigator={navigator} />
        );
      },

      getTitle() {
        return 'Speak Easies';
      },

      renderRightButton(navigator) {
        return (
          <NavButton
            navigator={navigator}
            route={Router.getSpeakEasiesMapRoute()}
            text="Map"
          />
        );
      },
    }
  },

  getSpeakEasyRoute(speakEasy) {
    return {
      renderScene(navigator) {
        return (
          <SpeakEasy navigator={navigator} speakEasy={speakEasy} />
        );
      },
    }
  },

  getSpeakEasiesMapRoute() {
    return {
      configureScene() {
        return {...ExNavigator.SceneConfigs.FloatFromBottom, gestures: null};
      },

      renderScene(navigator) {
        return (
          <SpeakEasiesMapView navigator={navigator} />
        );
      },

      getTitle() {
        return 'Speak Easies';
      },
    }
  }
}

export default Router
