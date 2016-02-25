import React from "react-native";
import { connect } from "react-redux";
import Router from "../Router";
import styles from "../styles/components/SpeakEasyMapView";
import { loadSpeakEasies } from "../actions";

const {
  Component,
  MapView,
  Text,
  View,
  Image,
  TouchableOpacity
} = React;

class SpeakEasiesMapView extends Component {
  onMorePress(speakEasy) {
    const { navigator } = this.props;

    navigator.push(Router.getSpeakEasyRoute(speakEasy));
  }

  render() {
    const {
      speakEasies,
      onMorePress,
      currentLocation: {
        coords: {
           latitude, longitude
        }
      }
    } = this.props;

    const region = {
      latitude: latitude,
      longitude: longitude,
      latitudeDelta: 0.09,
      longitudeDelta: 0.04,
    }

    const annotations = speakEasies.map((speakEasy) => {
      return {
        id: speakEasy.id.toString(),
        title: speakEasy.name,
        latitude: speakEasy.latitude,
        longitude: speakEasy.longitude,
        rightCalloutView: (
          <TouchableOpacity onPress={() => this.onMorePress(speakEasy)}>
            <Text>More</Text>
          </TouchableOpacity>
        ),
        leftCalloutView: (
          <Image
            source={{ uri: speakEasy.cover_image_url }}
            style={{ height: 40, width: 40 }}
          />
        ),
        subtitle: speakEasy.description,
      }
    });

    return (
      <View style={styles.view}>
        <MapView
          region={region}
          style={styles.map}
          showsUserLocation={true}
          followUserLocation={true}
          showsPointsOfInterest={false}
          annotations={annotations}
        />
      </View>
    );
  }
}

const findSpeakEasyById = (speakEasies, id) => {
  return speakEasies.find((speakEasy) => speakEasy.id === id);
};

const select = (state) => {
  return {
    speakEasies: state.speakEasies || [],
    currentLocation: state.currentLocation
  }
}
export default connect(select)(SpeakEasiesMapView);
