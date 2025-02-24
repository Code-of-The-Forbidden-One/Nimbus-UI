import React from 'react';
import TestButton from './TestButton';

export default {
  title: 'Atoms/TestButton',
  component: TestButton,
};

const Template = (args) => <TestButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Click Me',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled',
  disabled: true,
};
