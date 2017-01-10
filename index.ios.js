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
import Button from './src/components/common/Button'
import LoginForm from './src/components/LoginForm'

export default class hunt extends Component {
  state = { loggedIn: false };


  componentWillMount(){
    firebase.initializeApp({
    apiKey: 'AIzaSyDZrPj54Bk9o1h47dwAijBTKZjBWYt3At0',
    authDomain: 'hunt-cec80.firebaseapp.com',
    databaseURL: 'https://hunt-cec80.firebaseio.com',
    storageBucket: 'hunt-cec80.appspot.com',
    messagingSenderId: '348722860624'
    });

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      this.setState({ loggedIn: true });
    } else {
      this.setState({ loggedIn: false });
    }
  });
}

  renderContent(){
    if (this.state.loggedIn) {
      return (
      <Card>
        <CardSection>
          <Button> Log Out </Button>
        </CardSection>

        <CardSection>
          <Button> Make a New Hunt </Button>
        </CardSection>

        <CardSection>
          <Button> Join a Hunt </Button>
        </CardSection>
      </Card>
      )
    }

    return <LoginForm/>
  }

  render() {
    console.log('rendering something...')
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
           Snapenger Hunt!
        </Text>

        {this.renderContent()}

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
    fontSize: 45,
    textAlign: 'center',
    margin: 10,
    paddingTop: 10
  },
});

AppRegistry.registerComponent('hunt', () => hunt);
