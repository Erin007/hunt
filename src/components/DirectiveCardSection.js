//DirectiveCardSection.js

import React from 'react';
import { View } from 'react-native';
import DirectiveCard from './DirectiveCard';

const DirectiveCardSection = (props) => {
  return (
  <View style={styles.containerStyle}>
    { props.children }
  </View>
  );
};

const styles = {
  constainerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
  }
};

export default DirectiveCardSection;
