import { StoryFn, Meta } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import TradeTable from '.';

export default {
  title: 'Organisms/TradeTable',
  component: TradeTable
} as Meta<typeof TradeTable>;
const queryClient = new QueryClient();

const Template: StoryFn<typeof TradeTable> = () => (
  <QueryClientProvider client={queryClient}>
    <TradeTable />
  </QueryClientProvider>
);

export const TradeTabledata = Template.bind({});
TradeTabledata.args = {};
