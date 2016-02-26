import React from "react-native";
import ExNavigator from "@exponent/react-native-navigator";

const { Text, TouchableHighlight, Component } = React;

class NavButton extends Component {
  handlePress() {
    const { navigator, route } = this.props
    navigator.push(route);
  }

  render() {
    const { text } = this.props
    return (
      <TouchableHighlight
        onPress={() => this.handlePress()}
        touchRetentionOffset={ExNavigator.Styles.barButtonTouchRetentionOffset}
        style={ExNavigator.Styles.barRightButton}
      >
        <Text style={ExNavigator.Styles.barRightButtonText}>{text}</Text>
      </TouchableHighlight>
    )
  };
}

export default NavButton
