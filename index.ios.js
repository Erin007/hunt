//index.ios.js
import firebase from 'firebase';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import DirectiveList from './src/components/DirectiveList'

export default class hunt extends Component {
  
  componentWillMount(){
    firebase.initializeApp({
    apiKey: 'AIzaSyDZrPj54Bk9o1h47dwAijBTKZjBWYt3At0',
    authDomain: 'hunt-cec80.firebaseapp.com',
    databaseURL: 'https://hunt-cec80.firebaseio.com',
    storageBucket: 'hunt-cec80.appspot.com',
    messagingSenderId: '348722860624'
    })
  }

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
