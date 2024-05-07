import styled from '@emotion/styled';
import { Grid, Stack } from '@mui/material';
import { pxToRem, theme } from '../../../theme';

export const MainContainerSx = {
  position: 'absolute',
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  width: '100%'
};

export const InnerStack = styled(Stack)({
  flexDirection: 'row',
  width: '100%',
  backgroundColor: theme.palette.primary[100]
});
export const NavContainer = styled(Grid)({
  display: 'flex',
  position: 'sticky', 
  top: 0,
  zIndex: 1000
});

export const BodyContainer = styled(Grid)({
  flexDirection: 'column',
  width: '100%',
  justifyContent: 'space-between'
});

export const Footer = styled(Grid)({
  display: 'flex',
  width: '100%',
  height: pxToRem(90),
  backgroundColor: theme.palette.gray[100]
});

export const HeaderContainer = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  backgroundColor: theme.palette.gray.white,
  position: 'sticky',
  top: 0,
  zIndex: 1000
});

export const DataContainer = styled(Grid)({
  padding: theme.spacing(5),
  border: `1px solid ${theme.palette.gray[100]}`,
  gap: theme.spacing(5),
  minHeight: '80vh'
});

export const DetailContainer = styled(Grid)({
  flexDirection: 'column',
  justifyContent: 'flex-start'
});

export const WatchListContainer = styled(Grid)({
  marginBottom: theme.spacing(5),
  width: '100%'
});
