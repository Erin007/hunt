//LoginForm.js

import React, { Component } from 'react';
import Button from './common/Button';
import Card from './common/Card';
import CardSection from './common/CardSection';
import Input from './common/Input';
import firebase from 'firebase';
import { Text } from 'react-native';

class LoginForm extends Component {

  state = { email: '', password: '', error: ''}

  onButtonPress(){
    const { email, password } = this.state;

    firebase.auth().signInWithEmailAndPassword(email, password)
      //if signin doesn't work
      .catch(() =>{
        //try to make an account for the user
        firebase.auth().createUserWithEmailAndPassword(email,password)
          .catch(() => {
            this.setState({ error: 'Authenication Failed'})
          });
      });
  }

  render(){
    return (
      <Card>
        <CardSection>
          <Input
            label = "Email:"
            placeholder = "user@email.com"
            value = {this.state.email}
            onChangeText = {email => this.setState({ email })}/>
        </CardSection>

        <CardSection>
          <Input
            label = "Password:"
            placeholder = "password"
            secureTextEntry
            value = {this.state.password}
            onChangeText = {password => this.setState({ password })}/>
        </CardSection>

        <Text style= {styles.errorTextStyle}>
          { this.state.error }
        </Text>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}> Log in! </Button>
        </CardSection>
      </Card>
    )
  }
};

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;
