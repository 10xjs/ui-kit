import React from 'react';

import {connect} from '/component/util/Provider';

import Table from '/component/kit/Table';
import TableRow from '/component/kit/TableRow';
import TableCell from '/component/kit/TableCell';
import FontWeightName from '/component/kit/FontWeightName';

import StyledText from '/component/base/StyledText';

const TextStyleTable = ({config, breakpoint}) => (
  <Table>
    <TableRow heading>
      <TableCell>
        <StyledText style='Heading' color='Charcoal'>
          Typestyle
        </StyledText>
      </TableCell>
      <TableCell width={144}>
        <StyledText style='Heading' color='Charcoal'>
          Weight
        </StyledText>
      </TableCell>
      <TableCell width={136}>
        <StyledText style='Heading' color='Charcoal'>
          Size
        </StyledText>
      </TableCell>
      <TableCell width={126}>
        <StyledText style='Heading' color='Charcoal'>
          Line
        </StyledText>
      </TableCell>
      <TableCell width={80}>
        <StyledText style='Heading' color='Charcoal'>
          Character
        </StyledText>
      </TableCell>
    </TableRow>

    {Object.keys(config.textStyles).map((style) => (
      <TableRow key={style}>
        <TableCell>
          <StyledText breakpoint={breakpoint} style={style}>
            {style}
          </StyledText>
        </TableCell>
        <TableCell>
          <StyledText style='Body' color='Charcoal'>
            <FontWeightName
              weight={config.textStyles[style].desktop.fontWeight}
            />
          </StyledText>
        </TableCell>
        <TableCell>
          <StyledText style='Body' color='Charcoal'>
            {config.textStyles[style].desktop.fontSize}px
          </StyledText>
        </TableCell>
        <TableCell>
          <StyledText style='Body' color='Charcoal'>
            {config.textStyles[style].desktop.lineHeight}px
          </StyledText>
        </TableCell>
        <TableCell>
          <StyledText style='Body' color='Charcoal'>
            {config.textStyles[style].desktop.letterSpacing
              ? `${config.textStyles[style].desktop.letterSpacing}px`
              : 'auto'
            }
          </StyledText>
        </TableCell>
      </TableRow>
    ))}
  </Table>
);

export default connect(TextStyleTable);
