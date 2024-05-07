import { Theme } from '@emotion/react';
import { Box, Stack, SxProps } from '@mui/material';
import { theme } from '../theme';
import styled from '@emotion/styled';
import TypographyComponent from '../components/atoms/Typography';

export const StyledTextField: SxProps<Theme> = {
  borderRadius: theme.spacing(1),
  '& .MuiOutlinedInput-root': {
    width: '30rem',
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

export const sxSearchbox: SxProps<Theme> = {
  '.MuiOutlinedInput-root': {
    width: '14rem',
    height: '40px',
    boxSizing: 'border-box',
    paddingTop: '9px',
    paddingBottom: '9px',
    paddingRight: '13px',
    backgroundColor: theme.palette.gray.white,
    border: `1px solid ${theme.palette.gray[100]}`,
    borderRadius: '4px'
  },
  '& .MuiOutlinedInput-input': {
    fontFamily: theme.typography.body2,
    color: theme.palette.textColor.highEmp,
    '&::placeholder': {
      color: theme.palette.textColor.highEmp,
      fontFamily: theme.typography.body2
    }
  }
};

export const InnerWatchListContainer = styled(Stack)({
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'row'
});

export const StyledButtonContainer = styled(Box)({
  display: 'flex',
  gap: theme.spacing(3)
});

export const StyledWalletText = styled(TypographyComponent)({
  color: theme.palette.gray[500],
  marginTop: theme.spacing(4)
});

export const InnerCashBox = styled('div')({
  width: '96%',
  height: '81px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  border: `1px solid ${theme.palette.gray[100]}`,
  borderRadius: '4px',
  marginLeft: '1.25vw',
  paddingLeft: theme.spacing(4)
});
