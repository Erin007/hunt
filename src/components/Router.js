//Router.js

import React from 'react';
import {Scene, Router} from 'react-native-router-flux';
import LoginForm from './LoginForm'

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="login"
            component={LoginForm} title=""/>
    </Router>
  )
};

export default RouterComponent;
