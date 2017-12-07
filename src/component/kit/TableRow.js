import React from 'react';
import {View} from 'react-sketchapp';

const TableRow = ({name = 'Row', children, heading = false}) => (
  <View
    name={name}
    style={{
      flexDirection: 'row',
      borderBottomWidth: heading ? 0 : 1,
      borderBottomColor: heading ? undefined : '#D8D8D8',
    }}
  >
    {React.Children.toArray(children).map((cell) =>
      React.cloneElement(cell, {heading})
    )}
  </View>
);

export default TableRow;
