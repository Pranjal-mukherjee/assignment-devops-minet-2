import { Meta, StoryFn } from '@storybook/react';
import DashboardTemplate from '.';
import React from 'react';
import { Grid } from '@mui/material';
import { theme } from '../../../theme';

const meta = {
  title: 'templates/Dashboard',
  component: DashboardTemplate
} satisfies Meta<typeof DashboardTemplate>;

export default meta;
const Template: StoryFn<typeof DashboardTemplate> = (args) => <DashboardTemplate {...args} />;

export const Dashboard = Template.bind({});
Dashboard.args = {
  leftComponent: <Grid width="80px" height="100%" bgcolor={theme.palette.primary[500]}></Grid>,
  middleComponent: <Grid width="100%" height="70vh" bgcolor={theme.palette.primary[700]}></Grid>,
  rightComponent: <Grid width="100%" height="70vh" bgcolor={theme.palette.primary[900]}></Grid>, 
  pageName: 'Dashboard',
  displayButtons: true
};
