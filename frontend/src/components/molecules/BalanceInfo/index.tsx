import { styled } from '@mui/material';
import React from 'react';
import TypographyComponent from '../../atoms/Typography';
import { pxToRem, theme } from '../../../theme';
import IconComponent from '../../atoms/Icon';
import { TOTAL_BALANCE_TEXT } from '../../../utils/constants';

export const Outerbox = styled('div')(() => ({
  width: '100%',
  height: pxToRem(167),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  border: `1px solid ${theme.palette.gray[100]}`,
  borderRadius: theme.spacing(0),
  backgroundColor: theme.palette.gray.white
}));

const InnerBox = styled('div')(() => ({
  width: '96%',
  height: pxToRem(81),
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  border: `1px solid ${theme.palette.gray[100]}`,
  borderRadius: theme.spacing(0),
  marginLeft: '1.25vw'
}));

const LeftBox = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  marginLeft: theme.spacing(3),
  gap: theme.spacing(2)
}));

export interface BalnceMethodProps {
  balance: number | string;
  symbol: string;
  src: string;
  coinName: string;
  textColor?: string;
}

const BalanceInfo: React.FC<BalnceMethodProps> = ({
  balance,
  coinName,
  symbol,
  src,
  textColor
}) => {
  return (
    <Outerbox data-testid="sellTotalBalance">
      <TypographyComponent
        variant="body1"
        color={theme.palette.textColor.highEmp}
        sx={{ marginLeft: '1.25vw' }}>
        {TOTAL_BALANCE_TEXT}
      </TypographyComponent>
      <InnerBox>
        <LeftBox>
          <IconComponent src={src} width={pxToRem(33)} height={pxToRem(33)} />
          <TypographyComponent variant="caption1" color={theme.palette.textColor.highEmp}>
            {coinName}
          </TypographyComponent>
        </LeftBox>
        <TypographyComponent
          variant="subtitle1"
          color={textColor ?? theme.palette.textColor.medEmp}
          sx={{ marginRight: theme.spacing(4) }}>
          {typeof balance === 'number' ? balance.toFixed(7) + ' ' + symbol : balance}
        </TypographyComponent>
      </InnerBox>
    </Outerbox>
  );
};

export default BalanceInfo;
