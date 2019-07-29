import React from "react";
import { StyleSheet, Text, View } from "react-native";

const header = props => {
  return (
    <View>
      <Text style={styles.title}>Rock - Paper - Scissors</Text>
      <Text style={styles.title}>React Native Week 3!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    fontSize: 20,
    textAlign: "center",
    color: "white"
  }
});

export default header;
