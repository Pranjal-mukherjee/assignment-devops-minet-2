import type { Meta, StoryObj } from '@storybook/react';
import Tabs from '.';
import { ALL_ASSETS_TEXT, WATCHLIST_TEXT } from '../../../utils/constants';
const meta = {
  title: 'Organisms/Tabs',
  component: Tabs
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    firstLabel: ALL_ASSETS_TEXT,
    secondLabel: WATCHLIST_TEXT,
    firstData: 'Item 1',
    secondData: 'Item 2'
  }
};
