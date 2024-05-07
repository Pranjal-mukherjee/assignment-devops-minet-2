import type { Meta, StoryFn } from "@storybook/react";
import Graph from ".";
import { data } from "../../../utils/constants";
import { theme } from "../../../theme";
import ProfitIcon from "../../../../public/assets/images/profit.svg"
import { Stack } from "@mui/material";

export default {
  title: "Molecules/Graph",
  component: Graph,
} as Meta<typeof Graph>;

const template: StoryFn<typeof Graph> = (args) => (
  <Stack sx={{ width: "700px", ...args.sx }}>
    <Graph {...args} />
  </Stack>
);

export const Single = template.bind({});

Single.args = {
  data: data,
  multiple: false,
  baseDataKey: "name",
  firstDataKey: "pv",
  firstColor: theme.palette.success[500],
  sx: { width: 200, height: 80 },
  src: ProfitIcon,
  alt: "Profit Icon",
  changeData: "+2.2%",
  height: 150
};

export const Multiple = template.bind({});

const sx = {
  margin: { top: 10, right: 30, left: 0, bottom: 0 }
};

Multiple.args = {
  data: data,
  multiple: true,
  baseDataKey: "name",
  firstDataKey: "uv",
  secondDataKey: "pv",
  firstColor: theme.palette.success[500],
  secondColor: theme.palette.error[500],
  sx: sx,
  height: 300
};
