import { Meta, StoryFn } from '@storybook/react';
import TransactionStepper, { TransactionStepperProps } from '.';
import { Stack } from '@mui/material';

const meta: Meta = {
  title: 'Molecules/TransactionStepper',
  component: TransactionStepper
};
export default meta;
const Template: StoryFn<TransactionStepperProps> = (args) => (
  <Stack width="215px" height="206px">
    <TransactionStepper {...args} />
  </Stack>
);

export const BuyStepper = Template.bind({});
BuyStepper.args = {
  isBuy: true,
  walletCode: 'ETH',
  paymentText: 'Visa credit ...8845',
  depositText: 'Etherium wallet',
  deliveryFees: 0.005
};

export const SellStepper = Template.bind({});
SellStepper.args = {
  isBuy: false,
  walletCode: 'ETH',
  paymentText: 'Bitcoin wallet',
  depositText: 'Rupee Coin',
  deliveryFees: 0.005
};
