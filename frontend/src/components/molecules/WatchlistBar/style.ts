import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import { pxToRem, theme } from '../../../theme';
import ButtonComponent from '../../atoms/Button';

export const MainContainer = styled(Grid)({
  padding: theme.spacing(5),
  borderRadius: theme.spacing(0),
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'nowrap',
  border: `1px solid ${theme.palette.gray[100]}`,
  backgroundColor: theme.palette.gray.white
});

export const LeftContainer = styled(Grid)({
  alignItems: 'center',
  flexWrap: 'nowrap',
  maxWidth: pxToRem(750),
  width: '100%',
  gap: '33px'
});

export const RightContainer = styled(Grid)({});

export const StyledButton = styled(ButtonComponent)({
  color: theme.palette.primary[500],
  width: pxToRem(215),
  height: '42px',
  Padding: '0px 16px 0px 16px',
  borderRadius: '4px',
  border: `1px solid ${theme.palette.primary[500]}`,
  alignItems: 'center',
  iconHeight: '19px',
  iconWidth: '18px'
});

export const DataContainer = styled(Grid)({
  display: 'flex',
  flexDirection: 'row',
  gap: theme.spacing(5),
  width: '100%',
  flexWrap: 'nowrap',
  maxWidth: pxToRem(500)
});

export const IconTypographyContainer = styled(Grid)({
  maxWidth: pxToRem(160),
  width: '100%'
});
