import React from "react-native";
import SpeakEasy from "../components/SpeakEasy"

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

  componentWillReceiveProps(nextProps) {
    if (this.props.speakEasies !== nextProps.speakEasies) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(nextProps.speakEasies)
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={ (row) => <SpeakEasy speakEasy={row} /> }
          style={styles.listView}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  speakEasyContainer: {
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#F5FCFF',
  },
  listView: {
    paddingTop: 20,
    flex: 1
  },
  name: {
    textAlign: 'center',
    fontSize: 20
  },
});

export default SpeakEasiesContainer
