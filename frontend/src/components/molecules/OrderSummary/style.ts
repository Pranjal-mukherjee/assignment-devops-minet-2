import styled from '@emotion/styled';
import { Box, Grid } from '@mui/material';
import { pxToRem, theme } from '../../../theme';
import ButtonComponent from '../../atoms/Button';
import TypographyComponent from '../../atoms/Typography';

export const MainContainer = styled(Grid)({
  flexDirection: 'column',
  maxWidth: pxToRem(527),
  width: '100%',
  border: `1px solid ${theme.palette.gray[100]}`,
  backgroundColor: theme.palette.gray.white,
  gap: theme.spacing(5)
});

export const HeadContainer = styled(Grid)({
  flexDirection: 'column',
  padding: theme.spacing(5, 5, 1, 5),
  gap: theme.spacing(2),
  alignItems: 'center'
});
export const PaymentContainer = styled(Grid)({
  flexDirection: 'column'
});

export const StepperContainer = styled(Grid)({
  flexDirection: 'column',
  alignItems: 'center',
  height: pxToRem(206),
  paddingLeft:'1rem'
});

export const FooterContainer = styled(Grid)({
  gap: '16px',
  padding: theme.spacing(5)
});

export const DividerContainer = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  '.MuiStack-root': {
    margin: '0px',
    width: '100%'
  }
});

export const StyledButton = styled(ButtonComponent)({
  width: '100%',
  color: theme.palette.gray.white
});

export const TypographyContainer = styled(Grid)({
  display: 'grid',
  gridTemplateColumns: 'auto 1fr auto',
  gridColumnGap: theme.spacing(0),
  alignItems: 'center',
  width: '100%'
});

export const Line = styled(Box)({
  width: '100%',
  height: '0px',
  borderTop: `1px dashed ${theme.palette.gray[300]}`,
  gridColumn: '2'
});

export const StyledTypography = styled(TypographyComponent)({
  color: theme.palette.textColor.medEmp
});
