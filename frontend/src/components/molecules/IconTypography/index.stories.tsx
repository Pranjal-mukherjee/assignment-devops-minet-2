import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { IconTypography } from '.';
import google from '../../../../public/assets/images/google.svg';
import facebook from '../../../../public/assets/images/stripe.svg';
import microsoft from '../../../../public/assets/images/xero.svg';
import { theme } from '../../../theme';
import emptyTransaction from '../../../../public/assets/images/emptyTransaction.svg';

export default {
  title: 'molecules/IconTypography',
  component: IconTypography
} as Meta;

const Template: StoryFn = (args: any) => <IconTypography {...args} />;

export const Google = Template.bind({});
Google.args = {
  src: google,
  text: 'Google',
  fontColor: theme.palette.textColor.medEmp,
  isCardStyled: true
};

export const Facebook = Template.bind({});
Facebook.args = {
  src: facebook,
  text: 'Facebook',
  fontColor: theme.palette.textColor.medEmp,
  isCardStyled: true
};

export const Microsoft = Template.bind({});
Microsoft.args = {
  src: microsoft,
  text: 'Microsoft',
  fontColor: theme.palette.textColor.medEmp,
  isCardStyled: true
};

export const EmptyTransaction = Template.bind({});
EmptyTransaction.args = {
  src: emptyTransaction,
  text: 'You don’t own any crypto. Send yourself some crypto to get started.',
  fontColor: theme.palette.textColor.medEmp,
  variant: 'caption2',
  isCardStyled: false
};
