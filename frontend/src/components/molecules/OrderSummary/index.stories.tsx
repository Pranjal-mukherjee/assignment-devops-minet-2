import type { Meta, StoryObj } from '@storybook/react';
import OrderSummary from '.';
const meta = {
  title: 'Molecules/OrderSummary',
  component: OrderSummary,
  argTypes: { handleExecuteOrder: { action: 'Execute Order Button Clicked' } }
} satisfies Meta<typeof OrderSummary>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Purchase: Story = {
  args: {
    isBuy: true,
    coinAmount: 0.023451,
    currentPrice: 3406069.54,
    paymentText: 'Visa credit ...8845',
    depositText: 'Bitcoin wallet',
    walletCode: 'BTC',
    deliveryFee: 0.001,
    transactionFee: 1000
  }
};

export const Sell: Story = {
  args: {
    isBuy: false,
    coinAmount: 0.023451,
    currentPrice: 3406069.54,
    paymentText: 'Visa credit ...8845',
    depositText: 'Bitcoin wallet',
    walletCode: 'BTC',
    deliveryFee: 0.001,
    transactionFee: 1000
  }
};
