import React from "react-native";
import SpeakEasies from "./containers/SpeakEasies";

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
  }
}

export default Router
