import { Stack } from '@mui/material';
import CheckoutSuccess from '../../components/molecules/CheckoutSuccess';
import  NavBar  from '../../components/organisms/NavBar';
import TradeScreenTemplate from '../../components/templates/TradeScreenTemplate/TradeScreen';
import Success from '../../../public/assets/images/successTick.svg';

const CheckoutSuccessPage = () => {
  const details = JSON.parse(
    localStorage.getItem('PurchaseDetails') ??
      JSON.stringify({ type: 'buy', cryptoCoin: 'BTC', value: 0 })
  );
  const isBuy = details.type === 'buy';
  return (
    <TradeScreenTemplate
      pageName="Checkout"
      navbar={<NavBar />}
      innerBody={
        <Stack alignItems={'center'} justifyContent={'center'} height="65vh">
          <CheckoutSuccess
            src={Success}
            alt={'success'}
            buy={isBuy}
            amount={`${details.value} ${details.cryptoCoin}`}
          />
        </Stack>
      }
    />
  );
};
export default CheckoutSuccessPage;
