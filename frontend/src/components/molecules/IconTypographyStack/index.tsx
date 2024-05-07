import React from 'react';
import IconComponent from '../../atoms/Icon';
import TypographyComponent from '../../atoms/Typography';
import {
  BaseContainer,
  DashboardDataContainer,
  ProfitLossContainer,
  StyledMainContainer,
  TypographyContainer
} from './styles';
import { TypographyVariant } from '../../../utils/constants';
import { Grid } from '@mui/material';
import { theme } from '../../../theme';

export interface IIconTypographyStackProps {
  coinIcon?: string;
  coinIconAlt?: string;
  changeIcon?: string;
  changeIconAlt?: string;
  firstText: string;
  secondText?: string;
  changeData?: string;
  firstTextVariant?: TypographyVariant;
  secondTextVariant?: TypographyVariant;
  thirdTextVariant?: TypographyVariant;
  firstTextColor?: string;
  secondTextColor?: string;
  thirdTextColor?: string;
  iconWidth?: string;
  iconHeight?: string;
  dashboard?: boolean;
}

const IconTypographyStack = ({
  dashboard,
  coinIcon,
  coinIconAlt,
  changeIcon,
  changeIconAlt,
  firstText,
  secondText,
  changeData,
  firstTextVariant,
  firstTextColor,
  secondTextVariant,
  secondTextColor,
  thirdTextVariant,
  thirdTextColor,
  iconHeight,
  iconWidth
}: IIconTypographyStackProps) => {
  return (
    <StyledMainContainer container direction={'column'}>
      {coinIcon && <IconComponent src={coinIcon} alt={coinIconAlt} height={iconHeight} width={iconWidth}/>}

      <TypographyContainer gap={dashboard ? theme.spacing(1) : theme.spacing(0)}>
        <DashboardDataContainer>
          <TypographyComponent variant={firstTextVariant} color={firstTextColor}>
            {firstText}
          </TypographyComponent>
          {dashboard && (
            <Grid container alignItems={'center'} width={'35%'}>
              <IconComponent src={changeIcon} alt={changeIconAlt} />
              <TypographyComponent variant={thirdTextVariant} color={thirdTextColor}>
                {changeData}
              </TypographyComponent>
            </Grid>
          )}
        </DashboardDataContainer>

        <BaseContainer container>
          <TypographyComponent variant={secondTextVariant} color={secondTextColor}>
            {secondText}
          </TypographyComponent>
          {changeIcon && !dashboard && (
            <ProfitLossContainer container>
              <IconComponent
                src={changeIcon}
                alt={changeIconAlt}
                width={iconWidth}
                height={iconHeight}
              />
              <TypographyComponent variant={thirdTextVariant} color={thirdTextColor}>
                {changeData}
              </TypographyComponent>
            </ProfitLossContainer>
          )}
        </BaseContainer>
      </TypographyContainer>
    </StyledMainContainer>
  );
};

export default IconTypographyStack;
