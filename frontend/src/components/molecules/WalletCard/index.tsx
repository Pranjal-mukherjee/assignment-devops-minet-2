import React from 'react'
import { DataContainer, LeftDataContainer, MainContainer, RightDataContainer } from './styles'
import IconComponent from '../../atoms/Icon'
import TypographyComponent from '../../atoms/Typography'
import { TypographyVariant } from '../../../utils/constants';


interface IWalletCardProps{
    src: string;
    alt: string;
    firstText: string;
    firstTextVariant: TypographyVariant; 
    firstTextColor: string; 
    secondText: string;
    secondTextVariant: TypographyVariant;
    secondTextColor: string;
    thirdText: string;
    thirdTextColor: string;
    thirdTextVariant: TypographyVariant;
}

const WalletCard = ({src, alt, firstText, firstTextVariant, firstTextColor, secondText, secondTextVariant, secondTextColor, thirdText, thirdTextColor, thirdTextVariant}: IWalletCardProps) => {
  return (
    <MainContainer container>
        <IconComponent src={src} alt={alt}/>
        <DataContainer container>
            <LeftDataContainer container>
                <TypographyComponent variant={firstTextVariant} color={firstTextColor}>{firstText}</TypographyComponent>
                <TypographyComponent variant={secondTextVariant} color={secondTextColor}>{secondText}</TypographyComponent>
            </LeftDataContainer>
            <RightDataContainer item>
                <TypographyComponent variant={thirdTextVariant} color={thirdTextColor}>{thirdText}</TypographyComponent>
            </RightDataContainer>
        </DataContainer>
    </MainContainer>
  )
}

export default WalletCard
