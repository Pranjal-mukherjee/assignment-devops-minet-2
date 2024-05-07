import React from "react";
import { type StoryFn, Meta } from "@storybook/react";
import ButtonComponent, { ButtonComponentProps } from "./index";
import { theme } from "../../../theme";
import TypographyComponent from "../Typography";
import WatchListStar from "../../../../public/assets/images/watchListStar.svg";

export default {
  title: "atoms/Button",
  component: ButtonComponent,
} as Meta;

const Template: StoryFn<ButtonComponentProps> = (args) => (
  <ButtonComponent {...args} />
);

export const SignIn = Template.bind({});
SignIn.args = {
  variant: "contained",
  sx:{
    backgroundColor:theme.palette.primary[500],
    width:"512px",
    height:"42px",
    Padding:"0px 16px 0px 16px",
    borderRadius:"4px"
  },
  children: <TypographyComponent variant="button">Sign In</TypographyComponent>

};

export const DisabledButton = Template.bind({});
DisabledButton.args = {
  variant: "contained",
  disabled:true,
  sx:{
    width:"512px",
    height:"42px",
    Padding:"0px 16px 0px 16px",
    borderRadius:"4px"
  },
  children: <TypographyComponent variant="button" color={theme.palette.gray.white}>Sign In</TypographyComponent>,
};


export const CryptoButton=Template.bind({});
CryptoButton.args = {
  variant: "contained",
  sx:{
    width:"112px",
    height:"38px",
    Padding:"8px 16px 8px 16px",
    borderRadius:"4px",
    backgroundColor:theme.palette.primary[400]
  },
  children: <TypographyComponent variant="body2" color={theme.palette.textColor.highEmp}>Ethereum</TypographyComponent>,
};


export const WatchListButton=Template.bind({});
WatchListButton.args = {
  variant: "outlined",
  sx:{
    color:theme.palette.primary[500],
    width:"215px",
    height:"42px",
    Padding:"0px 16px 0px 16px",
    borderRadius:"4px",
    border:`1px solid ${theme.palette.primary[500]}`,
    alignItems: "center"
  },
  src:WatchListStar,
  iconHeight:"19px",
  iconWidth:"18px",
  children: <TypographyComponent variant="button" color={theme.palette.primary[500]} fontWeight={400} >ADDED TO WATCHLIST</TypographyComponent>
}; 
