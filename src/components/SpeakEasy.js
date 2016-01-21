import React from "react-native";

const {
  Component,
  View,
  Text,
  StyleSheet,
} = React;

class SpeakEasy extends Component {
  render() {
    const { speakEasy } = this.props
    const tags = speakEasy.tags.join(', ')

    return (
      <View style={styles.component}>
        <Text style={styles.name}>{speakEasy.name}</Text>
        <Text style={styles.tags}>{tags}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  component: {
    borderWidth: 1,
    flex: 1,
    padding: 20,
  },
  name: {
    textAlign: 'center',
    fontSize: 20
  },
  tags: {
    textAlign: 'center',
    fontSize: 15
  }
});

export default SpeakEasy
