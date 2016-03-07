import React from "react-native";
import styles from "../styles/components/SpeakEasy";
import Swiper from "react-native-swiper";

const {
  Component,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
} = React;

class SpeakEasy extends Component {
  renderImages(images) {
    return images.map((image) => {
      return <Image key={image} source={{ uri: image }} style={styles.image} />
    })
  }

  render() {
    const { name, tags, description, coverImageUrl } = this.props.speakEasy
    const tagList = tags.join(', ')
    const images = [coverImageUrl, coverImageUrl, coverImageUrl, coverImageUrl]

    return (
      <View style={styles.view}>
        <Swiper height={240} paginationStyle={{ bottom: 20 }}>
          {this.renderImages(images)}
        </Swiper>
        <Text style={styles.description}>{description}</Text>
      </View>
    );
  }
}

export default SpeakEasy
