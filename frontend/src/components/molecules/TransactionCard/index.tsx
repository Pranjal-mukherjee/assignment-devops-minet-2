import React, { useEffect, useState } from 'react';
import {
  BodyContainer,
  DataContainer,
  IconContainer,
  LeftContainer,
  MainContainer,
  RightContainer
} from './styles';
import TypographyComponent from '../../atoms/Typography';
import IconComponent from '../../atoms/Icon';
import Chip from '../../atoms/Chip';
import { theme } from '../../../theme';
import TransactionStateImage from '../../../../public/assets/images/transactionState.svg';
import { extractMonthAndDay, getCoinName } from '../../../utils/functions';
import { getCryptoCoins } from '../../../services';

export interface ITransactionCardProps {
  date: string;
  transactionType: string;
  coinAmount: string;
  usdAmount: string;
  coinId: number;
}

const TransactionCard = ({
  date,
  transactionType,
  coinAmount,
  usdAmount,
  coinId
}: ITransactionCardProps) => {
  const dateValues = extractMonthAndDay(date);
  const [coinSymbol, setCoinSymbol] = useState<string>('BTC');
  useEffect(() => {
    const getCoinDetails = async () => {
      await getCryptoCoins(coinId).then((response) => {
        setCoinSymbol(response.symbol);
      });
    };
    getCoinDetails();
  });

  return (
    <MainContainer container>
      <TypographyComponent variant="caption2">{`${dateValues.monthName} ${dateValues.day}`}</TypographyComponent>
      <DataContainer container>
        <IconContainer item>
          <IconComponent src={TransactionStateImage} alt={'success-image'} />
        </IconContainer>
        <BodyContainer container>
          <LeftContainer container>
            <TypographyComponent
              variant="body1"
              color={theme.palette.textColor.highEmp}>{`${getCoinName(
              coinSymbol
            )} ${coinSymbol}`}</TypographyComponent>
            <Chip label={transactionType} />
          </LeftContainer>
          <RightContainer container>
            <TypographyComponent
              variant="body1"
              color={
                theme.palette.textColor.highEmp
              }>{`${coinAmount} ${coinSymbol}`}</TypographyComponent>
            <TypographyComponent variant="caption2" color={theme.palette.textColor.medEmp}>
              {usdAmount}
            </TypographyComponent>
          </RightContainer>
        </BodyContainer>
      </DataContainer>
    </MainContainer>
  );
};

export default TransactionCard;
