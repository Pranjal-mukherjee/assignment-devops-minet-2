import { Outerbox } from '../../components/molecules/BalanceInfo';
import AmountDetail from '../../components/organisms/AmountDetail';
import ChooseCrypto from '../../components/organisms/ChooseCrypto';
import NavBar from '../../components/organisms/NavBar';
import SpeedDelivery from '../../components/organisms/SpeedDelivery';
import CheckoutTemplate from '../../components/templates/CheckoutTemplate';
import {
  BUY_CRYPTO_ALT,
  DEFAULT_TEXT,
  PAYMENT_METHOD,
  RUPEE_COIN_ALT,
  USD_COIN_CASH,
  cryptoDetailsData
} from '../../utils/constants';
import OrderSummary from '../../components/molecules/OrderSummary';
import WalletCard from '../../components/molecules/WalletCard';
import { theme } from '../../theme';
import TypographyComponent from '../../components/atoms/Typography';
import { InnerCashBox } from '../../utils/styledComponents';
import Rupee from '../../../public/assets/icons/SmallRupee.svg';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCryptoDetailByName, getUsersByEmail } from '../../services';
import { formattedAmount, getUserData } from '../../utils/functions';

export interface CryptoCoins {
  id: number;
  name: string;
  price: number;
  marketCap: number;
  symbol: string;
  description: string;
  circulatingSupply: number;
  volume: number;
}
const BuyPage = () => {
  const { state } = useLocation();
  let coinName = state;
  coinName = `${coinName?.charAt(0).toUpperCase()}${coinName?.slice(1)}`;

  const [coinAmount, setCoinAmount] = useState<number>(0);

  const [coinsData, setCoinsData] = useState<CryptoCoins>({
    id: 1,
    name: 'Bitcoin',
    price: 3285553.73,
    marketCap: 60.1,
    symbol: 'BTC',
    description: 'Bitcoin',
    circulatingSupply: 18.8,
    volume: 2.9
  });

  const handleAmountChange = (amount: number) => {
    setCoinAmount(amount);
  };
  useEffect(() => {
    getCryptoDetailByName(coinName).then((response) => setCoinsData(response));
    getUsersByEmail(userDetails.email).then((response) =>
      setUser({
        id: response.id,
        name: response.name,
        email: response.email,
        userBalance: response.userBalance,
        createdAt: response.createdAt
      })
    );
  }, []);

  const [user, setUser] = useState({
    id: 1,
    name: 'Emma',
    email: 'emma@gmail.com',
    userBalance: 500000,
    createdAt: '2023-12-13'
  });
  const userDetails = getUserData();

  return (
    <CheckoutTemplate
      navbar={<NavBar />}
      buyCrypto={<ChooseCrypto activeIcon={coinName} cryptoData={cryptoDetailsData} />}
      totalBalance={
        <Outerbox>
          <TypographyComponent
            variant="body1"
            color={theme.palette.textColor.highEmp}
            paddingLeft="24px">
            {PAYMENT_METHOD}
          </TypographyComponent>
          <InnerCashBox>
            <WalletCard
              src={Rupee}
              alt={RUPEE_COIN_ALT}
              firstText={USD_COIN_CASH}
              firstTextVariant={'caption1'}
              firstTextColor={theme.palette.textColor.highEmp}
              secondText={`Total Balance - $${formattedAmount(user.userBalance)}`}
              secondTextColor={theme.palette.textColor.medEmp}
              secondTextVariant={'subtitle1'}
              thirdText={DEFAULT_TEXT}
              thirdTextColor={theme.palette.textColor.medEmp}
              thirdTextVariant={'caption1'}
            />
          </InnerCashBox>
        </Outerbox>
      }
      amountDetails={
        <AmountDetail
          buy={true}
          walletBalance={user.userBalance - 1}
          cryptoBalance={0.0}
          cryptoCoinCode={coinsData.symbol}
          cryptoPrice={coinsData.price}
          transactionFee={1000}
          handleAmountChange={handleAmountChange}
        />
      }
      speedDelivery={<SpeedDelivery />}
      orderSummary={
        <OrderSummary
          isBuy={true}
          coinAmount={coinAmount}
          currentPrice={coinsData.price}
          paymentText={'Visa credit ...8845'}
          depositText={` ${state?.charAt(0).toUpperCase()}${state?.slice(1)} wallet`}
          walletCode={state === 'bitcoin' ? 'BTC' : 'ETH'}
          deliveryFee={0.001}
          transactionFee={1000}
          coinId={coinsData?.id}
        />
      }
      header={BUY_CRYPTO_ALT}
    />
  );
};
export default BuyPage;
