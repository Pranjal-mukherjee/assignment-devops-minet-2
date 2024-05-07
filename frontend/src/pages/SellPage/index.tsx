import BalanceInfo from '../../components/molecules/BalanceInfo';
import OrderSummary from '../../components/molecules/OrderSummary';
import AmountDetail from '../../components/organisms/AmountDetail';
import ChooseCrypto from '../../components/organisms/ChooseCrypto';
import NavBar from '../../components/organisms/NavBar';
import CheckoutTemplate from '../../components/templates/CheckoutTemplate';
import { SELL_CRYPTO_ALT, USD_COIN_CASH, cryptoDetailsData } from '../../utils/constants';
import Bitcoin from '../../../public/assets/images/bitcoin.svg';
import Ethereum from '../../../public/assets/images/ethereum.svg';
import Rupee from '../../../public/assets/images/rupee.svg';
import { theme } from '../../theme';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCryptoDetailByName, getTradesByUserId, getUsersByEmail } from '../../services';
import { getUserData } from '../../utils/functions';
import { TradeData } from '../WalletCashPage';
import { useCoinDetail } from '../CryptoCurrencyPage/hooks';

export interface CryptoCoins {
  id: number;
  name: string;
  price: number;
  market_cap: number;
  symbol: string;
  description: string;
  circulating_supply: number;
  volume: number;
}

const SellPage = () => {
  const { state } = useLocation();
  let coinName = state;
  coinName = `${coinName?.charAt(0).toUpperCase()}${coinName?.slice(1)}`;

  const [coinAmount, setCoinAmount] = useState<number>(0);
  const [cryptoBalance, setCryptoBalance] = useState<number>(0);

  const [coinsData, setCoinsData] = useState<CryptoCoins>({
    id: 1,
    name: 'Bitcoin',
    price: 3285553.73,
    market_cap: 60.1,
    symbol: 'BTC',
    description: 'Bitcoin',
    circulating_supply: 18.8,
    volume: 2.9
  });
  const [user, setUser] = useState({
    id: 1,
    name: 'Emma',
    email: 'emma@gmail.com',
    user_balance: 500000,
    created_at: '2023-12-13'
  });
  const userDetails = getUserData();
  useEffect(() => {
    getCryptoDetailByName(coinName).then((response) => setCoinsData(response));
    getUsersByEmail(userDetails.email).then((response) => setUser(response));
  }, []);

  const { coinData } = useCoinDetail(`${coinName?.charAt(0).toUpperCase()}${coinName?.slice(1)}`);

  useEffect(() => {
    getTradesByUserId(userDetails?.id).then((response) => {
      const filteredTrades = response.filter((trade: TradeData) => trade.coinId === coinData?.id);

      let balance = 0;
      filteredTrades.map((trade: TradeData) => {
        if (trade.status === 'Purchased') {
          balance += trade.quantity;
        } else {
          balance -= trade.quantity;
        }
      });
      setCryptoBalance(balance);
    });
  }, [coinData]);

  const handleAmountChange = (amount: number) => {
    setCoinAmount(amount);
  };
  return (
    <CheckoutTemplate
      navbar={<NavBar />}
      orderSummary={
        <OrderSummary
          isBuy={false}
          coinAmount={coinAmount}
          currentPrice={coinsData.price}
          paymentText={` ${coinName} wallet`}
          depositText={'Rupee Coin'}
          walletCode={state === 'bitcoin' ? 'BTC' : 'ETH'}
          deliveryFee={0.001}
          transactionFee={1000}
          coinId={coinsData.id}
        />
      }
      buyCrypto={<ChooseCrypto cryptoData={cryptoDetailsData} activeIcon={coinName} />}
      amountDetails={
        <AmountDetail
          buy={false}
          walletBalance={user.user_balance}
          cryptoBalance={cryptoBalance}
          cryptoCoinCode={coinsData.symbol}
          cryptoPrice={coinsData.price}
          transactionFee={1000.0}
          handleAmountChange={handleAmountChange}
        />
      }
      totalBalance={
        <BalanceInfo
          balance={cryptoBalance}
          symbol={coinsData.symbol}
          src={coinsData.id === 1 ? Bitcoin : Ethereum}
          coinName={coinsData.name}
          textColor={theme.palette.textColor.highEmp}
        />
      }
      speedDelivery={
        <BalanceInfo balance={'Default'} symbol={'Default'} src={Rupee} coinName={USD_COIN_CASH} />
      }
      header={SELL_CRYPTO_ALT}
    />
  );
};
export default SellPage;
