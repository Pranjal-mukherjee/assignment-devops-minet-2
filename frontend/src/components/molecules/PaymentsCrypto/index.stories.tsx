import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Bitcoin from '../../../../public/assets/images/bitcoin.svg';
import Ethereum from '../../../../public/assets/images/ethereum.svg';
import PaymentsCrypto, { PaymentsCryptoProps } from '.';
import { Stack } from '@mui/material';

export default {
  title: 'molecules/PaymentsCrypto',
  component: PaymentsCrypto
} as Meta;

const Template: StoryFn<PaymentsCryptoProps> = (args) =>
<Stack margin="30px" width="200px" height="200px">
 <PaymentsCrypto{...args} />
 </Stack>
 ;

export const BitcoinSelected= Template.bind({});
BitcoinSelected.args = {
  src: Bitcoin,
  alt: 'bitcoin',
  text:"Bitcoin" ,
  subText:3406069.54,
  isSelected:true
};

export const EthereumNotSelected = Template.bind({});
EthereumNotSelected.args = {
    src:Ethereum,
    alt:"ethereum",
    text:"Ethereum",
    subText:1297.93
};

