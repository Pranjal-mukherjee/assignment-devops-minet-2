import React from 'react'
import { SliderProps } from '@mui/material'
import { StyledMuiSlider } from './style';

interface ISliderProps extends SliderProps{
    value: number;
    maxSliderValue?: number;
    handleSliderChange?: (event: Event, value: number | number[], activeThumb: number) => void;
}

const Slider = ({value, handleSliderChange, maxSliderValue}: ISliderProps) => {

  const handleChange = (event: Event, newValue: number | number[]) => {
    if (handleSliderChange) {
      handleSliderChange(event, newValue as number, 0);
    }
  };

  return (
    <StyledMuiSlider orientation='vertical' value={value} onChange={handleChange} max={maxSliderValue}/>
  )
}

export default Slider
