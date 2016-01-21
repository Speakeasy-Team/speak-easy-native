import React, { Component } from "react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Root from "./containers/Root";
import data from "./sample_data";

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOADED':
      return data
    default:
      return state
  }
}

const store = createStore(reducer, { speakEasies: [] });

class EasySpeak extends Component {
  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}

export default EasySpeak;
