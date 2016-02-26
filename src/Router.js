import React from "react-native";
import SpeakEasies from "./containers/SpeakEasies";
import SpeakEasy from "./components/SpeakEasy";
import NavButton from "./components/NavButton";
import SpeakEasiesMapView from "./components/SpeakEasiesMapView";
import SpeakEasyMapView from "./components/SpeakEasyMapView";

const { Button, Text, TouchableHighlight } = React;

const Router = {
  getSpeakEasiesRoute() {
    const that = this;
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
            route={that.getSpeakEasiesMapRoute()}
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
      renderScene(navigator) {
        return (
          <SpeakEasyMapView navigator={navigator} />
        );
      }
    }
  }
}

export default Router
