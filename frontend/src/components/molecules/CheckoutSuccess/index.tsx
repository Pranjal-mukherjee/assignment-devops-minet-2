import React from 'react';
import {
  BottomContainer,
  IconContainer,
  MainContainer,
  TopContainer,
  TypographyContainer,
  sellButtonSx,
  usdButtonSx
} from './style';
import IconComponent from '../../atoms/Icon';
import TypographyComponent from '../../atoms/Typography';
import {
  BUY_CRYPTO_TEXT,
  GO_TO_USD,
  PURCHASE_SUCCESS_ALT,
  SELL_CRYPTO_TEXT,
  SELL_SUCCESS_ALT
} from '../../../utils/constants';
import { theme } from '../../../theme';
import ButtonComponent from '../../atoms/Button';
import { useNavigate } from 'react-router-dom';

interface ICheckoutSuccessProps {
  src: string;
  alt: string;
  buy: boolean;
  amount: string;
}

const CheckoutSuccess = ({ src, alt, buy, amount }: ICheckoutSuccessProps) => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/wallet');
  };
  return (
    <MainContainer container>
      <TopContainer container>
        <IconContainer>
          <IconComponent src={src} alt={alt} />
        </IconContainer>
        <TypographyContainer>
          <TypographyComponent variant="h4" color={theme.palette.textColor.highEmp}>
            {amount}
          </TypographyComponent>
          <TypographyComponent variant="body2" color={theme.palette.textColor.highEmp}>
            {buy ? PURCHASE_SUCCESS_ALT : SELL_SUCCESS_ALT}
          </TypographyComponent>
        </TypographyContainer>
      </TopContainer>
      <BottomContainer container>
        <ButtonComponent variant="outlined" sx={sellButtonSx}>
          {buy ? BUY_CRYPTO_TEXT : SELL_CRYPTO_TEXT}
        </ButtonComponent>
        <ButtonComponent sx={usdButtonSx} variant="contained" onClick={handleButtonClick}>
          {GO_TO_USD}
        </ButtonComponent>
      </BottomContainer>
    </MainContainer>
  );
};

export default CheckoutSuccess;
