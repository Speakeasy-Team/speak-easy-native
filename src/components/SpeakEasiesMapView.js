import React from "react-native";
import { connect } from "react-redux";
import { loadSpeakEasies } from "../actions";
import Router from "../Router";
import styles from "../styles/components/SpeakEasyMapView";

const {
  Component,
  MapView,
  Text,
  View,
  Image,
  TouchableOpacity
} = React;

class SpeakEasiesMapView extends Component {
  render() {
    const { speakEasies, onMorePress } = this.props;
    const annotations = speakEasies.map((speakEasy) => {
      return {
        id: speakEasy.id.toString(),
        title: speakEasy.name,
        latitude: speakEasy.latitude,
        longitude: speakEasy.longitude,
        rightCalloutView: (
          <TouchableOpacity onPress={() => onMorePress(speakEasy)}>
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
          style={styles.map}
          showsUserLocation={true}
          followUserLocation={true}
          annotations={annotations}
        />
      </View>
    );
  }
}

export default SpeakEasiesMapView
