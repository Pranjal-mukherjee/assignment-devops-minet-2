import React from "react";
import {  Meta, StoryFn } from "@storybook/react";
import Bitcoin from "../../../../public/assets/images/bitcoin.svg"
import Ethereum2 from "../../../../public/assets/images/ethereum.svg"
import TradeCard, { TradeCardProps } from ".";


export default {
  title: "molecules/TradeCard",
  component: TradeCard,
} as Meta;

const Template: StoryFn<TradeCardProps> = (args) => (
  <TradeCard {...args} />
);

export const BitcoinTradeCard = Template.bind({});
BitcoinTradeCard.args = {
  src: Bitcoin,
  coinHeight: "42px",
  coinWidth: "42px",
  coinName: "Bitcoin",
  coinCode: "BTC",
  priceChange: "+6.2%",
  price: 3285553,
  marketCap: "$60.1T",
};

export const EthereumTradeCard= Template.bind({});
EthereumTradeCard.args = {
  src: Ethereum2,
  coinHeight: "42px",
  coinWidth: "42px",
  coinName: "Ethereum 2",
  coinCode: "ETH2",
  priceChange: "-5.49%",
  price: 216678.10,
  marketCap: "$25.4T",
};
