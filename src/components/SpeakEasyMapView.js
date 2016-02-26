import React from "react-native";
import MapView from "react-native-maps";
import { connect } from "react-redux";
import Router from "../Router";
import SpeakEasyCallout from "./SpeakEasyCallout";

const { View, TouchableHighlight, Text } = React;

class SpeakEasyMapView extends React.Component {
  onCalloutPress(speakEasy) {
    const { navigator } = this.props;

    navigator.push(Router.getSpeakEasyRoute(speakEasy));
  }

  render() {
    const {
      speakEasies,
      navigator,
      currentLocation: {
        coords: {
          latitude, longitude
        }
      }
    } = this.props;

    const region = {
      latitude: latitude,
      longitude: longitude,
      latitudeDelta: 0.009,
      longitudeDelta: 0.004,
    }

    return (
      <MapView
        region={region}
        showsUserLocation={true}
        showsPointsOfInterest={false}
        style={{flex: 1}}
      >
      {speakEasies.map((speakEasy) => {
        const coords = {
          latitude: speakEasy.latitude,
          longitude: speakEasy.longitude
        }
        return (
          <MapView.Marker
            key={speakEasy.id}
            coordinate={coords}
          >
            <MapView.Callout>
              <SpeakEasyCallout
                name={speakEasy.name}
                description={speakEasy.description}
                onPress={() => this.onCalloutPress(speakEasy)}
              />
            </MapView.Callout>
          </MapView.Marker>
        )
      })}
      </MapView>
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
