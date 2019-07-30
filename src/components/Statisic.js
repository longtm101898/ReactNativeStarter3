import React from "react";
import { View, Text, Modal, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Button from "./Button";

class Statisic extends React.Component {
  state = { modalOpen: false };
  handleModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen
    });
  };
  renderGameStatistic = gameStatistic => {
    var player1Stas = gameStatistic.player1.score;
    return (
      <View>
        <Text>player1Stas: {player1Stas}</Text>
      </View>
    );
  };
  render() {
    const { gameStatistic } = this.props;
    return (
      <View
        style={{ justifyContent: "center", alignItems: "center", margin: 5 }}
      >
        <Button
          onPress={this.handleModal}
          text="Game history"
          styleName={styles.btnOpenModalStyle}
        />
        <Modal visible={this.state.modalOpen} animationType="fade">
          <View style={{ flex: 1 }}>
            <View style={styles.modalHeader}>
              <Ionicons
                name="ios-arrow-back"
                size={24}
                color="black"
                onPress={this.handleModal}
              />
            </View>
            <View style={{ flex: 0.95 }}>
              {this.renderGameStatistic(gameStatistic)}
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

export default Statisic;

const styles = StyleSheet.create({
  btnOpenModalStyle: {
    backgroundColor: "grey",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 5,
    paddingRight: 5,
    borderBottomColor: "#7a222f"
  },
  modalHeader: {
    flex: 0.05,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    margin: 5
  }
});
