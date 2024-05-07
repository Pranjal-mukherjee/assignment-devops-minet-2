import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { CryptoDetails } from '.';

export default {
  title: 'molecules/CryptoDetails',
  component: CryptoDetails
} as Meta;

const Template: StoryFn = (args: any) => <CryptoDetails {...args} />;

export const Default = Template.bind({});
