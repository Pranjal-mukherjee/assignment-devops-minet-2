import { Theme } from '@emotion/react';
import { TextField, SxProps } from '@mui/material';
import { TextFieldProps } from '@mui/material/TextField';
import React, { ReactNode } from 'react';

export interface InputFieldProps extends Omit<TextFieldProps, 'startAdornment' | 'endAdornment'> {
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  readOnly?: boolean;
  placeholder: string;
  sx?: SxProps<Theme>;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputFieldComponent = ({
  startAdornment,
  endAdornment,
  readOnly,
  ...props
}: InputFieldProps) => {
  return (
    <TextField
      {...props}
      placeholder={props.placeholder}
      onChange={props.handleChange}
      sx={props.sx}
      InputProps={{
        startAdornment,
        endAdornment,
        readOnly
      }}
      autoComplete="off"
    />
  );
};

export default InputFieldComponent;
