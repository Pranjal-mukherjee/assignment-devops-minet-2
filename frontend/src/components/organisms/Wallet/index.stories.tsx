import { Meta, StoryFn } from '@storybook/react';
import { Wallet, WalletProps } from '.';
import { TOTAL_BALANCE_AMOUNT, WalletData } from '../../../utils/constants';

const meta: Meta = {
  title: 'Organisms/Wallet',
  component: Wallet
};
export default meta;
const Template: StoryFn<WalletProps> = (args) => <Wallet {...args} />;

export const WalletTab = Template.bind({});
WalletTab.args = {
  totalBalance: TOTAL_BALANCE_AMOUNT,
  walletData: WalletData
};
