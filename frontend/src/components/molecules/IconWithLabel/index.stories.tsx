import type { Meta, StoryObj } from "@storybook/react";
import IconWithLabel from ".";
import LeftArrowImage from "../../../../public/assets/images/chevronLeft.svg";
import InfoImage from "../../../../public/assets/images/info.svg";
import { CHEVRON_LEFT_ALT, COIN_INFO_TEXT, DISCOVER_ASSETS, INFO_ALT } from '../../../utils/constants';
import { theme } from "../../../theme";
const meta = {
  title: "Molecules/IconWithLabel",
  component: IconWithLabel,
} satisfies Meta<typeof IconWithLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const IconFirst: Story = {
  args: {
    start: true,
    iconSrc: InfoImage,
    iconAlt: INFO_ALT,
    text: COIN_INFO_TEXT,
    variant: "caption2",
  },
};

export const IconLast: Story = {
  args: {
    start: false,
    iconSrc: LeftArrowImage,
    iconAlt: CHEVRON_LEFT_ALT,
    text: DISCOVER_ASSETS,
    variant: "caption1",
    color: theme.palette.primary[500]
  },
};