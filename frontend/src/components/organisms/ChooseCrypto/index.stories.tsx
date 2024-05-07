import React from "react";
import {  Meta, StoryFn } from "@storybook/react";

import { Stack } from "@mui/material";
import ChooseCrypto, { ChooseCryptoProps } from ".";
import { cryptoDetailsData } from "../../../utils/constants";

export default {
  title: "organisms/ChooseCrypto",
  component: ChooseCrypto,
} as Meta;


const Template: StoryFn<ChooseCryptoProps>=(args) => (
    <Stack width="708px" height="414px">
   <ChooseCrypto {...args} />
   </Stack>
);

export const Default= Template.bind({});
Default.args={
    cryptoData:cryptoDetailsData,
    activeIcon:"Ethereum"
}

