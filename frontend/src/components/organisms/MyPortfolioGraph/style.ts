import { Grid, styled } from '@mui/material';
import { theme } from '../../../theme';

export const TotalContainer = styled('div')({
  height: '100%',
  maxHeight: '425px',
  minWidth: '90%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '24px',
  backgroundColor: theme.palette.gray.white,
  border: `1px solid ${theme.palette.gray[100]}`
});

export const MainContainer = styled('div')({
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column'
});

export const ValueContainer = styled('div')({
  height: '4.329vw',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between'
});

export const CoinDescriptionContainer = styled('div')({
  width: '50%',
  height: '3.571vw',
  display: 'flex',
  gap: '24px',
  alignItems: 'center'
});

export const ImageContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%'
});

export const LowerParentGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(6),
  flexDirection: 'column',
  width: '100%'
}));
