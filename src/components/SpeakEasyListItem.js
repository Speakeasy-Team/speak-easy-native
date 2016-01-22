import React from "react-native";

const {
  Component,
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} = React;

class SpeakEasyListItem extends Component {
  render() {
    const { speakEasy, onPress } = this.props;
    const tags = speakEasy.tags.join(', ');

    return (
      <TouchableOpacity style={styles.component} onPress={onPress}>
        <Text style={styles.name}>{speakEasy.name}</Text>
        <Text style={styles.tags}>{tags}</Text>
      </TouchableOpacity>
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

export default SpeakEasyListItem
