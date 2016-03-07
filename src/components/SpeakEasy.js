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
      <ScrollView style={styles.view}>
        <Swiper height={240} paginationStyle={{ bottom: 20 }}>
          {this.renderImages(images)}
        </Swiper>
        <View style={styles.info}>
          <Text style={styles.header}>{name}</Text>
          <Text>123 hello world ln</Text>
          <Text>(123) 456-7890</Text>
          <Text>Rating: 4.9</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.header}>Quick Tips</Text>
          <Text>Easiest to get in between 6:00 - 7:00</Text>
          <Text>Entrance is the black door with the dimly lit light</Text>
          <Text>Mostly quiet on the weeknights. Can get a bit rowdy on the weekends</Text>
        </View>
        <View style={[styles.info, styles.lastItem]}>
          <Text style={styles.header}>What we think</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </View>
      </ScrollView>
    );
  }
}

export default SpeakEasy
