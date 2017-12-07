import React from 'react';
import {render, TextStyles} from 'react-sketchapp';

import * as config from '/config/style.config';

import Provider from '/component/util/Provider';
import Root from '/component/Root';

export default function(context) {
  if (!context.document) return;

  TextStyles.create({
    context: context,
    clearExistingStyles: true,
  }, Object.keys(config.textStyles).reduce((textStyles, name, i) => {
    const index = `0${i + 1}`.slice(-2);

    textStyles[`🖥 ${index} - ${name}`] = config.textStyles[name].desktop;
    textStyles[`📱 ${index} - ${name}`] = config.textStyles[name].mobile;

    return textStyles;
  }, {}));

  render(<Provider config={config}><Root/></Provider>);

  context.document.showMessage('Rendered');
}
