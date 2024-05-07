import React, { useEffect, useState } from 'react';
import {
  DividerContainer,
  FooterContainer,
  HeadContainer,
  Line,
  MainContainer,
  StepperContainer,
  StyledButton,
  StyledTypography,
  TypographyContainer
} from './style';
import TransactionStepper from '../TransactionStepper';
import TypographyComponent from '../../atoms/Typography';
import {
  BUY_NOW,
  BUY_ORDER,
  SELL_NOW,
  SELL_ORDER,
  TOTAL,
  TRANSACTION_FEE_TEXT
} from '../../../utils/constants';
import { theme } from '../../../theme';
import { Divider } from '../../atoms/Divider/index.stories';
import { formattedAmount, getCoinName } from '../../../utils/functions';
import { useNavigate } from 'react-router-dom';
import { getUsersByEmail, postTrades, updateUserByEmail, updateWallets } from '../../../services';

interface IOrderSummaryProps {
  isBuy: boolean;
  coinAmount: number;
  currentPrice: number;
  paymentText: string;
  depositText: string;
  walletCode: string;
  deliveryFee: number;
  transactionFee: number;
  coinId?: number;
}

const OrderSummary = ({
  isBuy,
  coinAmount,
  currentPrice,
  paymentText,
  depositText,
  walletCode,
  deliveryFee,
  transactionFee,
  coinId
}: IOrderSummaryProps) => {
  const navigate = useNavigate();
  const buttonSx = {
    backgroundColor: isBuy ? theme.palette.primary[500] : theme.palette.warning[300],
    '&.MuiButton-root:hover': {
      backgroundColor: isBuy ? theme.palette.primary[500] : theme.palette.warning[500]
    }
  };
  const [balance, setBalance] = useState<number>(0);
  const PurchaseDetails = {
    type: isBuy ? 'buy' : 'sell',
    cryptoCoin: walletCode,
    value: coinAmount
  };
  const userDetails = JSON.parse(
    localStorage.getItem('user') ??
      JSON.stringify({ id: 0, email: 'harshi@gmail.com', name: 'Harshitha' })
  );

  useEffect(() => {
    getUsersByEmail(userDetails.email).then((response) => setBalance(response.userBalance));
  }, []);

  const handleExecuteOrder = () => {
    const userDetails = JSON.parse(
      localStorage.getItem('user') ??
        JSON.stringify({ id: 0, email: 'harshi@gmail.com', name: 'Harshitha' })
    );

    localStorage.setItem('PurchaseDetails', JSON.stringify(PurchaseDetails));
    const tradeDetails = {
      date: new Date(),
      supplier: 1,
      status: isBuy ? 'Purchased' : 'Sold',
      quantity: coinAmount,
      value: currentPrice * coinAmount,
      coinId: walletCode === 'BTC' ? 1 : 2,
      deliveryFee: 0,
      depositedTo: `${getCoinName(walletCode)} wallet`,
      transactionFee: 1000,
      totalAmount: currentPrice * coinAmount + 1000,
      paymentMethod: 'USD Wallet',
      userId: userDetails.id,
      transactionStatus: 'Success'
    };
    postTrades(tradeDetails).then(() => {
      getUsersByEmail(userDetails.email).then((response) => setBalance(response.userBalance));
      updateUserByEmail(userDetails.email, {
        userBalance: isBuy
          ? balance - (currentPrice * coinAmount + 1000)
          : balance + (currentPrice * coinAmount + 1000)
      });
      updateWallets({
        userId: userDetails.id,
        coinId: coinId ?? 1,
        balance: isBuy ? coinAmount : -1 * coinAmount
      }).then(() => {
        navigate('/success');
      });
    });
  };

  return (
    <MainContainer container>
      <HeadContainer container>
        <TypographyComponent variant="caption1" color={theme.palette.textColor.medEmp}>
          {isBuy ? BUY_ORDER : SELL_ORDER}
        </TypographyComponent>
        <TypographyComponent color={theme.palette.textColor.highEmp} variant="h6">
          {`${coinAmount} ${walletCode}`}
        </TypographyComponent>
        <TypographyComponent color={theme.palette.textColor.medEmp} variant="caption1">
          {`1 ${walletCode} = $${formattedAmount(currentPrice)}`}
        </TypographyComponent>
      </HeadContainer>
      <DividerContainer>
        <Divider height="2px" />
      </DividerContainer>
      <StepperContainer>
        <TransactionStepper
          isBuy={isBuy}
          paymentText={paymentText}
          deliveryFees={deliveryFee}
          depositText={depositText}
          walletCode={walletCode}
        />
      </StepperContainer>
      <DividerContainer>
        <Divider height="2px" />
      </DividerContainer>
      <FooterContainer container>
        <TypographyContainer>
          <StyledTypography variant="overline">{`${coinAmount} ${walletCode}`}</StyledTypography>
          <Line />
          <StyledTypography variant="overline">{`$${formattedAmount(
            currentPrice
          )}`}</StyledTypography>
        </TypographyContainer>
        <TypographyContainer>
          <StyledTypography variant="overline">{TRANSACTION_FEE_TEXT}</StyledTypography>
          <Line />
          <StyledTypography variant="overline">{`$${formattedAmount(
            transactionFee
          )}`}</StyledTypography>
        </TypographyContainer>
        <TypographyContainer>
          <StyledTypography color={theme.palette.textColor.highEmp} variant="body1">
            {TOTAL}
          </StyledTypography>
          <Line />
          <StyledTypography
            color={theme.palette.textColor.highEmp}
            variant="body1">{`$${formattedAmount(
            currentPrice * coinAmount + transactionFee
          )}`}</StyledTypography>
        </TypographyContainer>
        <StyledButton
          onClick={handleExecuteOrder}
          sx={buttonSx}
          variant="contained"
          disabled={isBuy && currentPrice * coinAmount + 1000 >= balance}>
          {isBuy ? BUY_NOW : SELL_NOW}
        </StyledButton>
      </FooterContainer>
    </MainContainer>
  );
};

export default OrderSummary;
