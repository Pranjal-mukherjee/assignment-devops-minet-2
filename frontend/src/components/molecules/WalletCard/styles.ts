import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import { theme } from '../../../theme';

export const MainContainer = styled(Grid)({
  width: '100%',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  gap: '10px',
  padding: theme.spacing(3)
});

export const DataContainer = styled(Grid)({
  flexDirection: 'row',
  flexWrap: 'nowrap',
  alignItems: 'center'
});

export const LeftDataContainer = styled(Grid)({
  flexDirection: 'column',
  gap: theme.spacing(0)
});

export const RightDataContainer = styled(Grid)({
  marginLeft: 'auto'
});
