import IconTypographyStack from '../../components/molecules/IconTypographyStack';
import { MainContainer, StyledButton } from '../../components/molecules/WatchlistBar/style';
import NavBar from '../../components/organisms/NavBar';
import Wallet from '../../components/organisms/Wallet';
import TradeScreenTemplate from '../../components/templates/TradeScreenTemplate/TradeScreen';
import rupee from '../../../public/assets/icons/rupee.svg';
import { theme } from '../../theme';
import {
  InnerWatchListContainer,
  StyledButtonContainer,
  StyledWalletText
} from '../../utils/styledComponents';
import {
  CASH_DEPOSIT_TEXT,
  CASH_TEXT,
  CASH_WITHDRAWAL_TEXT,
  USD_COIN_TEXT,
  WALLET_TEXT
} from '../../utils/constants';
import { Box } from '@mui/material';
import { getTradesByUserId, getUsersByEmail } from '../../services';
import { useEffect, useState } from 'react';
import { formattedAmount, getUserData } from '../../utils/functions';

export interface TradeData {
  id: number;
  date: string;
  supplier: number;
  status: string;
  quantity: number;
  value: number;
  coinId: number;
  deliveryFee: number;
  depositedTo: string;
  transactionFee: number;
  totalAmount: number;
  paymentMethod: string;
  userId: number;
  transactionStatus: string;
}

const WalletCashPage = () => {
  const [tradeData, setTradeData] = useState<TradeData[]>([]);
  const [balance, setBalance] = useState(0);
  const userDetails = getUserData();
  useEffect(() => {
    getTradesByUserId(userDetails.id).then((response) => setTradeData(response));
    getUsersByEmail(userDetails.email).then((response) => setBalance(response.userBalance));
  }, []);

  return (
    <TradeScreenTemplate
      navbar={<NavBar />}
      watchlistBar={true}
      watchList={
        <>
          <Box>
            <MainContainer>
              <InnerWatchListContainer>
                <IconTypographyStack
                  firstText={USD_COIN_TEXT}
                  secondText={CASH_TEXT}
                  coinIcon={rupee}
                  firstTextVariant="h6"
                  firstTextColor={theme.palette.gray[500]}
                  secondTextVariant="body1"
                  secondTextColor={theme.palette.textColor.medEmp}
                />
                <StyledButtonContainer>
                  <StyledButton children={CASH_DEPOSIT_TEXT} variant="outlined" />
                  <StyledButton children={CASH_WITHDRAWAL_TEXT} variant="outlined" />
                </StyledButtonContainer>
              </InnerWatchListContainer>
            </MainContainer>
          </Box>
          <StyledWalletText variant="subtitle2">{WALLET_TEXT}</StyledWalletText>
        </>
      }
      innerBody={<Wallet totalBalance={`$${formattedAmount(balance)}`} walletData={tradeData} />}
    />
  );
};
export default WalletCashPage;
