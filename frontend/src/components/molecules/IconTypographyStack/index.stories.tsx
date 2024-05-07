import type { Meta, StoryObj } from "@storybook/react";
import IconTypographyStack from ".";
import BitCoin from "../../../../public/assets/images/bitcoin.svg"
import GreenArrow from "../../../../public/assets/images/greenArrow.svg";
import { BITCOIN_ALT, BITCOIN_CODE_ALT, MARKET_CAP_ALT } from "../../../utils/constants";
import { theme } from "../../../theme";

const meta = {
  title: "Molecules/IconTypographyStack",
  component: IconTypographyStack,
} satisfies Meta<typeof IconTypographyStack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TypographyStack: Story = {
  args: {
        firstText: MARKET_CAP_ALT,
        secondText: "$64.2T",
        firstTextVariant: "caption1",
        firstTextColor: theme.palette.textColor.medEmp,
        secondTextVariant: "body1",
        secondTextColor: theme.palette.textColor.highEmp
  },
};

export const IconWithTypographyChangeStack: Story = {
    args: {
        coinIcon: BitCoin,
        coinIconAlt: BITCOIN_ALT,
        firstText: BITCOIN_ALT,
        secondText: BITCOIN_CODE_ALT,
        changeIcon: GreenArrow,
        changeData: "+8.2%",
        firstTextVariant: "h6",
        firstTextColor: theme.palette.gray[500],
        secondTextVariant: "body1",
        secondTextColor: theme.palette.textColor.medEmp,
        thirdTextVariant: "overline",
        thirdTextColor: theme.palette.success[500]
    }
}
export const IconWithTypographyStack : Story={
    args: {
        coinIcon: BitCoin,
        coinIconAlt: BITCOIN_ALT,
        firstText: BITCOIN_ALT,
        secondText: BITCOIN_CODE_ALT,
        firstTextVariant: "body1",
        firstTextColor: theme.palette.textColor.highEmp,
        secondTextVariant: "overline",
        secondTextColor: theme.palette.textColor.medEmp
    }
}


export const DashboardIconWithTypographyStack : Story={
    args: {
      dashboard: true,
        firstText: "Total Investment",
        secondText: "$ 0.00",
        firstTextVariant: "caption1",
        firstTextColor: theme.palette.textColor.medEmp,
        secondTextVariant: "h6",
        secondTextColor: theme.palette.textColor.medEmp,
        thirdTextVariant: "overline",
        thirdTextColor: theme.palette.success[500],
        changeIcon: GreenArrow,
        changeData: "+8.2%",
    }
}
