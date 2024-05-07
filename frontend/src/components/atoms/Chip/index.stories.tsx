import type { Meta, StoryObj } from "@storybook/react";
import Chip from ".";
import { Typography } from "@mui/material";
import { theme } from "../../../theme";
const meta = {
  title: "Atoms/Chip",
  component: Chip,
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Purchased: Story = {
  args: {
    label: <Typography variant="caption2">Purchased</Typography>
  },
};

export const Sold: Story = {
  args: {
    label: <Typography variant="caption2">Sold</Typography>
  },
};

export const Hour: Story = {
  args: {
    label: <Typography variant="overline" color={theme.palette.textColor.medEmp}>24 h</Typography>
  },
};
