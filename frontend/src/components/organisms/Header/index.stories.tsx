import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Header, { IHeaderProps } from './index';

export default {
  title: 'organisms/Header',
  component: Header,
} as Meta;

const Template: StoryFn<IHeaderProps> = (args) => <Header {...args} />;

export const Dashboard = Template.bind({});
Dashboard.args = {
  pageName: 'Dashboard',
  displayButtons:true
};

export const Checkout = Template.bind({});
Checkout.args = {
  pageName: 'Checkout',
};
