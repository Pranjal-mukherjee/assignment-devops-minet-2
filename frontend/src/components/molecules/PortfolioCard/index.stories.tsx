import React from 'react';
import PortfolioCard from '.';
import { StoryObj, Meta } from '@storybook/react';
import Bitcoin from '../../../../public/assets/images/bitcoin.svg';
import EthereumIcon from '../../../../public/assets/icons/EthereumIcon.svg';

const meta: Meta<typeof PortfolioCard> = {
  title: 'molecules/PortfolioCard',
  tags: ['autodocs'],
  component: PortfolioCard,
  argTypes: {
    iconSrc: { control: 'text' },
    coinName: { control: 'text' },
    coinShortForm: { control: 'text' },
    amount: { control: 'text' },
    percentage: { control: 'text' }
  }
};

export default meta;

type story = StoryObj<typeof PortfolioCard>;

export const bitcoin: story = {
  render: () => {
    return (
      <PortfolioCard
        iconSrc={Bitcoin}
        coinName="Bitcoin"
        coinShortForm="BTC"
        amount={0.0}
        percentage={0}
      />
    );
  }
};

export const ethereum: story = {
  render: () => {
    return (
      <PortfolioCard
        iconSrc={EthereumIcon}
        coinName="Ethereum"
        coinShortForm="ETH"
        amount={1}
        percentage={-1}
      />
    );
  }
};
