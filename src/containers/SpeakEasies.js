import React from "react-native";
import SpeakEasiesMapView from "../components/SpeakEasiesMapView";
import { connect } from "react-redux";
import { loadSpeakEasies } from "../actions";
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

  showSpeakEasy(speakEasy) {
    const { navigator } = this.props;
    const route = Router.getSpeakEasyRoute(speakEasy);

    navigator.push(route);
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
          onMorePress={this.showSpeakEasy.bind(this)}
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
    activeSpeakEasy: findSpeakEasyById(state.speakEasies, state.activeSpeakEasy)
  }
}

export default connect(select)(SpeakEasiesContainer);
