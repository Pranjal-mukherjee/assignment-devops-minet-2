import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import { theme } from '../../../theme';

export const StyledMainContainer = styled(Grid)({
  flexDirection: 'row',
  gap: theme.spacing(2),
  width: '100%',
  alignItems: 'center',
  flexWrap: 'nowrap'
});

export const TypographyContainer = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(0),
  alignItems: 'flex-start',
  maxWidth: '230px',
  width: '100%'
});

export const ProfitLossContainer = styled(Grid)({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center'
});

export const BaseContainer = styled(Grid)({
  flexDirection: 'row',
  flexWrap: 'nowrap',
  alignItems: 'center',
  width: 'auto'
});

interface StyledIconProps {
  changeData?: string;
}

export const DashboardDataContainer = styled(Grid)({
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  gap: theme.spacing(0)
});
