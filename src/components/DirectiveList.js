//DirectiveList.js

import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import DirectiveDetail from './DirectiveDetail';

class DirectiveList extends Component {

    state = { directives: [] }; //initial or empty state, property of this
    //this.state.albums would return an empty array

    componentWillMount (){
      console.log('component will mount in directive list')
      console.log('this.state.directives', this.state.directives)
      axios.get('https://treasure-chest-api.herokuapp.com/').then(function (response) {
        console.log(response.data.directives);
        state = { directives: response.data.directives }

        console.log('this.state.directives', this.state.directives)
      })
    }

    renderDirectives() {
      console.log('renderingDirectives() in DirectiveList')
      return this.state.directives
      // return this.state.directives.map(directive =>
      //   <DirectiveDetail key={ directive.name } directive = {directive} />);
    }

    render(){
      return (
        <View>
          {this.renderDirectives()}
        </View>
      );
    }
}

export default DirectiveList;
