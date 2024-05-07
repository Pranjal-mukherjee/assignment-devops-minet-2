import { StoryFn, Meta } from '@storybook/react';
import React from 'react';
import { DropDown } from '.';
import { theme } from '../../../theme';

export default {
  title: 'atoms/DropDown',
  component: DropDown
} as Meta<typeof DropDown>;

const Template: StoryFn<typeof DropDown> = (args: any) => <DropDown {...args} />;
const handleChange = () => {};

export const Language = Template.bind({});
Language.args = {
  onChange: handleChange,
  menuList: ['English', 'Spanish', 'Dutch'],
  width: '170px',
  variant: 'body2',
  fontColor: theme.palette.textColor.highEmp,
  disabled: true
};

export const Duration = Template.bind({});
Duration.args = {
  onChange: handleChange,
  menuList: ['1H', '1W', '1M', '1Y'],
  width: '77px',
  variant: 'body1',
  fontColor: theme.palette.gray[500]
};
