import React from "react-native";
import MapView from "react-native-maps";

const { View, TouchableHighlight, Text } = React;

class SpeakEasyCallout extends React.Component {
  handlePress() {
    const { onPress } = this.props;
    onPress();
  }

  render() {
    const { name, description } = this.props;

    return(
      <View>
        <TouchableHighlight onPress={this.handlePress.bind(this)}>
          <View>
            <Text>{name}</Text>
            <Text>{description}</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

export default SpeakEasyCallout
