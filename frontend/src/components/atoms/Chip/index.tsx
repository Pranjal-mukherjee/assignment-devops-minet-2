import React from 'react'
import { ChipProps} from '@mui/material';
import { StyledChip } from './style';

interface IChipProps extends ChipProps{
    label: React.ReactNode;
    width?:string
}

const Chip = ({label, variant,width}: IChipProps) => {
  return (
    <StyledChip label={label} variant={variant} style={{width:width}}/>
  )
}

export default Chip;
