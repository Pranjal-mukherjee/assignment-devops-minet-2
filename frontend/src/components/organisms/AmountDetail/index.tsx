import React, { useState } from 'react';
import {
  AmountContainer,
  DataContainer,
  MainContainer,
  SliderLabelContainer,
  buttonSx
} from './styles';
import TypographyComponent from '../../atoms/Typography';
import { AMOUNT_DETAILS, BUY_MAX, SELL_MAX, USD_CASH } from '../../../utils/constants';
import Slider from '../../atoms/Slider';
import ButtonComponent from '../../atoms/Button';
import { theme } from '../../../theme';
import { formattedAmount } from '../../../utils/functions';

interface IAmountDetailProps {
  buy: boolean;
  walletBalance: number;
  cryptoBalance: number;
  cryptoCoinCode: string;
  cryptoPrice: number;
  transactionFee: number;
  handleAmountChange: (amount: number) => void;
}

const AmountDetail = ({
  buy,
  walletBalance,
  cryptoBalance,
  cryptoCoinCode,
  cryptoPrice,
  transactionFee,
  handleAmountChange
}: IAmountDetailProps) => {
  const [value, setValue] = useState<number>(0);
  const [currentCryptoAmount, setCurrentCryptoAmount] = useState<number>(0);

  const maxPurchaseAmount = (walletBalance - transactionFee) / cryptoPrice;

  const handleSliderChange = (event: Event, newValue: number | number[], activeThumb: number) => {
    setValue(newValue as number);
    if (buy) {
      const roundedAmount =
        Math.ceil(((maxPurchaseAmount * (newValue as number)) / 100) * 1e7) / 1e7;
      setCurrentCryptoAmount(roundedAmount);
      handleAmountChange(roundedAmount);
    } else {
      const roundedAmount = Math.ceil(((cryptoBalance * (newValue as number)) / 100) * 1e7) / 1e7;
      setCurrentCryptoAmount(roundedAmount);
      handleAmountChange(roundedAmount);
    }
  };

  const handleMaxPurchase = () => {
    setValue(walletBalance);
    handleAmountChange(Math.ceil(maxPurchaseAmount * 1e7) / 1e7);
    setCurrentCryptoAmount(Math.ceil(maxPurchaseAmount * 1e7) / 1e7);
  };

  const handleMaxSell = () => {
    setValue(100);
    handleAmountChange(cryptoBalance);
    setCurrentCryptoAmount(cryptoBalance);
  };

  return (
    <MainContainer>
      <TypographyComponent variant="body1">{AMOUNT_DETAILS}</TypographyComponent>
      <DataContainer>
        <AmountContainer container>
          <TypographyComponent color={theme.palette.textColor.highEmp} variant="subtitle1">
            {buy
              ? `$${formattedAmount(currentCryptoAmount * cryptoPrice)?.toString()}`
              : currentCryptoAmount.toString()}
          </TypographyComponent>
          <ButtonComponent
            sx={buttonSx}
            variant="outlined"
            onClick={buy ? handleMaxPurchase : handleMaxSell}>
            {buy ? BUY_MAX : SELL_MAX}
          </ButtonComponent>
        </AmountContainer>
        <SliderLabelContainer>
          <Slider value={value} handleSliderChange={handleSliderChange} />
          <TypographyComponent
            color={theme.palette.textColor.medEmp}
            variant="caption1">{`1${cryptoCoinCode} = $${cryptoPrice}`}</TypographyComponent>
        </SliderLabelContainer>
        <AmountContainer container>
          <TypographyComponent color={theme.palette.textColor.highEmp} variant="subtitle1">
            {buy
              ? currentCryptoAmount.toString()
              : `$${formattedAmount(currentCryptoAmount * cryptoPrice)}`}
          </TypographyComponent>
          <TypographyComponent color={theme.palette.textColor.medEmp} variant="body1">
            {buy ? cryptoCoinCode : USD_CASH}
          </TypographyComponent>
        </AmountContainer>
      </DataContainer>
    </MainContainer>
  );
};

export default AmountDetail;
