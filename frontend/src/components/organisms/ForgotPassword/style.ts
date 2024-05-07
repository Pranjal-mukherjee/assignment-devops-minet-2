import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import ButtonComponent from '../../atoms/Button';
import { pxToRem, theme } from '../../../theme';
import TypographyComponent from '../../atoms/Typography';

export const MainContainer = styled(Grid)({
  flexDirection: 'column',
  gap: '32px',
  maxWidth: pxToRem(512)
});

export const InputDataContainer = styled(Grid)({
  gap: theme.spacing(5),
  flexDirection: 'column'
});

export const StyledButton = styled(ButtonComponent)({
  display: 'flex',
  width: '100%'
});

export const TypographyContainer = styled(Grid)({
  display: 'inline-flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  gap: theme.spacing(1)
});

export const CustomLoginText = styled(TypographyComponent)({
  color: theme.palette.primary[500],
  cursor: 'pointer'
});
