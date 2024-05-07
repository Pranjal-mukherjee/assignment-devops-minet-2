import { StoryFn, Meta } from "@storybook/react";
import DividerComponent  from ".";
import { Stack } from "@mui/material";

export default {
  title: "Atoms/Divider",
  component: DividerComponent,
  argTypes: {
    text: {
      control: { type: "text" },
    },
  },
} as Meta<typeof DividerComponent>;
const template: StoryFn<typeof DividerComponent> = (args) => (
    <Stack width="512px" margin="50px">
  <DividerComponent {...args} />
 </Stack>
);

export const DividerWithText = template.bind({});
DividerWithText.args = {
  text: "Or",
};

export const Divider = template.bind({});
Divider.args={
    height:"2px"
}

