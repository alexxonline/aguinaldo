import React from "react";
import { StyleSheet, Text, View } from "react-native";
class MoreInfoScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>El aguinaldo se debe pagar antes del 18 de diciembre</Text>
        <Text style={styles.instructions}>O sino antes del 30 de junio</Text>
      </View>
    );
  }
}

export default MoreInfoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
})