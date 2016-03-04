import React from "react-native";
import styles from "../styles/components/SpeakEasy"

const {
  Component,
  Image,
  StyleSheet,
  Text,
  View,
} = React;

class SpeakEasy extends Component {
  render() {
    const { name, tags, description, coverImageUrl } = this.props.speakEasy
    const tagList = tags.join(', ')

    return (
      <View style={styles.view}>
        <Text style={styles.name}>{name}</Text>
        <Image source={{ uri: coverImageUrl }} style={styles.image} />
        <Text style={styles.tags}>{tagList}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    );
  }
}

export default SpeakEasy
