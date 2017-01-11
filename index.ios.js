//index.ios.js
import firebase from 'firebase';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  CameraRoll,
  Image,
  ScrollView
} from 'react-native';

import DirectiveList from './src/components/DirectiveList';
import Button from './src/components/common/Button';
import LoginForm from './src/components/LoginForm';
import Card from './src/components/common/Card';
import CardSection from './src/components/common/CardSection';
import Spinner from './src/components/common/Spinner';

export default class hunt extends Component {
  state = { loggedIn: null, images: [] }; //are you logged in?

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

  componentDidMount() {
    const fetchParams = {
      first: 25,
    };
    CameraRoll.getPhotos(fetchParams, this.storeImages, this.logImageError);
  }

  storeImages(data) {
    const assets = data.edges;
    const images = assets.map((asset) => asset.node.image);
    this.setState({
      images: images,
    });
  }

  logImageError(err) {
    console.log(err);
  }

  renderContent(){
    switch (this.state.loggedIn) {
      //if the user is logged in
      case true:
        return (
        <View>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>

            <Button> Make a New Hunt </Button>

            <Button> Join a Hunt </Button>
        </View>
      );
      //if the user is not logged in
      case false:
        return <LoginForm/>;
      //if we don't know yet whether the user is logged in or not
      default:
        return <Spinner/>;
    }
  }

  render() {
    console.log('rendering something...')
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
           Snapenger Hunt!
        </Text>

        {this.renderContent()}

        <ScrollView style={styles.imageContainer}>
        <View style={styles.imageGrid}>
          { this.state.images.map((image) => <Image style={styles.image} source={{ uri: image.uri }} />) }
        </View>
      </ScrollView>

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
  imageContainer: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  imageGrid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
  },
});

AppRegistry.registerComponent('hunt', () => hunt);
