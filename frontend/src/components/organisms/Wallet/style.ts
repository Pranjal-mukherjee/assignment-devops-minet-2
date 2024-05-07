import styled from '@emotion/styled';
import { pxToRem, theme } from '../../../theme';
import { Box, Divider, SxProps } from '@mui/material';
import { Theme } from '@emotion/react';

export const StyledMainContainer = styled(Box)({
  gap: theme.spacing(2),
  width: '100%',
  display: 'flex',
  flexDirection: 'column'
});
export const StyledBalanceContainer = styled(Box)({
  width: '100%',
  display: 'flex',
  padding: theme.spacing(3, 5),
  backgroundColor: theme.palette.gray[50],
  height: pxToRem(60),
  gap: '10px',
  borderRadius: '4px',
  alignItems: 'center',
  justifyContent: 'space-between'
});

export const StyledSearchMainContainer = styled(Box)({
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'flex-start'
});

export const StyledIconContainer = styled(Box)({
  display: 'flex',
  height: theme.spacing(6),
  gap: theme.spacing(1)
});

export const StyledVerticalDivider = styled(Divider)({
  height: pxToRem(28),
  alignSelf: 'center',
  strokeWidth: '1px',
  stroke: theme.palette.gray[100]
});

export const StyledWalletContainer = styled(Box)({
  width: '100%',
  padding: theme.spacing(2, 5),
  border: `1px solid ${theme.palette.gray[100]}`,
  height: pxToRem(538),
  backgroundColor: theme.palette.gray.white
});

export const StyledInnerContainer = styled(Box)({
  padding: '0px 24px 0px 0px',
  height: pxToRem(510),
  overflowY: 'scroll',
  overflowX: 'hidden',
  '&::-webkit-scrollbar': { width: '0.3rem' },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: theme.palette.gray[300],
    borderRadius: '10px'
  }
});

export const sxSearchFilterBox: SxProps<Theme> = {
  '& .MuiOutlinedInput-root': {
    backgroundColor: theme.palette.gray.white,
    width: pxToRem(348),
    height: pxToRem(40),
    flexShrink: '0px',
    stroke: theme.palette.gray[100],
    strokeWidth: '1px',
    alignItems: 'center',
    marginRight: theme.spacing(2),
    paddingRight: theme.spacing(0),
    borderRadius: theme.spacing(0),
    boxSizing: 'border-box',
    '&:hover': {
      borderColor: `${theme.palette.gray[100]} !important`
    },
    '& .Mui-focused': {
      border: `1px solid ${theme.palette.gray[100]} !important`
    }
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
