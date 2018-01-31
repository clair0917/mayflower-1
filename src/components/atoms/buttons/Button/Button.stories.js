import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs/react';

<<<<<<< Updated upstream:src/components/atoms/buttons/Button/Button.stories.js
import Button from './index';
=======
import Button from './Button';
import buttonOptions from './Button.knobs.options';
>>>>>>> Stashed changes:src/components/atoms/buttons/Button.stories.js

storiesOf('Atoms/Buttons/Button', module).addDecorator(withKnobs)
  .add(
    'Button',
    withInfo()(() => {
      // options imported from ./Button.knobs.options
      const theme = select('Button theme', buttonOptions.theme);
      const type = select('Button type', buttonOptions.type);
      const size = select('Button size', buttonOptions.size);
      const defaultOutline = false;
      const outline = boolean('Button outline', defaultOutline);
      const info = text('Button info', 'this will be the tooltip text on hover');
      const buttonText = text('Button text', 'button');
      const href = text('Button href', '');

      return(
        <Button
          theme={theme}
          type={type}
          size={size}
          info={info}
          text={buttonText}
          href={href}
          outline={outline}
        />
      );
    })
  );
