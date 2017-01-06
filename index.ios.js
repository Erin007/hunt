//index.ios.js

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import DirectiveList from './src/components/DirectiveList'

export default class hunt extends Component {
  render() {
    console.log('rendering something...')
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
           Scavenger Hunt Capstone!
        </Text>
        <DirectiveList/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

AppRegistry.registerComponent('hunt', () => hunt);
