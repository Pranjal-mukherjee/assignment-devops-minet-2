
import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import BalanceInfo, { BalnceMethodProps } from ".";
import bitcoin  from "../../../../public/assets/images/bitcoin.svg";
import ethereum  from "../../../../public/assets/images/ethereum.svg";


export default {
  title: "molecules/BalanceInfo",
  component: BalanceInfo,
} as Meta;

const Template: StoryFn<BalnceMethodProps> = (args) => <BalanceInfo {...args} />;

export const Bitcoin = Template.bind({});
Bitcoin.args = {
  balance: 0.0234510,
  coinName: "Bitcoin",
  symbol: "BTC",
  src: bitcoin,
};

export const Ethereum = Template.bind({});
Ethereum.args = {
  balance: 0.5234510,
  coinName: "Ethereum",
  symbol: "ETH",
  src: ethereum,
};





