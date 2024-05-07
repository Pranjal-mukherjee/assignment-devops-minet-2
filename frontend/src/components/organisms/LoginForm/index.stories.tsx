import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import LoginForm from ".";
import { Stack } from "@mui/material";



export default {
  title: "organisms/LoginForm",
  component: LoginForm,
} as Meta;

const Template: StoryFn<typeof LoginForm> = (args) => 
<Stack margin="30px" >
<LoginForm/>
</Stack>
;

export const Default = Template.bind({});
