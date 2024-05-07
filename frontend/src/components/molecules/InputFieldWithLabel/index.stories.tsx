import { Meta, StoryFn } from '@storybook/react';
import { InputFieldWithLabel, InputFieldWithLabelProps } from '.';
import { StyledTextField } from '../../../utils/styledComponents';
import {
  EMAIL_LABEL,
  EMAIL_PLACEHOLDER,
  NAME_LABEL,
  NAME_PLACEHOLDER
} from '../../../utils/constants';

const meta: Meta = {
  title: 'Molecules/InputFieldWithLabel',
  component: InputFieldWithLabel
};
export default meta;
const Template: StoryFn<InputFieldWithLabelProps> = (args) => <InputFieldWithLabel {...args} />;

export const Email = Template.bind({});
Email.args = {
  text: EMAIL_LABEL,
  placeholder: EMAIL_PLACEHOLDER,
  type: 'text',
  sx: StyledTextField
};

export const Name = Template.bind({});
Name.args = {
  text: NAME_LABEL,
  placeholder: NAME_PLACEHOLDER,
  sx: StyledTextField
};
