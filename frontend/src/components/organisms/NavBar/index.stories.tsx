import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { NavBar } from '.';

export default {
  title: 'organisms/NavBar',
  component: NavBar
} as Meta;

const Template: StoryFn = (args: any) => <NavBar {...args} />;

export const Default = Template.bind({});
