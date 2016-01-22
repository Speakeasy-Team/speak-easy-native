import React, { Component } from "react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Root from "./containers/Root";
import configureStore from './store/configureStore';

const store = configureStore();

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
