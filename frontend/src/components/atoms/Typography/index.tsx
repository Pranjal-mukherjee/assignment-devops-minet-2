import { Typography, TypographyProps } from '@mui/material';
import React from 'react';

interface TypographyComponentPros extends TypographyProps {
  children?: string;
}

const TypographyComponent = (props: TypographyComponentPros) => {
  return (
    <Typography data-testid="Typo" variant={props.variant} {...props}>
      {props.children}
    </Typography>
  );
};

export default TypographyComponent;
