'use strict';

import React, { AppRegistry, Component, } from 'react-native';
import HomeScreen from './src/components/HomeScreen';

class easy_speak extends Component {
  render() {
    return (
      <HomeScreen />
    );
  }
}


AppRegistry.registerComponent('easy_speak', () => easy_speak);
