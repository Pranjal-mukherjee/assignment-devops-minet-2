import { Grid, Stack, styled } from '@mui/material';

export const GridContainer = styled(Grid)`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;

export const RowStack = styled(Stack)`
  width: 100%;
  height: 100%;
`;

export const ImageStack = styled(Stack)`
  width: 50%;
  height: 100%;
  object-fit: cover;
`;

