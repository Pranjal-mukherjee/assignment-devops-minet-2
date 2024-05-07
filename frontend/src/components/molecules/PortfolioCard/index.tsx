import React from 'react';
import { Grid, Stack } from '@mui/material';
import { theme } from '../../../theme';
import IconTypographyStack from '../IconTypographyStack';
import TypographyComponent from '../../atoms/Typography';

export interface CryptoPortfolioCardProps {
  iconSrc: string;
  coinName: string;
  coinShortForm: string;
  amount: number;
  percentage: number;
  onCardClick?: React.MouseEventHandler<HTMLDivElement>;
}

const defaultProps = {
  width: '100%',
  height: '58px',
  padding: '8px 16px 8px 24px',
  '&.MuiGrid-container': {
    '&:hover': {
      boxShadow: '0px 1px 10px rgba(44, 44, 44, 0.08);'
    }
  }
};
const PortfolioCard = (props: CryptoPortfolioCardProps) => {
  return (
    <Grid
      container
      direction={'row'}
      alignItems={'center'}
      justifyContent={'space-between'}
      sx={defaultProps}
      onClick={props.onCardClick}
      data-testid="Portfolio-Card">
      <Grid item>
        <IconTypographyStack
          firstTextVariant="body1"
          firstTextColor={theme.palette.textColor.highEmp}
          secondTextColor={theme.palette.textColor.medEmp}
          secondTextVariant="caption2"
          coinIcon={props.iconSrc}
          firstText={props.coinName}
          secondText={props.coinShortForm}
        />
      </Grid>
      <Grid item>
        <Stack direction={'column'} alignItems={'flex-end'}>
          <TypographyComponent variant="body1" color={theme.palette.textColor.highEmp}>
            {'$ ' + props.amount.toFixed(2)}
          </TypographyComponent>
          <TypographyComponent
            variant="caption2"
            color={props.percentage < 0 ? theme.palette.error[500] : theme.palette.success[500]}>
            {props.percentage < 0
              ? props.percentage.toFixed(2) + '%'
              : '+' + props.percentage.toFixed(2) + '%'}
          </TypographyComponent>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default PortfolioCard;
