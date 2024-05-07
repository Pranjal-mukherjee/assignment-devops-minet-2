import React from "react";
import {  Meta, StoryFn } from "@storybook/react";
import Bitcoin from "../../../../public/assets/images/bitcoin.svg"
import Ethereum from "../../../../public/assets/images/ethereumCoin.svg"
import WatchListGraph, { WatchListGraphProps } from ".";
import { data } from "../../../utils/constants";
import { Stack } from "@mui/material";


export default {
  title: "molecules/WatchListGraph",
  component: WatchListGraph,
} as Meta;

const Template: StoryFn<WatchListGraphProps> = (args) => (
    <Stack width="408px" height="130px"> 
  <WatchListGraph {...args} />
 </Stack>
);

export const BitcoinGraph = Template.bind({});
BitcoinGraph.args = {
  cryptoIcon: Bitcoin,
  cryptoName: "Bitcoin",
  cryptoValue:300439.93,
  data:data,
  changeCryptoData:"+1.2%"
};

export const EthereumGraph = Template.bind({});
EthereumGraph.args = {
  cryptoIcon: Ethereum,
  cryptoName: "Ethereum",
  cryptoValue:1297.24,
  data:data,
  changeCryptoData:"-1.3%"
};

