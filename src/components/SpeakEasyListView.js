import React from "react-native";
import { connect } from "react-redux";
import Router from "../Router";
import SpeakEasyListItem from "./SpeakEasyListItem";

const {
  Component,
  View,
  Text,
  ListView,
} = React;

class SpeakEasyListView extends Component {
  state = {
    dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
  };

  componentDidMount() {
    const { speakEasies } = this.props;

    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(speakEasies)
    });
  }

  onSpeakEasyPress(speakEasy) {
    const { onPress } = this.props;

    onPress(speakEasy);
  }

  renderRow(row) {
    const { navigator } = this.props;
    const route = Router.getSpeakEasyRoute(row);

    return (
      <SpeakEasyListItem
        speakEasy={row}
        onPress={this.onSpeakEasyPress.bind(this)}
      />
    );
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)}
      />
    )
  }
}

export default SpeakEasyListView;
