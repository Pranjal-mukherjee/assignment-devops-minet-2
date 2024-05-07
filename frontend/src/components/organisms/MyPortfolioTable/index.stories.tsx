import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { MyPortfolioTable, MyPortfolioTableProps } from '.';
import bitcoin from '../../../../public/assets/images/bitcoin.svg';
import ethereum from '../../../../public/assets/images/ethereum.svg';
import tether from '../../../../public/assets/icons/TetherCoin.svg';
import xrp from '../../../../public/assets/icons/XrpCoin.svg';

export default {
  title: 'Organisms/MyPortfolioTable',
  component: MyPortfolioTable
} as Meta;

const Template: StoryFn<MyPortfolioTableProps> = (args) => <MyPortfolioTable {...args} />;

export const Default = Template.bind({});
Default.args = {
  MyPortfolioTableData: [
    {
      id: 1,
      src: bitcoin,
      coinName: 'Bitcoin',
      shortForm: 'BTC',
      amount: 0,
      percentage: 0
    },
    {
      id: 2,
      src: ethereum,
      coinName: 'Ethereum',
      shortForm: 'ETH',
      amount: 0,
      percentage: 0
    },
    {
      id: 3,
      src: tether,
      coinName: 'Tether',
      shortForm: 'USDT',
      amount: 0,
      percentage: 0
    },
    {
      id: 4,
      src: xrp,
      coinName: 'XRP',
      shortForm: 'XRP',
      amount: 0,
      percentage: 0
    },
    {
      id: 5,
      src: xrp,
      coinName: 'XRP',
      shortForm: 'XRP',
      amount: 0,
      percentage: 0
    }
  ],
  balance:0.00
};

export const Secondary = Template.bind({});
Secondary.args = {
  MyPortfolioTableData: [
    {
      id: 1,
      src: bitcoin,
      coinName: 'Bitcoin',
      shortForm: 'BTC',
      amount: 340,
      percentage: 1.6
    },
    {
      id: 2,
      src: ethereum,
      coinName: 'Ethereum',
      shortForm: 'ETH',
      amount: 294,
      percentage: 6.89
    },
    {
      id: 3,
      src: tether,
      coinName: 'Tether',
      shortForm: 'USDT',
      amount: 105,
      percentage: -1.2
    }
  ],
  balance: 149
};
