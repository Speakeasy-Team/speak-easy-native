import React from "react-native";
import { connect } from "react-redux";
import SpeakEasyMapView from "../components/SpeakEasyMapView";
import Router from "../Router";

class SpeakEasyMapViewContainer extends React.Component {
  onCalloutPress(speakEasy) {
    const { navigator } = this.props;

    navigator.push(Router.getSpeakEasyRoute(speakEasy));
  }

  render() {
    const { speakEasies, currentLocation } = this.props;

    return (
      <SpeakEasyMapView
        speakEasies={speakEasies}
        currentLocation={currentLocation}
        onCalloutPress={this.onCalloutPress.bind(this)}
      />
    );
  }
}

const select = (state) => {
  return {
    speakEasies: state.speakEasies,
    currentLocation: state.currentLocation,
  }
}

export default connect(select)(SpeakEasyMapViewContainer);
