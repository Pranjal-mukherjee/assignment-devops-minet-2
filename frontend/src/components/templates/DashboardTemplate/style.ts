import { Box, Grid, Stack, styled } from '@mui/material';
import { theme } from '../../../theme';

export const StyledOutline = styled(Box)({
  display: 'flex',
  background: theme.palette.primary[100],
  position: 'absolute',
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  width: '100%'
});

export const MainContent = styled(Stack)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  flex: 1,
  '&::-webkit-scrollbar': {
    width: '5px',
    height: '25.65px'
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: `${theme.palette.gray[300]}`,
    borderRadius: '50rem',
    height: '32px'
  }
});

export const StyledContent = styled(Stack)({
  border: `1px solid ${theme.palette.gray[100]}`,
  borderRight: 'none',
  padding: '24px',
  height: '100vw'
});

export const StyledGrid = styled(Grid)({
  borderRight: 'none',
  padding: '24px',
  height: '100%',
  '&::-webkit-scrollbar': {
    width: '5px',
    height: '25.65px'
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: `${theme.palette.gray[300]}`,
    borderRadius: '50rem',
    height: '32px'
  }
});

export const DataContainer = styled(Grid)({
  border: `1px solid ${theme.palette.gray[100]}`,
  flex: 1,
  overflowY: 'auto', 
});
