import { StoryFn, Meta } from '@storybook/react';
import ForgotPassword from '.';
import { Stack } from '@mui/material';
import { pxToRem } from '../../../theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default {
  title: 'Organisms/ForgotPassword',
  component: ForgotPassword,
  argTypes: {
    handleForgotPassword: { control: 'Forgot Password' }
  }
} as Meta<typeof ForgotPassword>;
const queryClient = new QueryClient();

const Template: StoryFn<typeof ForgotPassword> = (args) => (
  <Stack maxWidth={pxToRem(720)}>
    <QueryClientProvider client={queryClient}>
      <ForgotPassword handleForgotPassword={() => {}} />
    </QueryClientProvider>
  </Stack>
);

export const ForgotPasswordTemplate = Template.bind({});
ForgotPasswordTemplate.args = {};
