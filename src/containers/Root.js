import React, { Component } from "react-native";
import HomeScreen from "../components/HomeScreen";
import { connect } from 'react-redux'

class Root extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch({ type: 'LOADED' });
  }

  render() {
    return (
      <HomeScreen />
    );
  }
}

const select = (state) => {
  return {
    speakEasies: state.speakEasies
  }
}

export default connect(select)(Root);
