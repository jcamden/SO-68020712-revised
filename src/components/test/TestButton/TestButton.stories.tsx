import { Meta, Story } from '@storybook/react';
import { TestButton, TestButtonProps } from './TestButton';

import { Container } from '../../Container/Container';
import React from 'react';

export default {
  title: 'Example/TestButton2',
  component: TestButton,
  decorators: [(story: any) => <Container>{story()}</Container>],
} as Meta;

const Template: Story<TestButtonProps> = (args) => <TestButton {...args} />;

export const MeowTestButton = Template.bind({});
MeowTestButton.args = { title: 'meow' };

export const WoofTestButton = Template.bind({});
WoofTestButton.args = { title: 'woof' };
