import React from 'react';
import {Text} from 'react-sketchapp';

import {connect} from '/component/util/Provider';

const StyledText = ({config, style, color, breakpoint, children}) => (
  <Text
    name={`${style} - ${breakpoint}`}
    style={{
      ...style ? config.textStyles[style][breakpoint] : null,
      color: color ? config.colors[color] : undefined,
    }}
  >
    {children}
  </Text>
);

export default connect(StyledText);
