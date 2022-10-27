import React from "react";
import {StyleSheet, Text, View, StatusBar, SafeAreaView, Dimensions} from "react-native";

import Row from "./components/Row";
import Button from "./components/Button";
import calculator, { initialState } from "./util/calculator";
import Portrait from "./components/Portrait"

export default class App extends React.Component {

    state = initialState;

    handleTap = (type, value) => {
      this.setState(state => calculator(type, value, state));
    const isPortrait = () => {
      const dim = Dimensions.get('screen');
      return dim.height >= dim.width;
    };

    this.state = {
      orientation: isPortrait() ? 'portrait' : 'landscape'
    };

    // Event Listener for orientation changes
    Dimensions.addEventListener('change', () => {
      this.setState({
        orientation: isPortrait() ? 'portrait' : 'landscape'
      });
    });
  };

  render() {
    if (this.state.orientation === 'portrait') {
      return (
          <Portrait state={this.state}></Portrait>
      );
    } else {
      return (
          null
      );
    };
  }
}

