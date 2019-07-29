import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import Header from "../components/Header";
import Player from "../components/Player";
import Controls from "../components/Controls";
import { weaponKeys, weapons } from "../constants/WEAPONS";

// import History from "../components/History/History";

// import classes from "./Game.css";

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player1: {
        label: "TML",
        weapon: null,
        score: 0
      },
      player2: {
        label: "COMP",
        weapon: null,
        score: 0
      }
    };
  }
  pickWeapon = weapon => {
    var randomWeapon = this.getRandomWeapon();
    this.setState(
      {
        player1: {
          ...this.state.player1,
          weapon
        },
        player2: {
          ...this.state.player2,
          weapon: randomWeapon
        }
      },
      () => {
        const { player1, player2 } = this.state;
        var winner = this.chooseWinner(player1.weapon, player2.weapon);
        // alert(winner);
      }
    );
  };

  getRandomWeapon = () => {
    return weaponKeys[(weaponKeys.length * Math.random()) << 0];
  };

  chooseWinner = (weapon1, weapon2) => {
    if (weapon1 === weapon2) {
      return "tie";
    }
    return weapons[weapon1].wins.some(wins => wins === weapon2)
      ? this.incrementPlayerScore(this.state.player1.label)
      : this.incrementPlayerScore(this.state.player2.label);
  };
  incrementPlayerScore = player => {
    const { player1, player2 } = this.state;
    this.setState({
      player1: {
        ...player1,
        ...(player1.label === player ? { score: player1.score + 1 } : {})
      },
      player2: {
        ...player2,
        ...(player2.label === player ? { score: player2.score + 1 } : {})
      }
    });
  };
  render() {
    const { player1, player2 } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Header />
        </View>
        <View style={styles.playerWrapper}>
          <Player
            label={player1.label}
            weapon={player1.weapon}
            score={player1.score}
            loading="true"
          />
          <Player
            label={player2.label}
            weapon={player2.weapon}
            score={player2.score}
            loading="false"
          />
        </View>
        <View style={styles.gameControl}>
          <Controls pickWeapon={this.pickWeapon} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flex: 0.3,
    backgroundColor: "blue"
  },
  playerWrapper: {
    flex: 0.5,
    backgroundColor: "#a3fff0",
    flexDirection: "row",
    justifyContent: "center"
  },
  gameControl: {
    flex: 0.2
  }
});
