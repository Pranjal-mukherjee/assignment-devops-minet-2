import React from 'react';
import { Stack, Divider, styled } from '@mui/material';
import TypographyComponent from '../../atoms/Typography';
import BlueArrow from '../../../../public/assets/images/blueArrow.svg';
import Edit from '../../../../public/assets/images/edit.svg';
import BlueGrid from '../../../../public/assets/images/blueGrid.svg';
import List from '../../../../public/assets/images/list.svg';
import { theme } from '../../../theme';
import IconWithLabel from '../../molecules/IconWithLabel';
import { DISCOVER_ASSETS, VIEW_WATCHLIST } from '../../../utils/constants';
import IconComponent from '../../atoms/Icon';
import WatchListGraph, { WatchListGraphProps } from '../../molecules/WatchListGraph';
import { useNavigate } from 'react-router-dom';

export interface DashBoardWatchListProps {
  cardProps: WatchListGraphProps[];
}

const OuterContainer = styled(Stack)({
  width: '100%',
  gap: '14px'
});

const HeaderContianer = styled(Stack)({
  width: '100%',
  height: 32,
  flexDirection: 'row',
  gap: '12px',
  justifyContent: 'space-between'
});

const StyledStack = styled(Stack)({
  flexDirection: 'row',
  gap: '12px',
  alignItems: 'center'
});

const StyledTypographyIconStack = styled(Stack)({
  flexDirection: 'row',
  gap: '19px',
  alignItems: 'center'
});

const StyledIconStack = styled(Stack)({
  flexDirection: 'row',
  alignItems: 'center'
});

const GridContainer = styled(Stack)({
  width: '100%',
  flexDirection: 'row',
  display: 'flex',
  flexWrap: 'wrap',
  gap: '2.8%'
});

const GraphGridContainer = styled(Stack)({
  marginBottom: theme.spacing(5),
  backgroundColor: theme.palette.gray.white
});

const DashBoardWatchList = ({ cardProps }: DashBoardWatchListProps) => {
  const navigate = useNavigate();
  return (
    <OuterContainer>
      <HeaderContianer>
        <StyledStack>
          <TypographyComponent variant="subtitle1">Watchlist</TypographyComponent>
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              width: 'auto',
              height: '70%',
              color: theme.palette.gray[100],
              mt: '4px'
            }}
          />
          <IconWithLabel
            start={false}
            iconSrc={BlueArrow}
            iconAlt={'arrow'}
            text={DISCOVER_ASSETS}
            variant={'caption1'}
            color={theme.palette.primary[500]}
            handleClick={() => navigate('/trade')}
          />
        </StyledStack>
        <StyledTypographyIconStack>
          <IconWithLabel
            start={false}
            iconSrc={Edit}
            iconAlt={'edit'}
            text={VIEW_WATCHLIST}
            variant={'caption1'}
            color={theme.palette.primary[500]}
            handleClick={() => navigate('/trade', { state: 'Watchlist' })}
            data-testid="view-watchlist"
          />
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              width: 'auto',
              height: '70%',
              color: theme.palette.gray[100],
              mt: '4px'
            }}
          />
          <StyledIconStack>
            <IconComponent src={BlueGrid} alt={'blue-grid'} height="32px" width="32px" />
            <IconComponent src={List} alt={'list'} height="32px" width="32px" />
          </StyledIconStack>
        </StyledTypographyIconStack>
      </HeaderContianer>
      <GridContainer>
        {cardProps?.slice(0, 4).map((item, index) => {
          const totalCards = cardProps?.length;
          const graphLengthbool = totalCards === 1 || totalCards === 3;
          const setWidth = graphLengthbool && (totalCards && totalCards - 1) === index;
          return (
            <GraphGridContainer
              data-testid="watchListCard"
              key={item.cryptoName}
              width={setWidth ? '100%' : '48.57%'}
              onClick={() => {}}>
              <WatchListGraph
                cryptoName={item.cryptoName}
                cryptoValue={item.cryptoValue}
                cryptoIcon={item.cryptoIcon}
                data={item.data}
                changeCryptoData={item.changeCryptoData}
              />
            </GraphGridContainer>
          );
        })}
      </GridContainer>
    </OuterContainer>
  );
};

export default DashBoardWatchList;
