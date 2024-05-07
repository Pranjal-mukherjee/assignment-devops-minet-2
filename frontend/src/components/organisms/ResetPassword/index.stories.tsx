import { StoryFn, Meta } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ResetPassword } from '.';

export default {
  title: 'Organisms/ResetPassword',
  component: ResetPassword,
  argTypes: {
    handleForgotPassword: { control: 'Forgot Password' }
  }
} as Meta<typeof ResetPassword>;
const queryClient = new QueryClient();

const Template: StoryFn<typeof ResetPassword> = (args) => (
  <QueryClientProvider client={queryClient}>
    <ResetPassword email={''} />
  </QueryClientProvider>
);

export const ForgotPasswordTemplate = Template.bind({});
ForgotPasswordTemplate.args = {};
