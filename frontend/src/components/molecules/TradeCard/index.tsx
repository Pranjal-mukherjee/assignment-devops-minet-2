import React from 'react';
import { Stack, Checkbox, styled } from '@mui/material';
import Image from '../../atoms/Image';
import TypographyComponent from '../../atoms/Typography';
import StarOutlined from '../../../../public/assets/images/blueStarOutlined.svg';
import Star from '../../../../public/assets/images/watchListStar.svg';
import { theme } from '../../../theme';
import IconTypographyStack from '../IconTypographyStack';
import { formattedAmount } from '../../../utils/functions';

export interface TradeCardProps {
  src: string;
  coinHeight: string;
  coinWidth: string;
  coinName: string;
  coinCode: string;
  priceChange: string;
  price: number;
  marketCap: string;
  checked?: boolean;
  onChange?: () => void;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
const StyledStack = styled(Stack)({
  flexDirection:"row",
  alignItems:"center",
  backgroundColor:`${theme.palette.gray.white}`,
  width:"100%",
  height:"74px",
  border:`1px solid ${theme.palette.gray[100]}`,
  borderRadius:"4px",
  justifyContent:"space-evenly",
});

const TradeCard = (props: TradeCardProps) => {
  return (
    <StyledStack sx={{ cursor: "pointer" }}>
      <Stack width="24.2%">
        <IconTypographyStack
          firstText={props.coinName}
          secondText={props.coinCode}
          coinIcon={props.src}
          firstTextVariant={"body1"}
          firstTextColor={theme.palette.textColor.highEmp}
          secondTextVariant={"overline"}
          secondTextColor={theme.palette.textColor.medEmp}
          iconHeight={props.coinHeight}
          iconWidth={props.coinWidth}
        />
      </Stack>
      <TypographyComponent
        variant="body2"
        children={'$' + formattedAmount(props.price)}
        color={theme.palette.textColor.highEmp}
        width={'27.2%'}
      />
      {props.priceChange?.toString().startsWith('-') ? (
        <TypographyComponent
          variant="body2"
          children={`${props.priceChange}`}
          color={theme.palette.error[500]}
          width={'19.3%'}
        />
      ) : (
        <TypographyComponent
          variant="body2"
          children={`${props.priceChange}`}
          color={theme.palette.success[500]}
          width={'19.3%'}
        />
      )}
      <TypographyComponent
        variant="body2"
        children={props.marketCap}
        color={theme.palette.textColor.highEmp}
        width={'19.3%'}
      />
      <Stack width={'6.2%'} alignItems={'flex-start'}>
        <Checkbox
          checked={props.checked}
          onChange={props.onChange}
          icon={
            <Image src={StarOutlined} alt="empty-icon" sx={{ height: '19px', width: '18px' }} />
          }
          checkedIcon={
            <Image src={Star} alt="filled-icon" sx={{ height: '19px', width: '18px' }} />
          }
          onClick={props.onClick}
        />
      </Stack>
    </StyledStack>
  );
};

export default TradeCard;
