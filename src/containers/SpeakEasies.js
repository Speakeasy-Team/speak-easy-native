import React from "react-native";

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

  renderSpeakEasy(speakEasy) {
    return (
      <View style={styles.speakEasyContainer}>
        <Text style={styles.name}>{speakEasy.name}</Text>
      </View>
    );
  }

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
          renderRow={this.renderSpeakEasy}
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
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  listView: {
    paddingTop: 20,
  },
  name: {
    textAlign: 'center',
    fontSize: 20
  },
});

export default SpeakEasiesContainer
