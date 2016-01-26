import React from "react-native";
import styles from "../styles/components/ActiveSpeakEasy";

const {
  Component,
  View,
  Text,
  Image,
} = React;

class ActiveSpeakEasy extends Component {
  render() {
    const { speakEasy } = this.props;

    return (
      <View style={styles.view}>
        <Image
          source={{ uri: speakEasy.cover_image_url }}
          style={styles.image}
        />
        <View style={styles.text}>
          <Text style={styles.name}>{speakEasy.name}</Text>
          <Text style={styles.description}>{speakEasy.description}</Text>
        </View>
      </View>
    )
  }
}

export default ActiveSpeakEasy;
