//LoginForm.js

import React, { Component } from 'react';
import Button from './common/Button';
import Card from './common/Card';
import CardSection from './common/CardSection';
import Input from './common/Input';

class LoginForm extends Component {

  state = { email: ''}

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
          <Button> Log in! </Button>
        </CardSection>
      </Card>
    )
  }
};

export default LoginForm;
