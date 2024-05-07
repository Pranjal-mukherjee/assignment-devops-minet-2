import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import MyportfolioGraph, { MyportfolioGraphProps } from './index';
import { DashboardData } from '../../../utils/constants';

export default {
  title: 'organisms/MyportfolioGraph',
  component: MyportfolioGraph,
} as Meta;

const Template: StoryFn<MyportfolioGraphProps> = (args) => <MyportfolioGraph {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Total Investment',
  value: '$0.00',
  changePercentage1: '+0.0%',
};

export const Secondary = Template.bind({});
Secondary.args = {
  title: 'Total Investment',
  value: '$11,900,204',
  changePercentage1: '-1.2%',
  newUser: true,
  data: DashboardData
};