import { Meta, StoryFn } from '@storybook/react';
import { SpeedDelivery } from '.';

const meta: Meta = {
  title: 'Organisms/SpeedDelivery',
  component: SpeedDelivery
};
export default meta;
const Template: StoryFn = (args) => <SpeedDelivery {...args} />;

export const SelectDelivery = Template.bind({});
