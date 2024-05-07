import styled from '@emotion/styled';
import { Box, Divider } from '@mui/material';
import { theme } from '../../../theme';

export const StyledPortfolioBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '12px'
});

export const StyledPortfolioHeader = styled(Box)({
  padding: '0px 0px 0px 24px',
  width: '100%',
  height: '32px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
});
export const StyledPortfolioCardContainer = styled(Box)({
  maxHeight: '240px',
  overflowY: 'scroll',
  overflowX: 'hidden',
  '&::-webkit-scrollbar': { width: '0.3rem' },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: theme.palette.gray[300],
    borderRadius: '10px'
  },
  width: '100%'
});
export const StyledBalanceContainer = styled(Box)({
  padding: '24px 4px 24px 24px',
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between'
});

export const StyledDivider = styled(Divider)({
  width: '100%',
  color: theme.palette.gray[100]
});
