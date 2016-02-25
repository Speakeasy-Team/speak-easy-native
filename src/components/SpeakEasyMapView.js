import React from "react-native";
import MapView from "react-native-maps";
import { connect } from "react-redux";

class SpeakEasyMapView extends React.Component {
  render() {
    const {
      currentLocation:
        { coords:
          { latitude, longitude }
        }
    } = this.props;

    const region = {
      latitude: latitude,
      longitude: longitude,
      latitudeDelta: 0.09,
      longitudeDelta: 0.04,
    }

    return (
      <MapView
        region={region}
        showsUserLocation={true}
        showsPointsOfInterest={false}
        style={{flex: 1}}
      />
    )
  }
}

const select = (state) => {
  return {
    speakEasies: state.speakEasies,
    currentLocation: state.currentLocation,
  }
}

export default connect(select)(SpeakEasyMapView);
