import type { Meta, StoryObj } from '@storybook/react';
import CheckoutSuccess from '.';
import SuccessImage from '../../../../public/assets/images/successTick.svg';

const meta = {
  title: 'Molecules/CheckoutSuccess',
  component: CheckoutSuccess
} satisfies Meta<typeof CheckoutSuccess>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Purchase: Story = {
  args: {
    src: SuccessImage,
    alt: 'Success',
    buy: true,
    amount: '0.0234510 BTC'
  }
};

export const Sell: Story = {
  args: {
    src: SuccessImage,
    alt: 'Success',
    buy: false,
    amount: '0.0234510 BTC'
  }
};
