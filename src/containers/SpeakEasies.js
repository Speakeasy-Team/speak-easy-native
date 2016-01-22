import React from "react-native";
import SpeakEasyListItem from "../components/SpeakEasyListItem"
import { connect } from "react-redux"
import Router from "../Router"
import styles from "../styles/containers/SpeakEasies"

const {
  Component,
  View,
  Text,
  StyleSheet,
  ListView,
} = React;

class SpeakEasiesContainer extends Component {
  state = {
    dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
  };

  componentDidMount() {
    const { dispatch } = this.props;

    dispatch({ type: 'LOADED' });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.speakEasies !== nextProps.speakEasies) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(nextProps.speakEasies)
      });
    }
  }

  renderRow(row) {
    const { navigator } = this.props;
    const route = Router.getSpeakEasyRoute(row);

    return (
      <SpeakEasyListItem
        speakEasy={row}
        onPress={() => navigator.push(route)}
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
          style={styles.listView}
        />
      </View>
    );
  }
}

const select = (state) => {
  return {
    speakEasies: state.speakEasies || []
  }
}

export default connect(select)(SpeakEasiesContainer);
