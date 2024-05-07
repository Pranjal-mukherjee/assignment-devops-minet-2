import React from 'react'
import { MainContainer } from './styles'
import IconComponent from '../../atoms/Icon';
import TypographyComponent from '../../atoms/Typography';
import { TypographyVariant } from '../../../utils/constants';

export interface IIconWithTypographyProps{
    start: boolean;
    iconSrc: string;
    iconAlt: string;
    text: string;
    variant: TypographyVariant;
    color?: string;
    handleClick?:()=>void
}

const IconWithLabel = ({start, iconSrc, iconAlt, text, variant, color,handleClick}: IIconWithTypographyProps) => {
  return (
    <MainContainer container onClick={handleClick} data-testid="container1" sx={{cursor:"pointer"}}>
        {start && <IconComponent src={iconSrc} alt={iconAlt}/>}
        <TypographyComponent variant={variant} color={color} alignItems={"center"}>{text}</TypographyComponent> 
        {!start && <IconComponent src={iconSrc} alt={iconAlt}/>}
    </MainContainer>
  )
}

export default IconWithLabel
