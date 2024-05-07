import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Visibility from '../../../../public/assets/icons/Visibility.svg';
import VisibilityOff from '../../../../public/assets/icons/VisibilityOff.svg';
import SearchIcon from '../../../../public/assets/icons/SearchIcon.svg';
import Clear from '../../../../public/assets/icons/ClearIcon.svg';
import InputFieldComponent from '.';
import { IconButton, InputAdornment } from '@mui/material';
import { StyledTextField, sxSearchbox } from '../../../utils/styledComponents';
import IconComponent from '../Icon';

export default {
  title: 'Atoms/InputField',
  component: InputFieldComponent,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['text', 'password']
      }
    },
    value: {
      control: 'text'
    },
    handleChange: { action: 'changed' },
    placeholder: { control: 'text' }
  }
} as Meta;

const Template: StoryFn<typeof InputFieldComponent> = (args) => <InputFieldComponent {...args} />;

export const Email = Template.bind({});
Email.args = {
  placeholder: 'you@company.com',
  type: 'text',
  sx: StyledTextField
};

export const PasswordField: StoryFn<typeof InputFieldComponent> = (args) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <InputFieldComponent
      name="password"
      sx={StyledTextField}
      type={showPassword ? 'text' : 'password'}
      autoComplete="current-password"
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            edge="end">
            {showPassword ? (
              <IconComponent src={Visibility} />
            ) : (
              <IconComponent src={VisibilityOff} />
            )}
          </IconButton>
        </InputAdornment>
      }
      {...args}
      placeholder={args.placeholder}
    />
  );
};
PasswordField.args = {
  placeholder: 'Enter Password'
};
PasswordField.parameters = {
  controls: { hideNoControlsWarning: true }
};

export const Search: StoryFn<typeof InputFieldComponent> = (args) => {
  const [inputValue, setInputValue] = React.useState('');

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputValue(event.target.value);
  };

  const handleClearInput = () => {
    setInputValue('');
  };

  return (
    <InputFieldComponent
      name="search"
      variant="outlined"
      type="text"
      value={inputValue}
      handleChange={handleChange}
      sx={sxSearchbox}
      endAdornment={
        <InputAdornment position="end">
          {inputValue ? (
            <IconButton
              aria-label="clear input"
              onClick={handleClearInput}
              edge="end"
              data-testid="Clear-Icon">
              <IconComponent src={Clear} />
            </IconButton>
          ) : (
            <IconComponent src={SearchIcon} />
          )}
        </InputAdornment>
      }
      {...args}
      placeholder={args.placeholder}
    />
  );
};
Search.args = {
  placeholder: 'Search all assets'
};
Search.parameters = {
  controls: { hideNoControlsWarning: true }
};
