import { styled, Stack } from '@mui/material';
import { theme } from '../../../theme';
import TypographyComponent from '../../atoms/Typography';
import { CHOOSE_CRYPTO } from '../../../utils/constants';
import PaymentsCrypto from '../../molecules/PaymentsCrypto';

export interface CryptoDetails {
  cryptoIcon: string;
  cryptoName: string;
  cryptoValue: number;
}
export interface ChooseCryptoProps {
  cryptoData: CryptoDetails[];
  activeIcon?: string;
}

const StyledCard = styled(Stack)({
  flexDirection: 'column',
  padding: '1.5rem 1.5rem 0 1.5rem',
  gap: '1rem',
  borderRadius: '0.25rem',
  border: `1px solid ${theme.palette.gray[100]}`,
  height: '25.875rem',
  backgroundColor:theme.palette.gray.white
});

const CryptoContainer = styled(Stack)({
  width: '100%',
  flexDirection: 'row',
  flexWrap: 'wrap',
  height: '100%',
  overflowY: 'scroll',
  rowGap: '0.25rem',
  '&::-webkit-scrollbar': {
    width: '5px',
    height: '25.65px'
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: `${theme.palette.gray[300]}`,
    borderRadius: '50rem',
    height: '32px'
  }
});

const ChooseCrypto = ({ cryptoData, activeIcon }: ChooseCryptoProps) => {
  const handleActiveCrypto = (item: string) => {
    if (activeIcon === item) return true;
    return false;
  };
  return (
    <StyledCard>
      <TypographyComponent variant="body1" color={theme.palette.textColor.highEmp}>
        {CHOOSE_CRYPTO}
      </TypographyComponent>
      <CryptoContainer>
        {cryptoData?.map((item) => (
          <PaymentsCrypto
            key={item.cryptoName}
            src={item.cryptoIcon}
            text={item.cryptoName}
            subText={item.cryptoValue}
            isSelected={handleActiveCrypto(item.cryptoName)}
            alt={item.cryptoName}
          />
        ))}
      </CryptoContainer>
    </StyledCard>
  );
};
export default ChooseCrypto;
