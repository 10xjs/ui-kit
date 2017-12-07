import React from 'react';
import {View} from 'react-sketchapp';

import {connect} from '/component/util/Provider';

import StyledText from '/component/base/StyledText';

const Section = ({config, name, children}) => (
  <React.Fragment>
    <View
      name='Heading'
      style={{
        backgroundColor: config.colors.Green,
        padding: 40,
      }}
    >
      <StyledText style='DisplayXLarge' color='White'>
        {name}
      </StyledText>
    </View>
    {children}
  </React.Fragment>
);

export default connect(Section);
