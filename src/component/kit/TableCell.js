import React from 'react';
import {View} from 'react-sketchapp';

const TableCell = ({children, width = 0, heading = false}) => (
  <View
    name='Cell'
    style={{
      width: width,
      flexGrow: width === 0 ? 1 : 0,
      paddingTop: heading ? 0 : 32,
      paddingBottom: 31,
      justifyContent: 'flex-end',
    }}
  >
    {children}
  </View>
);

export default TableCell;
