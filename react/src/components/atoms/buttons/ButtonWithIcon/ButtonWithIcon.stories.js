import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, array, select, boolean } from '@storybook/addon-knobs/react';

import ButtonWithIcon from '.';
import buttonWithIconReadme from './ButtonWithIcon.md';
import buttonWithIconOptions from './ButtonWithIcon.knob.options';

import SvgSearch from '../../icons/SvgSearch';
import SvgChevron from '../../icons/SvgChevron';

const icons = {
  chevron: <SvgChevron />,
  search: <SvgSearch />
};

storiesOf('atoms/buttons', module)
  .addDecorator(withKnobs)
  .add(
    'ButtonWithIcon',
    withInfo(`<div>${buttonWithIconReadme}</div>`)(() => {
      const props = {
        onClick: action('ButtonWithIcon clicked'),
        text: text('ButtonWithIcon.text', 'Button With Icon'),
        classes: array('ButtonWithIcon.classes', []),
        icon: select('ButtonWithIcon.icon', Object.keys(icons), 'chevron'),
        iconSize: select('ButtonWithIcon.iconSize', buttonWithIconOptions.size),
        iconColor: select('ButtonWithIcon.iconColor', buttonWithIconOptions.color),
        canExpand: boolean('ButtonWithIcon.canExpand', true),
        expanded: boolean('ButtonWithIcon.expanded', true),
        capitalized: boolean('ButtonWithIcon.capitalized', true)
      };

      // Set the icon prop to the actual element based on knob selection.
      props.icon = icons[props.icon];

      return(
        <ButtonWithIcon {...props} />
      );
    })
  );
