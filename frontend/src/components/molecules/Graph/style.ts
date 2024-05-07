import styled from '@emotion/styled';
import { pxToRem } from '../../../theme';
import { Grid } from '@mui/material';

export const BaseStyle = {
  fontFamily: 'Grpahik',
  fontSize: pxToRem(12),
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: pxToRem(14),
  letterSpacing: pxToRem(0.06)
};

export const MainContainer = styled(Grid)({
  flexDirection: 'row',
  flexWrap: 'nowrap',
  alignItems: 'center'
});

export const ChangeDataContainer = styled(Grid)({
  flexDirection: 'row',
  flexWrap: 'nowrap',
  alignItems: 'center',
  justifyContent: 'flex-end'
});
