import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Weapon from "./Weapon";

const player = ({ label, loading, weapon, score }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.score}>{score}k</Text>
      <View>
        <Weapon type={weapon} loading={loading} />
      </View>
    </View>
  );
};

export default player;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  //.player .label
  label: {
    textAlign: "center",
    marginTop: 3,
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 5
  },
  //.player .score
  score: {
    backgroundColor: "#ff2e4c",
    textAlign: "center",
    borderRadius: 5,
    color: "#ffffff",
    minWidth: 60,
    padding: 10,
    margin: 10,
    fontSize: 20,
    fontWeight: "400"
  }
});
