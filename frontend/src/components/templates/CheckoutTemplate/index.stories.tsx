import type { Meta, StoryObj } from '@storybook/react';
import CheckoutTemplate from '.';
import ChooseCrypto from '../../organisms/ChooseCrypto';
import { cryptoDetailsData } from '../../../utils/constants';
import BalanceInfo from '../../molecules/BalanceInfo';
import bitcoin from '../../../../public/assets/images/bitcoin.svg';
import AmountDetail from '../../organisms/AmountDetail';
import TypographyComponent from '../../atoms/Typography';
import { NavBar } from '../../organisms/NavBar';
import OrderSummary from '../../molecules/OrderSummary';

const meta = {
  title: 'Templates/CheckoutTemplate',
  component: CheckoutTemplate
} satisfies Meta<typeof CheckoutTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Purchase: Story = {
  args: {
    buyCrypto: <ChooseCrypto activeIcon="Bitcoin" cryptoData={cryptoDetailsData} />,
    totalBalance: <BalanceInfo balance={0.023451} coinName="Bitcoin" symbol="BTC" src={bitcoin} />,
    amountDetails: (
      <AmountDetail
        buy={true}
        walletBalance={34000}
        cryptoBalance={0.023451}
        cryptoCoinCode="BTC"
        cryptoPrice={3406069.54}
        transactionFee={1000}
      />
    ),
    speedDelivery: <TypographyComponent variant="h6">Speed</TypographyComponent>,
    navbar: <NavBar />,
    orderSummary: (
      <OrderSummary
        isBuy={false}
        coinAmount={0}
        currentPrice={0}
        paymentText={''}
        depositText={''}
        walletCode={''}
        deliveryFee={0}
        transactionFee={0}
        handleExecuteOrder={() => console.log('hello')}
      />
    )
  }
};
