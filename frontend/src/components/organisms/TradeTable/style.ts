import { Box, Grid, Stack, Tab, Tabs, styled } from '@mui/material';
import { pxToRem, theme } from '../../../theme';

export const HeaderContainer = styled('div')(() => ({
  width: '100%',
  height: '3rem',
  display: 'flex',
  gap: theme.spacing(2),
  justifyContent: 'flex-end',
  borderBottom: `1px solid ${theme.palette.gray[100]}`,
  marginBottom: theme.spacing(5)
}));

export const SearchBoxContainer = styled('div')(() => ({
  width: '15vw',
  height: '2.5rem',
  display: 'flex',
  alignItems: 'center',
  borderRadius: '4px',
  justifyContent: 'flex-end'
}));

export const StyledBox = styled(Stack)({
  color: theme.palette.gray.white,
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  background: theme.palette.primary[100],
  borderRadius: theme.spacing(0),
  width: '100%',
  height: '5%',
  justifyContent: 'space-evenly'
});

export const StyledTabs = styled(Tabs)({
  height: '100%',
  width: '100%',
  minHeight: '100%'
});

export const StyledTab = styled(Tab)({
  height: '100%',
  maxHeight: '100%',
  textTransform: 'none',
  fontSize: '20px'
});

export const StyledMainBox = styled(Box)({
  backgroundColor: theme.palette.primary[100],
  padding: '24px'
});

export const StyledStack = styled(Stack)({
  justifyContent: 'space-between',
  height: '88%',
  width: '100%',
  backgroundColor: theme.palette.primary[100]
});

export const CustomStack = styled(Stack)({
  marginBottom: pxToRem(12)
});

export const RightContainer = styled(Grid)({
  display: 'flex',
  gap: theme.spacing(2),
  alignItems: 'flex-end'
});
