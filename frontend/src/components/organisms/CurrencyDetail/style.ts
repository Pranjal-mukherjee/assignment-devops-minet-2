import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import { pxToRem, theme } from '../../../theme';

export const MainContainer = styled(Grid)({
  flexDirection: 'column',
  gap: theme.spacing(6)
});

export const GraphContainer = styled(Grid)({
  flexDirection: 'column',
  gap: theme.spacing(3),
  padding: theme.spacing(5),
  border: `1px solid ${theme.palette.gray[100]}`,
  backgroundColor: theme.palette.gray.white
});

export const GraphDataContainer = styled(Grid)({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between'
});

export const IconTyographyContainer = styled(Grid)({
  display: 'inline-flex',
  alignItems: 'center'
});

export const StackContainer = styled(Grid)({
  flexDirection: 'column'
});

export const DetailContainer = styled(Grid)({
  flexDirection: 'row',
  flexWrap: 'nowrap',
  gap: theme.spacing(5)
});

export const AboutSection = styled(Grid)({
  flexDirection: 'column',
  gap: theme.spacing(1),
  maxWidth: pxToRem(810)
});

export const ResourcesContainer = styled(Grid)({
  flexDirection: 'column',
  gap: theme.spacing(1)
});

export const LeftContainer = styled(Grid)({
  flexDirection: 'column',
  gap: theme.spacing(5)
});

export const LinksContainer = styled(Grid)({
  flexDirection: 'column',
  gap: '2px'
});

export const PriceCorrelation = styled(Grid)({
  padding: '16px 0px 16px 2px',
  width: '100%',
  maxWidth: pxToRem(450),
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.palette.gray.white,
  borderRadius: theme.spacing(0),
  border: `1px solid ${theme.palette.gray[100]}`
});
