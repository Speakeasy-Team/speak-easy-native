import React from "react-native";
import ExNavigator from "@exponent/react-native-navigator";
import SpeakEasies from "./containers/SpeakEasies";
import SpeakEasy from "./components/SpeakEasy";
import NavButton from "./components/NavButton";
import SpeakEasyMapViewContainer from "./containers/SpeakEasyMapViewContainer";

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
            onPress={() => navigator.push(Router.getSpeakEasyMapRoute())}
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

  getSpeakEasyMapRoute() {
    return {
      configureScene() {
        return {...ExNavigator.SceneConfigs.FloatFromBottom, gestures: null};
      },

      renderScene(navigator) {
        return (
          <SpeakEasyMapViewContainer navigator={navigator} />
        );
      },

      getTitle() {
        return 'Speak Easies';
      },

      renderLeftButton() {
        return null;
      },

      renderRightButton(navigator) {
        return (
          <NavButton
            onPress={() => navigator.pop()}
            text="List"
          />
        );
      }
    }
  }
}

export default Router
