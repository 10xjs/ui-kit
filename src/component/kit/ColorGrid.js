import React from 'react';
import {View} from 'react-sketchapp';
import chroma from 'chroma-js';

import {connect} from '/component/util/Provider';

import StyledText from '/component/base/StyledText';

const ColorGrid = ({config}) => (
  <React.Fragment>
    <View name='Palette Name' style={{margin: 64, marginBottom: 32}}>
      <StyledText style='DisplayMedium' color='Charcoal'>
        Base Colors
      </StyledText>
    </View>
    <View
      name='Palette'
      style={{
        marginLeft: 64,
        marginRight: 32,
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}
    >
      {Object.keys(config.colors).map((color) => {
        const hex = config.colors[color];
        const border = chroma.contrast(hex, '#ffffff') < 1.2;

        return (
          <View
            name='Swatch'
            key={color}
            style={{marginRight: 32, marginBottom: 32}}
          >
            <View
              style={{
                backgroundColor: config.colors[color],
                width: 120,
                height: 120,
                borderRadius: 8,
                borderWidth: border ? 1 : 0,
                borderColor: chroma(hex).darken().hex(),
                marginBottom: 8,
              }}
            />
            <StyledText style='Heading' color='Charcoal'>
              {color}
            </StyledText>
            <StyledText style='Body' color='Graphite'>
              {hex}
            </StyledText>
          </View>
        );
      })}
    </View>
  </React.Fragment>
);

export default connect(ColorGrid);
