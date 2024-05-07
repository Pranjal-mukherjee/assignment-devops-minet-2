import {  Stack, styled } from '@mui/material';
import TypographyComponent from '../../atoms/Typography';
import { COINS_DATA, COINS_TEXT, COIN_INFO_TEXT } from '../../../utils/constants';
import { theme } from '../../../theme';
import IconWithLabel from '../../molecules/IconWithLabel';
import Info from '../../../../public/assets/images/info.svg';
import LeftArrow from '../../../../public/assets/images/leftArrow.svg';
import RightArrow from '../../../../public/assets/images/rightArrow.svg';
import IconComponent from '../../atoms/Icon';
import ButtonComponent from '../../atoms/Button';
import { useState } from 'react';

export interface CryptoSliderProps {
  handleBitcoinClick?: (args: string) => void;
  handleEthereumClick?: (args: string) => void;
}

const StyledStack = styled(Stack)({
  flexDirection: 'column',
  gap: '22px',
  width: '100%'
});
const TextStack = styled(Stack)({
  flexDirection: 'row',
  width: '100%',
  alignItems: 'center',
  height: '32px',
  gap:"290px"
});

const CoinStack = styled(Stack)({
  flexDirection: 'row'
});

const CryptoStack = styled(Stack)({
  flexDirection: 'row',
  gap: '16px',
  width:"100%"
});

const CryptoSelector = ({ handleBitcoinClick, handleEthereumClick }: CryptoSliderProps) => {
  const [activeButton, setActiveButton] = useState<string>('Bitcoin');
  const handleButtonClick = (cryptoName: string) => {
    setActiveButton(cryptoName);
    if (cryptoName === 'Bitcoin') {
      handleBitcoinClick?.(cryptoName);
    }
    if (cryptoName === 'Ethereum') {
      handleEthereumClick?.(cryptoName);
    }
  };

  return (
    <StyledStack>
      <TextStack>
        <TypographyComponent variant="body1" color={theme.palette.textColor.highEmp} width="100%">
          {COINS_TEXT}
        </TypographyComponent>
        <IconWithLabel
          start={true}
          iconSrc={Info}
          iconAlt={'info'}
          text={COIN_INFO_TEXT}
          variant={'caption2'}
          color={theme.palette.textColor.highEmp}
        />
      </TextStack>
      <CoinStack>
        <IconComponent src={LeftArrow} alt="left-arrow" width="32px" height="32px" />
        <CryptoStack>
          {COINS_DATA.map((item) => (
            <ButtonComponent
              key={item.cryptoName}
              variant="contained"
              sx={{
                width: `${item.width}`,
                height: '38px',
                backgroundColor: `${item.cryptoClr}`,
                border: `2px solid ${activeButton === item.cryptoName ? item.focusColor : 'none'}`,
                '&:hover': {
                  backgroundColor: `${item.cryptoClr}`,
                  border: `2px solid ${item.focusColor}`
                },
                '&.Mui-disabled': {
                  '.MuiTypography-root': {
                    color: theme.palette.gray.white
                  }
                }
              }}
              onClick={() => handleButtonClick(item.cryptoName)}
              disableRipple
              disabled={item.cryptoName !== 'Bitcoin' && item.cryptoName !== 'Ethereum'}
              data-testid={
                item.cryptoName === 'Bitcoin' || item.cryptoName === 'Ethereum'
                  ? item.cryptoName
                  : undefined
              }>
              <TypographyComponent variant="body2" color={theme.palette.textColor.highEmp}>
                {item.cryptoName}
              </TypographyComponent>
            </ButtonComponent>
          ))}
        </CryptoStack>
        <IconComponent src={RightArrow} alt="right-arrow" width="32px" height="32px" />
      </CoinStack>
    </StyledStack>
  );
};
export default CryptoSelector;
