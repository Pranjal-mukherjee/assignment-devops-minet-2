import type { Meta, StoryObj } from '@storybook/react';
import AmountDetail from '.';
const meta = {
  title: 'Organisms/AmountDetail',
  component: AmountDetail
} satisfies Meta<typeof AmountDetail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Purchase: Story = {
  args: {
    buy: true,
    walletBalance: 340000,
    cryptoBalance: 0.023451,
    cryptoCoinCode: 'BTC',
    cryptoPrice: 3406069.54,
    transactionFee: 1000
  }
};

export const Sell: Story = {
  args: {
    buy: false,
    walletBalance: 340000,
    cryptoBalance: 0.023451,
    cryptoCoinCode: 'BTC',
    cryptoPrice: 3406069.54,
    transactionFee: 1000
  }
};
