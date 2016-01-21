import React, { Component } from "react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Root from "./containers/Root";

const reducer = () => {
}

const store = createStore(reducer);

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
