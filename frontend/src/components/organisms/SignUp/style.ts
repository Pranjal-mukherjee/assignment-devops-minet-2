import { Grid, styled } from '@mui/material';
import React from 'react';
import ButtonComponent from '../../atoms/Button';
import { theme } from '../../../theme';

export const MainContainer = styled(Grid)(() => ({
  width: '100%',
  height: '100%',
  minHeight: '768px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

export const SignUpOuterDiv = styled(Grid)(({ theme }) => ({
  width: '80%',
  maxWidth: '512px',
  minHeight: '60vh',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  alignItems: 'flex-start',
  padding: theme.spacing(4)
}));

export const SignUpForm = styled(Grid)(({ theme }) => ({
  flexDirection: 'column',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(3)
}));

export const SocialLoginIconButtons = styled(Grid)({
  display: 'flex',
  width: '100%',
  gap: theme.spacing(4),
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(1)
});

export const FooterText = styled(Grid)({
  display: 'flex',
  gap: theme.spacing(1)
});

export const StyledButtonComponent = styled(ButtonComponent)({
  borderRadius: '6px',
  padding: theme.spacing(0, 2),
  width: '100%',
  height: '42px',
  cursor: 'pointer'
});
