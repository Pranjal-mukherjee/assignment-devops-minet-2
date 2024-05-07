import React from 'react';
import Image from '../../atoms/Image';
import { ALT_TEXT } from '../../../utils/constants';
import { GridContainer, ImageStack, RowStack } from './style';
import { Stack } from '@mui/material';

export interface TemplateProp {
  img: string;
  body: React.ReactNode;
}

const SignupTemplate = ({ body, img }: TemplateProp) => {
  return (
    <GridContainer container direction="row">
      <RowStack direction="row">
        <ImageStack data-testid="mock-image">
          <Image src={img} alt={ALT_TEXT} />
        </ImageStack>
        <Stack
          direction="row"
          width="50%"
          height="100vh"
          alignItems="center"
          justifyContent="center">
          {body}
        </Stack>
      </RowStack>
    </GridContainer>
  );
};

export default SignupTemplate;
