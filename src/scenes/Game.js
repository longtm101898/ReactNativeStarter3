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
      <View>
        <Header />
        <Text style={styles.title}>React Native Week 3!</Text>
        <ScrollView contentContainerStyle={styles.container}>
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
        </ScrollView>
        <Controls pickWeapon={this.pickWeapon} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    backgroundColor: "#ff2e4c",
    color: "#ffffff",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  },
  container: {
    display: "flex",
    backgroundColor: "#fcd77f",
    flexDirection: "row",
    justifyContent: "center"
  }
});
