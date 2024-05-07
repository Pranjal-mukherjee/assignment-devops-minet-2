import { Meta, StoryFn } from '@storybook/react';
import { WalletTransactionCard, WalletTransactionCardProps } from '.';
import success from '../../../../public/assets/images/successTick.svg';
import error from '../../../../public/assets/images/error.svg';
import warning from '../../../../public/assets/images/warning.svg';

const meta: Meta = {
  title: 'Molecules/WalletTransactionCard',
  component: WalletTransactionCard
};
export default meta;
const Template: StoryFn<WalletTransactionCardProps> = (args) => <WalletTransactionCard {...args} />;

export const Warning = Template.bind({});
Warning.args = {
  date: '2023-02-28',
  src: warning,
  coinType: 'Bitcoin',
  userName: 'From Badgley',
  label: 'Purchased',
  value: '+0.0010 BTC',
  subValue: '+$900'
};
export const Error = Template.bind({});
Error.args = {
  date: '2023-02-25',
  src: error,
  coinType: 'Bitcoin',
  userName: 'From Jane Cooper',
  label: 'Purchased',
  value: '+0.0230 BTC',
  subValue: '+$1,800'
};

export const Success = Template.bind({});
Success.args = {
  date: '2023-02-20',
  src: success,
  coinType: 'Bitcoin',
  userName: 'From Leslie Alexander',
  label: 'Purchased',
  value: '+0.0030 BTC',
  subValue: '+$1,200'
};
