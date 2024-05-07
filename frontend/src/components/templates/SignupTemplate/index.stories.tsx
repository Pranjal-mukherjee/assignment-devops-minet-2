import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import SignupTemplate from '.';
import SignupPage from '../../../../public/assets/images/SignupPage.svg';
import { theme } from '../../../theme';
import { Grid } from '@mui/material';

export default {
  title: 'Templates/SignupTemplate',
  component: SignupTemplate
} as Meta;

const Template: StoryFn<typeof SignupTemplate> = (args) => <SignupTemplate {...args} />;

export const Default = Template.bind({});
Default.args = {
  img: SignupPage,
  body: <Grid width="100%" height="100%" bgcolor={theme.palette.primary[500]}></Grid>,
};