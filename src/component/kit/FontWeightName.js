import React from 'react';
import {Text} from 'react-sketchapp';

export const FontWeightName = ({weight}) => {
  switch (parseInt(weight, 10)) {
  case 100: return <Text>Thin</Text>;
  case 200: return <Text>Extra Light</Text>;
  case 300: return <Text>Light</Text>;
  case 400: return <Text>Normal</Text>;
  case 500: return <Text>Medium</Text>;
  case 600: return <Text>Semi Bold</Text>;
  case 700: return <Text>Bold</Text>;
  case 800: return <Text>Extra Bold</Text>;
  case 900: return <Text>Black</Text>;
  default: return null;
  }
};

export default FontWeightName;
