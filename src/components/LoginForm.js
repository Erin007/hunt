//LoginForm.js

import React, { Component } from 'react';
import Button from './common/Button';
import Card from './common/Card';
import CardSection from './common/CardSection';
import Input from './common/Input';

class LoginForm extends Component {

  state = { text: ''}

  render(){
    return (
      <Card>
        <CardSection>
          <Input
            value = {this.state.text}
            onChangeText = {text => this.setState({ text })}/>

        </CardSection>

        <CardSection>
          <Input
            value = {this.state.text}
            onChangeText = {text => this.setState({ text })}/>
        </CardSection>

        <CardSection>
          <Button> Log in! </Button>
        </CardSection>
      </Card>
    )
  }
};

export default LoginForm;
