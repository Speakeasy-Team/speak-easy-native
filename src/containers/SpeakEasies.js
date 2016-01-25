import React from "react-native";
import SpeakEasiesMapView from "../components/SpeakEasiesMapView";
import ActiveSpeakEasy from "../components/ActiveSpeakEasy";
import { connect } from "react-redux";
import { loadSpeakEasies, selectActiveSpeakEasy } from "../actions";
import Router from "../Router";
import styles from "../styles/containers/SpeakEasies";

const {
  Component,
  View,
  Text,
  ListView
} = React;

class SpeakEasiesContainer extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(loadSpeakEasies());
  }

  selectSpeakEasy(id) {
    const { dispatch } = this.props;

    dispatch(selectActiveSpeakEasy(id));
  }

  render() {
    const { speakEasies, activeSpeakEasy } = this.props

    if (!speakEasies.length) {
      return (
        <View style={styles.container}>
          <Text>Loading</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <SpeakEasiesMapView
          speakEasies={speakEasies}
          onSpeakEasyPress={this.selectSpeakEasy.bind(this)}
        />
        {activeSpeakEasy && <ActiveSpeakEasy speakEasy={activeSpeakEasy} />}
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
    activeSpeakEasy: findSpeakEasyById(state.speakEasies, state.activeSpeakEasy)
  }
}

export default connect(select)(SpeakEasiesContainer);
