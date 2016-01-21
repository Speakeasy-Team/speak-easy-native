import React, { Component } from "react-native";
import HomeScreen from "../components/HomeScreen";
import { connect } from "react-redux"
import SpeakEasies from "./SpeakEasies"

class Root extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch({ type: 'LOADED' });
  }

  render() {
    const { speakEasies } = this.props

    return (
      <SpeakEasies speakEasies={speakEasies} />
    );
  }
}

const select = (state) => {
  return {
    speakEasies: state.speakEasies || []
  }
}

export default connect(select)(Root);
