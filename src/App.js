/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import MoreInfoScreen from "./MoreInfoScreen";
import dayCalc from './dayCalc';

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};

export class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Bienvenido"
  };

  constructor(props) {
    super(props);
    const result = dayCalc();
    this.state = { ...result };
  }
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Bienvenido a tu app sobre el Aguinaldo
        </Text>
        <Text style={styles.instructions}>Faltan</Text>
        <Text style={styles.days}>
          {this.state.days} días para el aguinaldo
        </Text>
        <Text style={styles.instructions}>
        El ultimo fue el {this.state.prev}
        </Text>
        <Button title="Saber más" color='red' onPress={() => navigate("MoreInfo")} />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  MoreInfo: { screen: MoreInfoScreen }
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  days: {
    fontSize: 40,
    color: "#0022FF",
    textAlign: "center",
    marginBottom: 40
  },
  button: {
    padding: 20,
    backgroundColor: '#FF0000'
  }
});
