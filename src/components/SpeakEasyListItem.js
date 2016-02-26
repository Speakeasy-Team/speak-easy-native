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
  handlePress() {
    const { onPress, speakEasy } = this.props;

    onPress(speakEasy);
  }

  render() {
    const { speakEasy, onPress } = this.props;
    const tags = speakEasy.tags.join(', ');

    return (
      <TouchableOpacity style={styles.component} onPress={this.handlePress.bind(this)}>
        <Text style={styles.name}>{speakEasy.name}</Text>
        <Text style={styles.tags}>{tags}</Text>
      </TouchableOpacity>
    )
  }
}

export default SpeakEasyListItem;
