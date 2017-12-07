import React from 'react';
import {View} from 'react-sketchapp';

const Table = ({children, name = 'Table'}) => {
  const columnWidths = [];

  return (
    <View
      name={name}
      style={{flexDirection: 'column', margin: 64}}
    >
      {React.Children.toArray(children).map((row, rowIndex) =>
        React.cloneElement(
          row,
          row.props,
          React.Children.toArray(row.props.children).map((cell, cellIndex) => {
            if (rowIndex === 0) {
              columnWidths[cellIndex] = cell.props.width;
              return cell;
            }

            return React.cloneElement(cell, {width: columnWidths[cellIndex]});
          })
        )
      )}
    </View>
  );
};

export default Table;
