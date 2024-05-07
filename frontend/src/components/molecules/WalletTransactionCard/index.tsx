import React, { useEffect, useState } from 'react';
import { theme } from '../../../theme';
import TypographyComponent from '../../atoms/Typography';
import IconComponent from '../../atoms/Icon';
import Chip from '../../atoms/Chip';
import {
  StyledCoinContainer,
  StyledContainer,
  StyledDateContainer,
  StyledDetailsContainer,
  StyledInnerContainer,
  StyledMainCoinContainer,
  StyledTypoContainer,
  StyledValueContainer
} from './style';
import { SxProps } from '@mui/material';
import { FROM_USER_NAME } from '../../../utils/constants';
import { getCryptoCoins } from '../../../services';
import { getCoinName } from '../../../utils/functions';

export interface WalletTransactionCardProps {
  date: string;
  src: string;
  userName?: string;
  coinType?: string;
  label: string;
  value?: string;
  subValue?: string;
  sx?: SxProps;
  coinId: number;
}

const WalletTransactionCard: React.FC<WalletTransactionCardProps> = ({
  date,
  src,
  userName,
  coinType,
  label,
  value,
  subValue,
  coinId,
  ...props
}) => {
  const transactionDate = new Date(date);
  const abbreviatedMonth = new Intl.DateTimeFormat('en', { month: 'short' }).format(
    transactionDate
  );
  const dateDigits = transactionDate.getDate().toString().padStart(2, '0').slice(-2);
  const [coinSymbol, setCoinSymbol] = useState<string>('BTC');
  useEffect(() => {
    const getCoinDetails = async () => {
      await getCryptoCoins(coinId).then((response) => {
        setCoinSymbol(response.symbol);
      });
    };
    getCoinDetails();
  }, []);

  return (
    <StyledContainer sx={props.sx}>
      <StyledDateContainer>
        <TypographyComponent variant="caption2" color={theme.palette.textColor.medEmp}>
          {abbreviatedMonth}
        </TypographyComponent>
        <TypographyComponent variant="subtitle2" color={theme.palette.textColor.highEmp}>
          {dateDigits}
        </TypographyComponent>
      </StyledDateContainer>
      <IconComponent src={src}></IconComponent>
      <StyledInnerContainer>
        <StyledMainCoinContainer>
          <StyledCoinContainer>
            <TypographyComponent variant="body1" color={theme.palette.textColor.highEmp}>
              {`Received ${getCoinName(coinSymbol)}`}
            </TypographyComponent>
            <StyledDetailsContainer>
              <StyledTypoContainer>
                <TypographyComponent variant="caption2" color={theme.palette.textColor.medEmp}>
                  {FROM_USER_NAME}
                </TypographyComponent>
              </StyledTypoContainer>

              <Chip label={label} />
            </StyledDetailsContainer>
          </StyledCoinContainer>
        </StyledMainCoinContainer>
        <StyledValueContainer>
          <TypographyComponent variant="body1" color={theme.palette.textColor.highEmp}>
            {`${value} ${coinSymbol}`}
          </TypographyComponent>
          <TypographyComponent variant="caption2" color={theme.palette.textColor.medEmp}>
            {subValue}
          </TypographyComponent>
        </StyledValueContainer>
      </StyledInnerContainer>
    </StyledContainer>
  );
};
export default WalletTransactionCard;
