import React from "react-native";
import styles from "../styles/components/SpeakEasyListItem";
import LinearGradient from "react-native-linear-gradient";

const {
  Component,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
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
      <View style={styles.view}>
        <TouchableOpacity style={styles.component} onPress={this.handlePress.bind(this)}>
          <Image source={{ uri: speakEasy.coverImageUrl}} style={styles.image} />
          <LinearGradient
            start={[0.0, 0.25]} end={[0.5, 1.0]}
            colors={['black', 'black', 'transparent']}
            style={styles.linearGradient}
          />
          <Text style={styles.name}>{speakEasy.name}</Text>
          <Text style={styles.description}>{speakEasy.description}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default SpeakEasyListItem;
