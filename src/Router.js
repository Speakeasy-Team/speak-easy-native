import React from "react-native";
import SpeakEasies from "./containers/SpeakEasies";
import SpeakEasy from "./components/SpeakEasy";

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
      }
    }
  },

  getSpeakEasyRoute(speakEasy) {
    return {
      renderScene(navigator) {
        return (
          <SpeakEasy navigator={navigator} speakEasy={speakEasy} />
        );
      },

      getTitle() {
        return speakEasy.name;
      }
    }
  }
}

export default Router
