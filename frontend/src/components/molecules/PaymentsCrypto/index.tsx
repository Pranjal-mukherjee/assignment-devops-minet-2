import { Box, Stack, styled } from '@mui/material';
import TypographyComponent from '../../atoms/Typography';
import { theme } from '../../../theme';
import { formattedAmount } from '../../../utils/functions';
import Icon from '../../atoms/Icon';
import Done from '../../../../public/assets/images/done.svg';

export interface PaymentsCryptoProps {
  src: string;
  text: string;
  subText: number;
  isSelected: boolean;
  alt: string;
}

const StyledStack = styled(Stack)({
  width:"10rem",
  height:"9.9rem"
});
const StyledBox=styled(Box)({
    position:"relative",
    marginLeft:"auto",
    marginRight:"8px",
    marginTop:"4px"
})
const CoinContainer=styled(Stack)({
    flexDirection: 'column',
    alignItems: 'center'
})

const PaymentsCrypto = ({ src, text, subText, isSelected, alt }: PaymentsCryptoProps) => {
  return (
    <StyledStack
      sx={{
        border: isSelected ? `2px solid ${theme.palette.primary[500]}` : 'none',
        borderRadius: isSelected ? '0.25rem' : '0px',
        paddingTop:isSelected ? "0" : "1.75rem",
      }}>
        {isSelected && <StyledBox><Icon src={Done} alt="done" height="18px" width="17px" /></StyledBox>}
      <CoinContainer>
      <Icon src={src} alt={alt} height="56px" width="56px" />
      <TypographyComponent variant={'body1'}  color={theme.palette.gray[500]} marginTop={"0.35rem"}>
        {text}
      </TypographyComponent>
      <TypographyComponent variant={'caption1'} color={theme.palette.textColor.medEmp}>{`$${formattedAmount(
        subText
      )}`}</TypographyComponent>
      </CoinContainer>
    </StyledStack>
  );
};
export default PaymentsCrypto;
