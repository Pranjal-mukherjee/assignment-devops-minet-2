import React from "react";
import {  Meta, StoryFn } from "@storybook/react";
import { WatchListGraphProps } from "../../molecules/WatchListGraph";
import Bitcoin from "../../../../public/assets/images/bitcoin.svg"
import Ethereum from "../../../../public/assets/images/ethereumCoin.svg"
import { data } from "../../../utils/constants";
import { Stack } from "@mui/material";
import DashBoardWatchList, { DashBoardWatchListProps } from ".";

export default {
  title: "organisms/DashBoardWatchList",
  component: DashBoardWatchList
} as Meta;

 const cardProps: WatchListGraphProps[] = [
    {
      cryptoIcon: Bitcoin,
      cryptoName: "Bitcoin",
      cryptoValue: 300439.93,
      changeCryptoData: "+2.3%",
      data:data
    },
    {
        cryptoIcon: Ethereum,
        cryptoName: "Ethereum",
        cryptoValue: 1297.24,
        changeCryptoData: "+2.3%",
        data:data
    }
  ];

const Template: StoryFn<DashBoardWatchListProps> = (args) => (
  <Stack width="840px" >
    <DashBoardWatchList {...args}/>
    </Stack>
);

export const SingleGragh = Template.bind({});
SingleGragh.args={
    cardProps: cardProps.slice(0, 1),
}


export const DoubleGragh = Template.bind({});
DoubleGragh.args={
    cardProps: cardProps.slice(0, 2),
}

