import { Stack, styled } from '@mui/material';

export const OuterStack = styled(Stack)({
  flexDirection: 'row',
  width: '100%',
  height: '100%',
  justifyContent: 'flex-start',
  alignItems: 'center'
});

export const InnerStack = styled(Stack)({
  flexDirection: 'row',
  width: '100%',
  height: '100%',
  justifyContent: 'flex-start'
});

export const IconStack = styled(Stack)({
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'space-between',
  alignItems: 'center'
});

export const TypographyStack = styled(Stack)({
  flexDirection: 'column',
  width: '65%',
  height: '100%',
  justifyContent: 'space-between'
});

export const TypoStack = styled(Stack)({
  flexDirection: 'column',
  width: '100%',
  height: '22%',
  marginLeft: '10px',
  justifyContent: 'center'
});
