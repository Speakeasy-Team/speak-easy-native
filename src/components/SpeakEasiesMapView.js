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
} = React;

class SpeakEasiesMapView extends Component {
  render() {
    const { speakEasies, onSpeakEasyPress } = this.props;
    const annotations = speakEasies.map((speakEasy) => {
      return {
        id: speakEasy.id.toString(),
        title: speakEasy.name,
        latitude: speakEasy.latitude,
        longitude: speakEasy.longitude,
      }
    });

    return (
      <View style={styles.view}>
        <MapView
          style={styles.map}
          showsUserLocation={true}
          followUserLocation={true}
          annotations={annotations}
          onAnnotationPress={
            (annotation) => onSpeakEasyPress(parseInt(annotation.id), 10)
          }
        />
      </View>
    );
  }
}

export default SpeakEasiesMapView
