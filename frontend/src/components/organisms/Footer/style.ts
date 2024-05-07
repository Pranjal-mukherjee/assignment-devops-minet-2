import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { theme } from '../../../theme';
import TypographyComponent from '../../atoms/Typography';

export const MainContainer = styled(Box)({
  padding: '24px',
  background: theme.palette.primary[100]
});
export const FooterContainer = styled(Box)({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  '@media (max-width: 600px)': {
    flexDirection: 'column'
  }
});

export const InnerStartContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '24px',
  '@media (max-width: 600px)': {
    flexDirection: 'column',
    alignItems: 'center',
    gap: '12px'
  }
});
export const InnerEndContainer = styled(Box)({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '16px',
  '@media (max-width: 600px)': {
    flexDirection: 'column',
    alignItems: 'center',
    gap: '12px'
  }
});

export const FooterPrimaryTypography = styled(TypographyComponent)({
  color: theme.palette.primary[500],
  cursor: 'pointer'
});

export const StyledMinetTypography = styled(TypographyComponent)({
  color: theme.palette.textColor.highEmp,
  cursor: 'pointer'
});
