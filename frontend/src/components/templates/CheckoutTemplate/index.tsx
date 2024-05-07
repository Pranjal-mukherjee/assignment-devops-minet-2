import { Grid } from '@mui/material';
import React from 'react';
import {
  BodyContainer,
  DataContainer,
  FooterContainer,
  HeaderContainer,
  LeftContainer,
  MainContainer,
  NavContainer,
  RightContainer
} from './styles';
import { Stack } from '@mui/system';
import Header from '../../organisms/Header';
import { Footer } from '../../organisms/Footer';
import TypographyComponent from '../../atoms/Typography';
import { theme } from '../../../theme';

interface ICheckoutTemplateProps {
  navbar: React.ReactNode;
  buyCrypto?: React.ReactNode;
  totalBalance?: React.ReactNode;
  amountDetails?: React.ReactNode;
  speedDelivery?: React.ReactNode;
  orderSummary?: React.ReactNode;
  header?: string;
}

const CheckoutTemplate = ({
  buyCrypto,
  totalBalance,
  amountDetails,
  speedDelivery,
  orderSummary,
  navbar,
  header
}: ICheckoutTemplateProps) => {
  return (
    <MainContainer>
      <Stack direction={'row'} width={'99.2vw'} height={'100%'}>
        <NavContainer>{navbar}</NavContainer>
        <BodyContainer container>
          <HeaderContainer container>
            <Header pageName={'Checkout'} displayButtons={false} />
            <DataContainer container>
              <LeftContainer>
                <Grid>
                  <TypographyComponent
                    variant="subtitle1"
                    color={theme.palette.textColor.highEmp}
                    paddingBottom="0.5rem">
                    {header}
                  </TypographyComponent>
                  {buyCrypto}
                </Grid>
                <Grid>{totalBalance}</Grid>
                <Grid>{amountDetails}</Grid>
                <Grid>{speedDelivery}</Grid>
              </LeftContainer>
              <RightContainer>
                <Grid width={'100%'}>{orderSummary}</Grid>
              </RightContainer>
            </DataContainer>
          </HeaderContainer>
          <FooterContainer>
            <Footer />
          </FooterContainer>
        </BodyContainer>
      </Stack>
    </MainContainer>
  );
};

export default CheckoutTemplate;
