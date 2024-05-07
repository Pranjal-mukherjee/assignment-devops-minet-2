import type { Meta, StoryObj } from "@storybook/react";
import WalletCard from ".";
import { DEFAULT_TEXT, DUMMY_TOTAL_BALANCE, RUPEE_COIN_ALT, USD_COIN_CASH, USD_COIN_TEXT, USD_TEXT } from "../../../utils/constants";
import { theme } from "../../../theme";
import RupeeImage from "../../../../public/assets/images/rupee.svg"
import { Stack, styled } from "@mui/material";

const Container = styled(Stack)({
  width: "512px"
})
 

const meta = {
  title: "Molecules/WalletCard",
  component: WalletCard,
} satisfies Meta<typeof WalletCard>;

export default meta;
type Story = StoryObj<typeof meta>;

 const Primary: Story = {
  args: {
    src: RupeeImage,
    alt: RUPEE_COIN_ALT,
    firstText: USD_COIN_TEXT,
    firstTextVariant: "body1",
    firstTextColor: theme.palette.textColor.highEmp,
    secondText: USD_TEXT,
    secondTextColor: theme.palette.textColor.medEmp,
    secondTextVariant: "caption2",
    thirdText: "$0.00",
    thirdTextColor: theme.palette.textColor.highEmp,
    thirdTextVariant: "body1"
  },
};

const Secondary: Story = {
  args: {
    src: RupeeImage,
    alt: RUPEE_COIN_ALT,
    firstText: USD_COIN_CASH,
    firstTextVariant: "caption1",
    firstTextColor: theme.palette.textColor.highEmp,
    secondText: DUMMY_TOTAL_BALANCE,
    secondTextColor: theme.palette.textColor.medEmp,
    secondTextVariant: "subtitle1",
    thirdText: DEFAULT_TEXT,
    thirdTextColor: theme.palette.textColor.medEmp,
    thirdTextVariant: "caption1"
  },
};
export const PrimaryWithContainer: Story = {
  args: Primary.args, 
  render: (args) => (
    <Container>
      <WalletCard {...args} />
    </Container>
  ),
};

export const SecondaryWithContainer: Story = {
  args: Secondary.args, 
  render: (args) => (
    <Container>
      <WalletCard {...args} />
    </Container>
  ),
};
