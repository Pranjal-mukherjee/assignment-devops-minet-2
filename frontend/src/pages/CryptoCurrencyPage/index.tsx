import React, { useEffect, useState } from 'react';
import TradeScreenTemplate from '../../components/templates/TradeScreenTemplate/TradeScreen';
import NavBar from '../../components/organisms/NavBar';
import WatchListBar from '../../components/molecules/WatchlistBar';
import Tabs from '../../components/organisms/Tabs';
import CurrencyDetail from '../../components/organisms/CurrencyDetail';
import {
  GREEN_ARROW,
  NAME_ALT,
  OVERVIEW_TEXT,
  WALLET_TEXT,
  graph_data
} from '../../utils/constants';
import Bitcoin from '../../../public/assets/icons/bitcoin2.svg';
import GreenArrow from '../../../public/assets/icons/UpwardArrow.svg';
import { theme } from '../../theme';
import Wallet from '../../components/organisms/Wallet';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../../components/organisms/Header';
import { useCoinDetail } from './hooks';
import { CircularProgress, Grid } from '@mui/material';
import { formattedAmount, getUserData, handleWatchlist } from '../../utils/functions';
import { getTradesByUserId } from '../../services';
import { TradeData } from '../WalletCashPage';
import { useParams } from 'react-router-dom';

const CryptoCurrencyPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { coinNameURL } = useParams();
  const coinName = state;

  const [walletData, setWalletData] = useState<TradeData[]>([]);
  const [cryptoBalance, setCryptoBalance] = useState<number>(0);
  const [value, setValue] = useState<number>(0);

  const handlePurchaseScreen = (coinName: string) => {
    navigate('/purchase', { state: coinName });
  };

  const handleSellScreen = (coinName: string) => {
    navigate('/sell', { state: coinName });
  };

  const { coinData, isLoading } = useCoinDetail(
    `${coinNameURL?.charAt(0).toUpperCase()}${coinNameURL?.slice(1)}`
  );
  const userDetails = getUserData();

  useEffect(() => {
    getTradesByUserId(userDetails?.id).then((response) => {
      const filteredTrades = response.filter((trade: TradeData) => trade.coinId === coinData?.id);
      setWalletData(filteredTrades);

      let balance = 0;
      let amount = 0;
      filteredTrades.map((trade: TradeData) => {
        if (trade.status === 'Purchased') {
          balance += trade.quantity;
          amount += trade.value;
        } else {
          balance -= trade.quantity;
          amount -= trade.value;
        }
      });
      setCryptoBalance(balance);
      setValue(amount);
    });
  }, [coinData]);

  return (
    <TradeScreenTemplate
      header={
        <Header
          pageName={'Trade'}
          displayButtons={true}
          onBuy={() => handlePurchaseScreen(coinName)}
          onSell={() => handleSellScreen(coinName)}
        />
      }
      navbar={<NavBar />}
      watchlistBar={true}
      watchList={
        isLoading ? (
          <Grid item xs={12} alignSelf={'center'}>
            <CircularProgress />
          </Grid>
        ) : (
          <WatchListBar
            marketCap={`${coinData?.marketCap}T`}
            dayVolumeChange={`${coinData?.volume}T`}
            circulatingSupply={`${coinData?.circulatingSupply}M ${coinData?.symbol}`}
            firstText={coinData?.name}
            secondText={coinData?.symbol}
            coinIcon={Bitcoin}
            changeData={`${coinData?.changeData}%`}
            changeIcon={GreenArrow}
            changeIconAlt={GREEN_ARROW}
            thirdTextColor={theme.palette.success[500]}
            handleWatchListButton={()=> {handleWatchlist(coinData?.id)}}
          />
        )
      }
      innerBody={
        isLoading ? (
          <Grid item xs={12} alignSelf={'center'}>
            <CircularProgress />
          </Grid>
        ) : (
          <Tabs
            firstLabel={OVERVIEW_TEXT}
            secondLabel={WALLET_TEXT}
            firstData={
              <CurrencyDetail
                data={graph_data}
                baseDataKey={NAME_ALT}
                firstDataKey={''}
                secondDataKey={coinNameURL}
                firstColor={theme.palette.gray.white}
                currentPrice={`$${formattedAmount(coinData?.price)}`}
                changeIcon={GreenArrow}
                changeData={`${coinData?.changeData}%`}
                changeDataColor={theme.palette.success[500]}
                changeIconAlt={GREEN_ARROW}
              />
            }
            secondData={
              <Wallet
                totalBalance={`${formattedAmount(cryptoBalance)} ${
                  coinData.symbol
                } ($${formattedAmount(value)})`}
                walletData={walletData}
              />
            }
          />
        )
      }
    />
  );
};

export default CryptoCurrencyPage;
