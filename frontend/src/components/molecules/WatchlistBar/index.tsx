import React from 'react';
import {
  DataContainer,
  IconTypographyContainer,
  LeftContainer,
  MainContainer,
  StyledButton
} from './style';
import { RightContainer } from '../TransactionCard/styles';
import { theme } from '../../../theme';
import TypographyComponent from '../../atoms/Typography';
import WatchListStar from '../../../../public/assets/images/watchListStar.svg';
import IconTypographyStack, { IIconTypographyStackProps } from '../IconTypographyStack';
import {
  ADDED_TO_WATCHLIST,
  CIRCULATING_SUPPLY,
  DAY_VOLUME,
  MARKET_CAP_ALT
} from '../../../utils/constants';
import { Stack } from '@mui/material';
import  DividerComponent  from '../../atoms/Divider';

interface IWatchListBarProps extends IIconTypographyStackProps {
  handleWatchListButton?: any;
  marketCap: string;
  dayVolumeChange: string;
  circulatingSupply: string;
}

const WatchListBar = ({
  handleWatchListButton,
  coinIcon,
  coinIconAlt,
  changeIcon,
  changeData,
  changeIconAlt,
  firstText,
  secondText,
  thirdTextColor,
  marketCap,
  dayVolumeChange,
  circulatingSupply
}: IWatchListBarProps) => {
  const highEmphasis = theme.palette.textColor.highEmp;
  const medEmphasis = theme.palette.textColor.medEmp;

  return (
    <MainContainer container>
      <LeftContainer container>
        <IconTypographyContainer>
          <IconTypographyStack
            firstText={firstText}
            secondText={secondText}
            coinIcon={coinIcon}
            coinIconAlt={coinIconAlt}
            changeIcon={changeIcon}
            changeData={changeData}
            changeIconAlt={changeIconAlt}
            firstTextVariant={'h6'}
            firstTextColor={theme.palette.gray[500]}
            secondTextVariant={'body1'}
            secondTextColor={theme.palette.textColor.medEmp}
            thirdTextVariant={'overline'}
            thirdTextColor={thirdTextColor}
          />
        </IconTypographyContainer>
        <Stack width="2px">
          <DividerComponent height="54px" color={theme.palette.gray[100]} orientation="vertical" />
        </Stack>
        <DataContainer container>
          <IconTypographyContainer>
            <IconTypographyStack
              secondTextColor={highEmphasis}
              firstTextColor={medEmphasis}
              firstText={MARKET_CAP_ALT}
              secondText={`$${marketCap}`}
            />
          </IconTypographyContainer>
          <IconTypographyContainer>
            <IconTypographyStack
              secondTextColor={highEmphasis}
              firstTextColor={medEmphasis}
              firstText={DAY_VOLUME}
              secondText={`$${dayVolumeChange}`}
            />
          </IconTypographyContainer>
          <IconTypographyContainer>
            <IconTypographyStack
              secondTextColor={highEmphasis}
              firstTextColor={medEmphasis}
              firstText={CIRCULATING_SUPPLY}
              secondText={circulatingSupply}
            />
          </IconTypographyContainer>
        </DataContainer>
      </LeftContainer>
      <RightContainer>
        <StyledButton onClick={handleWatchListButton} src={WatchListStar} variant="outlined">
          <TypographyComponent variant="button" color={theme.palette.primary[500]} fontWeight={400}>
            {ADDED_TO_WATCHLIST}
          </TypographyComponent>
        </StyledButton>
      </RightContainer>
    </MainContainer>
  );
};

export default WatchListBar;
