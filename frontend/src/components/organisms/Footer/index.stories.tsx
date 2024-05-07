import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Footer } from '.';

export default {
  title: 'organisms/Footer',
  component: Footer
} as Meta;

const Template: StoryFn = (args: any) => <Footer {...args} />;

export const Default = Template.bind({});
