import React from "react-native";
import StarRating from "react-native-star-rating";
import styles from "../styles/components/rating";

const {
  Component,
  View,
} = React;

class Rating extends Component {
  render() {
    const { rating } = this.props;
    return (
      <View style={styles.container}>
        <StarRating
          disabled={true}
          maxStars={5}
          rating={rating}
          selectedStar={(rating) => null}
          emptyStar={'ios-star-outline'}
          fullStar={'ios-star'}
          halfStar={'ios-star-half'}
          iconSet={'Ionicons'}
          starSize={20}
        />
      </View>
    );
  };
}

export default Rating;
