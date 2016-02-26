import React from "react-native";
import { connect } from "react-redux";
import { loadSpeakEasies, setCurrentLocation } from "../actions";
import Router from "../Router";
import SpeakEasyListView from "../components/SpeakEasyListView";
import styles from "../styles/containers/SpeakEasies";

const {
  Component,
  View,
  Text,
} = React;

class SpeakEasiesContainer extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(loadSpeakEasies());
    dispatch(setCurrentLocation());
  }

  showSpeakEasy(speakEasy) {
    const { navigator } = this.props;
    const route = Router.getSpeakEasyRoute(speakEasy);

    navigator.push(route);
  }

  render() {
    const {
      speakEasies, activeSpeakEasy, isFetching
    } = this.props

    if (isFetching) {
      return (
        <View style={styles.container}>
          <Text>Loading</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <SpeakEasyListView
          speakEasies={speakEasies}
          onPress={this.showSpeakEasy.bind(this)}
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
    isFetching: state.isFetching,
  }
}

export default connect(select)(SpeakEasiesContainer);
