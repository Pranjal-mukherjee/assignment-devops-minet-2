import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import { theme, pxToRem } from '../../../theme';

export const MainContainer = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  backgroundColor: theme.palette.primary[100]
});

export const NavContainer = styled(Grid)({
  display: 'flex',
});

export const BodyContainer = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  overflowY: 'auto', // Allow the body to scroll
});

export const DataContainer = styled(Grid)({
  display: 'flex',
  flexDirection: 'row',
  gap: pxToRem(26),
  border: `1px solid ${theme.palette.gray[100]}`,
  flexWrap: 'nowrap'
});

export const HeaderContainer = styled(Grid)({
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: theme.palette.primary[100],
});

export const LeftContainer = styled(Grid)({
  display: 'flex',
  maxWidth: '67%',
  gap: theme.spacing(5),
  flexDirection: 'column',
  height: '100%',
  flexWrap: 'nowrap',
  padding: theme.spacing(5)
});

export const RightContainer = styled(Grid)({
  display: 'flex',
  width: pxToRem(527)
});

export const FooterContainer = styled(Grid)({
  width: '100%'
});
