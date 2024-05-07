import type { Meta, StoryObj } from '@storybook/react';
import TradeScreenTemplate from './TradeScreen';
import TypographyComponent from '../../atoms/Typography';
const meta = {
  title: 'Templates/TradeScreenTemplate',
  component: TradeScreenTemplate
} satisfies Meta<typeof TradeScreenTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    watchlistBar: false,
    firstData: <TypographyComponent variant="caption2">All Assets</TypographyComponent>,
    secondData: <TypographyComponent variant="caption2">Watchlist</TypographyComponent>
  }
};

export const Secondary: Story = {
  args: {
    watchlistBar: true,
    watchList: <TypographyComponent variant="caption2">Watchlist</TypographyComponent>,
    firstData: <TypographyComponent variant="caption2">All Assets</TypographyComponent>,
    secondData: <TypographyComponent variant="caption2">Watchlist</TypographyComponent>
  }
};
