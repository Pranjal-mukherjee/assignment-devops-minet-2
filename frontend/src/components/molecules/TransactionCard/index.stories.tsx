import type { Meta, StoryObj } from "@storybook/react";
import TransactionCard from ".";
import { PURCHASED_TEXT, SOLD_TEXT } from "../../../utils/constants";
import { Stack, styled } from "@mui/material";
const meta = {
  title: "Molecules/TransactionCard",
  component: TransactionCard,
} satisfies Meta<typeof TransactionCard>;

export default meta;
type Story = StoryObj<typeof meta>;
const CardStack = styled(Stack)({
  width: "398px",
});

export const Purchased: Story = {
  args: {
        date: "2023-06-24",
        transactionType: PURCHASED_TEXT,
        coinAmount: "+0.0010 ",
        usdAmount: "-$34,000.0",
        coinId:1
    },
    decorators: [(Story) => <CardStack><Story /></CardStack>],
};

export const Sold: Story = {
  args: {
        date: "2023-06-23",
        transactionType: SOLD_TEXT,
        coinAmount: "-0.0010 ",
        usdAmount: "+$34,000.0",
        coinId:1
    },
    decorators: [(Story) => <CardStack><Story /></CardStack>],
};