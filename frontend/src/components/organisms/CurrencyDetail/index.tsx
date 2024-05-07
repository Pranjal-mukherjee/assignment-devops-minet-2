import React from 'react';
import {
  DetailContainer,
  GraphContainer,
  GraphDataContainer,
  IconTyographyContainer,
  LeftContainer,
  MainContainer,
  PriceCorrelation,
  StackContainer
} from './style';
import Graph from '../../molecules/Graph';
import IconTypographyStack from '../../molecules/IconTypographyStack';
import {
  CURRENT_VALUE,
  CorrelationData,
  PRICE_CORRELATION,
  timeLineValues
} from '../../../utils/constants';
import { theme } from '../../../theme';
import IconComponent from '../../atoms/Icon';
import TypographyComponent from '../../atoms/Typography';
import TimeLineTabs from '../../molecules/Timeline';
import PortfolioCard from '../../molecules/PortfolioCard';
import  CryptoDetails  from '../../molecules/CryptoDetails';

interface ICurrencyDetailProps {
  data: object[];
  baseDataKey: string;
  firstDataKey: string;
  secondDataKey?: string;
  firstColor: string;
  secondColor?: string;
  sx?: object;
  currentPrice: string;
  changeIcon: string;
  changeData: string;
  changeDataColor: string;
  changeIconAlt: string;
}

const CurrencyDetail = ({
  data,
  baseDataKey,
  secondDataKey,
  firstColor,
  secondColor,
  sx,
  firstDataKey,
  currentPrice,
  changeIcon,
  changeData,
  changeDataColor,
  changeIconAlt
}: ICurrencyDetailProps) => {
  return (
    <MainContainer container>
      <GraphContainer>
        <GraphDataContainer container>
          <StackContainer>
            <IconTypographyStack
              firstText={CURRENT_VALUE}
              secondText={currentPrice}
              firstTextVariant={'caption1'}
              firstTextColor={theme.palette.textColor.medEmp}
              secondTextVariant={'h6'}
              secondTextColor={theme.palette.textColor.medEmp}
            />
            <IconTyographyContainer>
              <IconComponent src={changeIcon} alt={changeIconAlt} />
              <TypographyComponent variant={'caption2'} color={changeDataColor}>
                {changeData}
              </TypographyComponent>
            </IconTyographyContainer>
          </StackContainer>
          <TimeLineTabs typevariant="Detail" value={3} timeLineValues={timeLineValues} />
        </GraphDataContainer>
        <Graph
          data={data}
          multiple={true}
          baseDataKey={baseDataKey}
          firstDataKey={firstDataKey}
          firstColor={firstColor}
          secondColor={secondColor}
          secondDataKey={secondDataKey}
          sx={sx}
          height={246}
        />
      </GraphContainer>
      <DetailContainer container>
        <LeftContainer container>
          <CryptoDetails />
        </LeftContainer>
        <PriceCorrelation>
          <TypographyComponent
            sx={{ marginLeft: theme.spacing(5) }}
            variant="subtitle1"
            color={theme.palette.textColor.highEmp}>
            {PRICE_CORRELATION}
          </TypographyComponent>
          {CorrelationData.map((data) => {
            return <PortfolioCard key={data.coinName} {...data} />;
          })}
        </PriceCorrelation>
      </DetailContainer>
    </MainContainer>
  );
};

export default CurrencyDetail;
