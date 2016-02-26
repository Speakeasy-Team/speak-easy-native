import React from "react-native";
import ExNavigator from "@exponent/react-native-navigator";

const { Text, TouchableOpacity, Component } = React;

class NavButton extends Component {
  handlePress() {
    const { onPress } = this.props;

    onPress();
  }

  render() {
    const { text } = this.props;

    return (
      <TouchableOpacity
        onPress={() => this.handlePress()}
        touchRetentionOffset={ExNavigator.Styles.barButtonTouchRetentionOffset}
        style={ExNavigator.Styles.barRightButton}
      >
        <Text style={ExNavigator.Styles.barRightButtonText}>{text}</Text>
      </TouchableOpacity>
    )
  };
}

export default NavButton
