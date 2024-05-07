import React from "react";
import {  Meta, StoryFn } from "@storybook/react";
import CryptoSelector from ".";
import { Stack } from "@mui/material";

export default {
  title: "organisms/CryptoSelector",
  component: CryptoSelector,
} as Meta;

const Template: StoryFn = () => (
    <Stack width="840px">
  <CryptoSelector  />
  </Stack>
);

export const BitcoinTradeCard = Template.bind({});
