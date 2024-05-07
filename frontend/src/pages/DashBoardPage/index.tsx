import { Box, Stack, styled } from '@mui/material';
import NavBar from '../../components/organisms/NavBar';
import { Dashboard } from '../../components/templates/DashboardTemplate/index.stories';
import DashBoardWatchList from '../../components/organisms/DashBoardWatchList';
import {
  DASHBOARD,
  DashboardData,
  INITIAL_BALANCE,
  INTIAL_PERCENTAGE,
  INTIAL_PRICE,
  MY_PORTFOLIO_VALUE,
  MY_WALLETS,
  MyPortfolioTableData,
  MyPortfolioUserTableData,
  TOTAL_INVESTEMENT,
  USD_COIN_TEXT,
  USD_TEXT,
  cardProps
} from '../../utils/constants';
import MyportfolioGraph from '../../components/organisms/MyPortfolioGraph';
import TypographyComponent from '../../components/atoms/Typography';
import IconComponent from '../../components/atoms/Icon';
import Chart from '../../../public/assets/images/chart.svg';
import Graph from '../../../public/assets/images/graph.svg';
import { theme } from '../../theme';
import MyPortfolioTable from '../../components/organisms/MyPortfolioTable';
import RecentTransactions from '../../components/organisms/RecentTransactions';
import WalletCard from '../../components/molecules/WalletCard';
import RupeeImage from '../../../public/assets/images/rupee.svg';
import { ITransactionCardProps } from '../../components/molecules/TransactionCard';
import { useEffect, useState } from 'react';
import { getTradesByUserId, getUsersByEmail, getWalletsByUserIdAndCryptoId } from '../../services';
import { formattedAmount, formattedDate, getUserData } from '../../utils/functions';

export interface TradeData {
  id: number;
  date: string;
  supplier: number;
  status: string;
  quantity: number;
  value: number;
  coinId: number;
  deliveryDee: number;
  depositedTo: string;
  transactionFee: number;
  totalAmount: number;
  paymentMethod: string;
  userId: number;
  transactionStatus: string;
}

const HeaderStack = styled(Stack)({
  justifyContent: 'space-between',
  width: '100%',
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: '4px'
});

const IconStack = styled(Stack)({
  alignItems: 'center',
  flexDirection: 'row'
});

const DashBoardBox = styled(Box)({
  width: '100%'
});

const GraphContainer = styled(Box)({
  width: '100%',
  gap: '10px'
});

const WalletsStack = styled(Stack)({
  width: '99%',
  margin: '24px 0px 16px 12px',
  gap: '12px'
});

const PortfolioStack = styled(Stack)({
  width: '95%',
  borderTop: `1px solid ${theme.palette.gray[100]}`,
  borderBottom: `1px solid ${theme.palette.gray[100]}`,
  borderLeft: `1px solid ${theme.palette.gray[100]}`,
  padding: '24px 24px',
  height: '85vh'
});

const PortfolioGragphContainer = styled(Stack)({
  flexDirection: 'column',
  gap: '12px'
});

const StyledIcon = styled(IconComponent)({
  width: '19px',
  height: '19px'
});

const StyledChartIcon = styled(IconComponent)({
  height: '32px',
  width: '32px'
});

const DashBoardPage = () => {
  const [userTrades, setUserTrades] = useState<ITransactionCardProps[]>([]);
  const [totalInvestment, setTotalInvestment] = useState<number>(0);
  const [myPortfolioUserTableData, setMyPortfolioUserTableData] =
    useState(MyPortfolioUserTableData);
  const [balance, setBalance] = useState<number>(0);

  const userDetails = getUserData();

  useEffect(() => {
    setTotalInvestment(INITIAL_BALANCE - balance);
  }, [balance]);

  useEffect(() => {
    getTradesByUserId(userDetails.id).then((response) => {
      const mappedUserTrades: ITransactionCardProps[] = response.map((trade: TradeData) => ({
        date: formattedDate(trade.date),
        transactionType: trade.status,
        coinAmount: `${trade.status === 'Sold' ? '-' : '+'}${trade.quantity}`,
        usdAmount: `${trade.status === 'Sold' ? '+' : '-'}${formattedAmount(trade.totalAmount)}`,
        coinId: trade.coinId
      }));

      getUsersByEmail(userDetails.email).then((response) => setBalance(response.userBalance));
      setUserTrades(mappedUserTrades);
    });

    let updatedData = myPortfolioUserTableData;
    getWalletsByUserIdAndCryptoId(userDetails.id, 1).then((response) => {
      if (response != null) {
        updatedData = updatedData.map((item) => {
          if (item.id === 1) {
            return {
              ...item,
              amount: response.balance * 32855
            };
          }
          return item;
        });
        setMyPortfolioUserTableData(updatedData);
      }
    });

    getWalletsByUserIdAndCryptoId(userDetails.id, 2).then((response) => {
      if (response.length !== 0) {
        updatedData = updatedData.map((item) => {
          if (item.id === 2) {
            return {
              ...item,
              amount: (response.balance ?? 0) * 216678
            };
          }
          return item;
        });

        setMyPortfolioUserTableData(updatedData);
      }
    });

    setMyPortfolioUserTableData(updatedData);
  }, []);

  return (
    <Dashboard
      middleComponent={
        <Stack flexDirection={'column'}>
          <DashBoardBox>
            <DashBoardWatchList cardProps={cardProps} />
          </DashBoardBox>
          <GraphContainer>
            <HeaderStack>
              <TypographyComponent variant="subtitle1" color={theme.palette.textColor.highEmp}>
                {MY_PORTFOLIO_VALUE}
              </TypographyComponent>
              <IconStack>
                <StyledChartIcon src={Chart} alt={'chart'} />
                <StyledIcon src={Graph} alt={'graph'} />
              </IconStack>
            </HeaderStack>
            {!userTrades.length ? (
              <MyportfolioGraph
                title={TOTAL_INVESTEMENT}
                value={INTIAL_PRICE}
                changePercentage1={INTIAL_PERCENTAGE}
                data={[]}
                newUser={false}
              />
            ) : (
              <PortfolioGragphContainer>
                <MyportfolioGraph
                  title={TOTAL_INVESTEMENT}
                  value={`$${formattedAmount(totalInvestment)}`}
                  changePercentage1={''}
                  data={DashboardData}
                  newUser={true}
                />
              </PortfolioGragphContainer>
            )}
          </GraphContainer>
        </Stack>
      }
      leftComponent={<NavBar />}
      pageName={DASHBOARD}
      displayButtons={true}
      rightComponent={
        <PortfolioStack>
          <MyPortfolioTable
            MyPortfolioTableData={
              userTrades.length ? myPortfolioUserTableData : MyPortfolioTableData
            }
            balance={balance}
          />

          <WalletsStack>
            <TypographyComponent color={theme.palette.textColor.highEmp} variant={'subtitle1'}>
              {MY_WALLETS}
            </TypographyComponent>
            <WalletCard
              src={RupeeImage}
              alt={'rupee-image'}
              firstText={USD_COIN_TEXT}
              firstTextVariant={'body1'}
              firstTextColor={theme.palette.textColor.highEmp}
              secondText={USD_TEXT}
              secondTextVariant={'caption2'}
              secondTextColor={theme.palette.textColor.medEmp}
              thirdText={`$${formattedAmount(balance)}`}
              thirdTextColor={theme.palette.textColor.highEmp}
              thirdTextVariant={'body1'}
            />
          </WalletsStack>
          <Stack width="100%" paddingBottom={'8px'} marginLeft={'0.7rem'}>
            {!userTrades.length ? (
              <RecentTransactions isDataPresent={false} />
            ) : (
              <RecentTransactions
                isDataPresent={true}
                transactionData={userTrades.slice(0, Math.min(userTrades.length, 2)).reverse()}
              />
            )}
          </Stack>
        </PortfolioStack>
      }
    />
  );
};
export default DashBoardPage;
