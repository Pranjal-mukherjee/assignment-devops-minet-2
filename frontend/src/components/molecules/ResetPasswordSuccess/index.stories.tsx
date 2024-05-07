import { Meta, StoryFn } from "@storybook/react";
import TickCircle from "../../../../public/assets/icons/TickCircle.svg";
import ResetPasswordSuccess from ".";

export default {
    title: 'molecules/ResetPasswordSuccess',
    component: ResetPasswordSuccess,
  } as Meta;
  
  const Template: StoryFn<typeof ResetPasswordSuccess> = (args) => (
    <ResetPasswordSuccess {...args} />
  )

  export const Default = Template.bind({})
  Default.args = {
    img: TickCircle,
    alt: "reset-success",
    mainTitle: 'Password reset successful',
    subTitle: 'Click on button below to proceed to login'
  }

  