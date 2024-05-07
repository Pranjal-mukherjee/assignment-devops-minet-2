import styled from '@emotion/styled';
import { Box } from '@mui/material';
import TypographyComponent from '../../atoms/Typography';
import IconComponent from '../../atoms/Icon';

export const CryptoDetailContainer = styled(Box)({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  gap: '24px'
});

export const AboutContainer = styled(Box)({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  gap: '8px'
});

export const StyledResourceTypography = styled(TypographyComponent)({
  marginBottom: '8px'
});

export const StyledIcon = styled(IconComponent)({
  width: '32px',
  height: '32px'
});
