import React from 'react';
import Header from '../../organisms/Header';
import {
  BodyContainer,
  DataContainer,
  DetailContainer,
  HeaderContainer,
  InnerStack,
  MainContainerSx,
  NavContainer,
  WatchListContainer
} from './style';
import { Footer } from '../../organisms/Footer';
import { Grid } from '@mui/material';

interface ITradeScreenTemplate {
  header?: React.ReactNode;
  navbar?: React.ReactNode;
  watchlistBar?: boolean;
  innerBody?: React.ReactNode;
  watchList?: React.ReactNode;
  pageName?: string;
}

const TradeScreenTemplate = ({
  header,
  innerBody,
  navbar,
  watchlistBar,
  watchList,
  pageName
}: ITradeScreenTemplate) => {
  return (
    <Grid sx={MainContainerSx}>
      <InnerStack>
        <NavContainer>{navbar}</NavContainer>
        <BodyContainer container>
          <DetailContainer>
            <HeaderContainer container>
              {header ? (
                <Grid>{header}</Grid>
              ) : (
                <Header pageName={pageName ?? 'Trade'} displayButtons={true} />
              )}
            </HeaderContainer>
            <DataContainer>
              {watchlistBar && <WatchListContainer>{watchList}</WatchListContainer>}
              {innerBody}
            </DataContainer>
          </DetailContainer>
          <Footer />
        </BodyContainer>
      </InnerStack>
    </Grid>
  );
};

export default TradeScreenTemplate;
