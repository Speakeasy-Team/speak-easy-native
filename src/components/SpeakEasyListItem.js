import React from "react-native";
import styles from "../styles/components/SpeakEasyListItem";

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

export default SpeakEasyListItem
