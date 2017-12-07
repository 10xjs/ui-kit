import React from 'react';
import {Page, Artboard} from 'react-sketchapp';

import {connect} from '/component/util/Provider';

import Section from '/component/kit/Section';
import TextStyleTable from '/component/kit/TextStyleTable';
import ColorGrid from '/component/kit/ColorGrid';

const gutter = 40;

const UIKitPage = ({config}) => {
  let left = 0;
  const getStyle = (width) => {
    const style = {
      width,
      left,
      top: 0,
      minHeight: 1536,
      position: 'absolute',
      backgroundColor: config.colors.Merangue,
    };

    left += width + gutter;
    return style;
  };

  return (
    <Page name='UI Kit' style={{flexDirection: 'row'}}>

      <Artboard name='🎨 Colors' style={getStyle(1024)}>
        <Section name='Colors'>
          <ColorGrid/>
        </Section>
      </Artboard>

      <Artboard name='🖥 Text Styles - Desktop' style={getStyle(1024)}>
        <Section name='Text Styles - Desktop'>
          <TextStyleTable breakpoint='desktop'/>
        </Section>
      </Artboard>

      <Artboard name='📱 Text Styles - Mobile' style={getStyle(1024)}>
        <Section name='Text Styles - Mobile'>
          <TextStyleTable breakpoint='mobile'/>
        </Section>
      </Artboard>

    </Page>
  );
};

export default connect(UIKitPage);
