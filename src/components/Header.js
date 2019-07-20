import React from "react";
import { StyleSheet, Text, View } from "react-native";

const header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Rock - Paper - Scissors</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 150,
    backgroundColor: "#1e1548",
    padding: 20
  },
  title: {
    marginTop: 20,
    fontSize: 20,
    textAlign: "center",
    color: "white"
  }
});

export default header;
