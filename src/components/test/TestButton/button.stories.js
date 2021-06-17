import React from 'react';
import { Container } from '../../Container/Container';
import '../../../styles/index.css';
import { action } from '@storybook/addon-actions';

import { TestButton } from '.';

export default {
  title: 'test/TestButton',
  argTypes: {
    title: {
      control: 'text',
    },
    onClick: {
      action: 'onClick',
    },
  },
  decorators: [(story) => <Container>{story()}</Container>],
};

const Template = (args) => {
  return (
        <TestButton
          {...args}
        />
  );
};

export const Default = Template.bind({});

Default.args = {
  title: "test",
  onClick: action('onClick'),
};
