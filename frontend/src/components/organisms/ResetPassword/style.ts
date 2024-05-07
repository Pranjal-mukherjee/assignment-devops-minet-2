import styled from '@emotion/styled';
import { Grid, SxProps } from '@mui/material';
import { pxToRem, theme } from '../../../theme';
import { Theme } from '@emotion/react';

export const StyledMainContainer = styled(Grid)({
  flexDirection: 'column',
  gap: '32px',
  maxWidth: pxToRem(512)
});

export const ResetPasswordContainer = styled(Grid)({
  gap: theme.spacing(5),
  flexDirection: 'column'
});

export const SuccessContainer = styled(Grid)({
  alignItems: 'flex-start',
  gap: '24px'
});

export const StyledInputField: SxProps<Theme> = {
  borderRadius: theme.spacing(1),
  '& .MuiOutlinedInput-root': {
    height: '48px',
    padding: '12px, 16px, 12px, 16px',
    borderRadius: '8px',
    boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
    boxSizing: 'border-box',
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.gray[1100],
      borderRadius: theme.spacing(2)
    },
    '& .MuiOutlinedInput-input': {
      fontFamily: theme.typography.body2,
      color: theme.palette.textColor.highEmp,
      '&::placeholder': {
        color: theme.palette.textColor.highEmp,
        fontFamily: theme.typography.body2
      }
    }
  }
};
