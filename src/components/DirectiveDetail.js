//DirectiveDetail.js

import React from 'react';
import { View, Text } from 'react-native';
import DirectiveCard from './DirectiveCard';
import DirectiveCardSection from './DirectiveCardSection'

const DirectiveDetail = (props) => {
  return (
    <DirectiveCard>
      <DirectiveCardSection>
        <Text>{ props.directive.name }</Text>
      </DirectiveCardSection>
    </DirectiveCard>
  )
};

export default DirectiveDetail;
