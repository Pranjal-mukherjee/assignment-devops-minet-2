import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import { pxToRem, theme } from '../../../theme';

export const MainContainer = styled(Grid)({
  gap: '44px',
  flexDirection: 'column',
  maxWidth: pxToRem(396),
  alignItems: 'center'
});

export const TopContainer = styled(Grid)({
  gap: theme.spacing(5),
  flexDirection: 'column',
  alignItems: 'center'
});

export const BottomContainer = styled(Grid)({
  gap: theme.spacing(5),
  flexDirection: 'row',
  flexWrap: 'nowrap',
  alignItems: 'center',
  justifyContent: 'center'
});

export const TypographyContainer = styled(Grid)({
  maxWidth: pxToRem(322),
  alignItems: 'center',
  flexDirection: 'column',
  textAlign: 'center'
});

export const IconContainer = styled(Grid)({
  width: pxToRem(64),
  height: pxToRem(64),
  borderRadius: pxToRem(100),
  backgroundColor: theme.palette.success[100],
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});

export const sellButtonSx = {
  display: 'flex',
  padding: '0px 16px',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
  borderRadius: theme.spacing(0),
  color: theme.palette.primary[500],
  border: `1px solid ${theme.palette.primary[500]}`,
  height: pxToRem(42)
};

export const usdButtonSx = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: pxToRem(10),
  borderRadius: theme.spacing(0),
  backgroundColor: theme.palette.primary[500],
  color: theme.palette.gray.white,
  padding: `0px 16px`,
  height: pxToRem(42)
};
