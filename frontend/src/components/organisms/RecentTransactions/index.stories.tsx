import React from "react";
import {  Meta, StoryFn } from "@storybook/react";
import { Stack, styled } from "@mui/material";
import RecentTransactions, { RecentTransactionsProps } from ".";
import TransactionStateImage from "../../../../public/assets/images/transactionState.svg"
import { PURCHASED_TEXT, SOLD_TEXT, TRANSACTION_SUCCESS_ALT } from "../../../utils/constants";

export default {
  title: "organisms/RecentTransactions",
  component: RecentTransactions
} as Meta;

const StyledStack=styled(Stack)({
    width:"398px"
})
const Template: StoryFn<RecentTransactionsProps> = (args) => (
  <StyledStack>
    <RecentTransactions {...args}/>
    </StyledStack>
);

export const EmptyTransaction = Template.bind({});
EmptyTransaction.args={
    isDataPresent:false
}

export const RecentTransaction=Template.bind({});
RecentTransaction.args={
    isDataPresent:true,
    transactionData:[
        { 
                date: "June 14",
                coinName: "Bitcoin BTC",
                transactionType: PURCHASED_TEXT,
                coinAmount: "+0.0010 BTC",
                usdAmount: "-$34,000.0",
                src: TransactionStateImage,
                alt: TRANSACTION_SUCCESS_ALT
        },
        {
            date: "June 23",
            coinName: "Bitcoin BTC",
            transactionType: SOLD_TEXT,
            coinAmount: "-0.0010 BTC",
            usdAmount: "+$34,000.0",
            src: TransactionStateImage,
            alt: TRANSACTION_SUCCESS_ALT
        },

    ]
}
