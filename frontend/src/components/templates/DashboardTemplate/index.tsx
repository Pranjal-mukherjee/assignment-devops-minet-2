import React from 'react';
import { Grid, Stack } from '@mui/material';
import Header, { IHeaderProps } from '../../organisms/Header';
import { theme } from '../../../theme';
import { Footer } from '../../organisms/Footer';
import { DataContainer, MainContent, StyledContent, StyledGrid, StyledOutline } from './style';

export interface IDetailsProps extends IHeaderProps {
  middleComponent: React.ReactNode;
  rightComponent?: React.ReactNode;
  leftComponent: React.ReactNode;
}

const DashboardTemplate = ({
  pageName,
  displayButtons,
  disableBuy,
  disableSell,
  onBuy,
  onSell,
  middleComponent,
  rightComponent,
  leftComponent
}: IDetailsProps) => {
  return (
    <StyledOutline>
      {leftComponent}
      <Stack direction={'column'} width={'100%'}>
        <Header
          pageName={pageName}
          onBuy={onBuy}
          onSell={onSell}
          displayButtons={displayButtons}
          disableBuy={disableBuy}
          disableSell={disableSell}
        />
        <MainContent>
          {rightComponent ? (
            <DataContainer container>
              <StyledGrid item xs={8}>
                {middleComponent}
              </StyledGrid>
              <Grid
                item
                xs={4}
                alignItems={'flex-start'}
                borderLeft={`1px solid ${theme.palette.gray.white}`}
                sx={{ background: theme.palette.gray.white }}>
                {rightComponent}
              </Grid>
            </DataContainer>
          ) : (
            <StyledContent>{middleComponent}</StyledContent>
          )}
          <Footer />
        </MainContent>
      </Stack>
    </StyledOutline>
  );
};

export default DashboardTemplate;
