import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import Slider from ".";

const meta = {
  title: "Atoms/Slider",
  component: Slider,
  argTypes:{
    value: {
      control: { type: 'number'},
    }
  }
} as Meta<typeof Slider>;

export default meta;

type Story = StoryObj<typeof meta>;

const SliderAtom = () => {
  const [value, setValue] = useState<number>(60);

  const handleSliderChange = (event: Event, newValue: number | number[], activeThumb: number) => {
    setValue(newValue as number);
  };

  return <Slider value={value} handleSliderChange={handleSliderChange} />;
};

export const Primary: Story = {
  render: () => <SliderAtom/>,
};
