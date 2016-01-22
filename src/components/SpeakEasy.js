import React from "react-native";

const {
  Component,
  View,
  Text,
  StyleSheet,
} = React;

class SpeakEasy extends Component {
  render() {
    const { name, tags, description } = this.props.speakEasy

    return (
      <View style={{ flex: 1 }}>
        <Text>{name}</Text>
        <Text>{tags}</Text>
        <Text>{description}</Text>
      </View>
    );
  }
}

export default SpeakEasy
