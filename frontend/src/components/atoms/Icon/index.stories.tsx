import { Meta, StoryFn } from "@storybook/react";
import Notification from  "../../../../public/assets/images/notification.svg"
import Portfolio from "../../../../public/assets/images/portfolio.svg";
import Trade from "../../../../public/assets/images/trade.svg";
import IconComponent, { IconComponentProps } from ".";

const meta: Meta = {
  title: "Atoms/Icon",
  component: IconComponent,
};
export default meta;
const Template: StoryFn<IconComponentProps> = (args) => <IconComponent {...args} />;

export const NotificationIcon = Template.bind({});
NotificationIcon.args = {
  src: Notification,
  alt: "notification-icon",
  height: "20px",
  width: "20px",
};

export const TradeIcon = Template.bind({});
TradeIcon.args = {
  src: Trade,
  alt: "trade-icon",
  height: "20px",
  width: "20px",
};

export const PortfolioIcon = Template.bind({});
PortfolioIcon.args = {
  src: Portfolio,
  alt: "portfolio-icon",
  height: "20px",
  width: "20px",
};
