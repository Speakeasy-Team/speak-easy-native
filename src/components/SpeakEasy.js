import React from "react-native";
import styles from "../styles/components/SpeakEasy"

const {
  Component,
  View,
  Text,
  StyleSheet,
} = React;

class SpeakEasy extends Component {
  render() {
    const { name, tags, description } = this.props.speakEasy
    const tagList = tags.join(', ')

    return (
      <View style={styles.view}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.tags}>{tagList}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    );
  }
}

export default SpeakEasy
