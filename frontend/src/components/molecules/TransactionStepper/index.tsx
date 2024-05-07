import { Divider } from '@mui/material';
import TypographyComponent from '../../atoms/Typography';
import Icon from '../../atoms/Icon';
import { theme } from '../../../theme';
import Truck from '../../../../public/assets/images/truck.svg';
import Wallet from '../../../../public/assets/images/wallet.svg';
import BitcoinWallet from '../../../../public/assets/images/bitcoinWallet.svg';
import BankCard from '../../../../public/assets/images/bankCard.svg';
import Dollar from '../../../../public/assets/images/dollar.svg';
import { IconStack, InnerStack, OuterStack, TypoStack, TypographyStack } from './index.styles';
import {
  DELIVERY_FEES,
  DEPOSIT_TO,
  PAYMENT_METHOD,
  PAYMENT_THROUGH
} from '../../../utils/constants';

export interface TransactionStepperProps {
  isBuy: boolean;
  paymentText: string;
  deliveryFees: number;
  depositText: string;
  walletCode: string;
}

const TransactionStepper = ({
  isBuy,
  paymentText,
  depositText,
  deliveryFees,
  walletCode
}: TransactionStepperProps) => {
  return (
    <OuterStack>
      <InnerStack>
        <IconStack
          divider={
            <Divider
              orientation="vertical"
              sx={{
                height: '16.5%',
                border: `0.5px dashed ${theme.palette.gray[300]}`
              }}
            />
          }>
          <Icon src={isBuy ? BankCard : BitcoinWallet} width="42px" height="42px" />
          <Icon src={Truck} width="42px" height="42px" />
          <Icon src={isBuy ? Wallet : Dollar} width="42px" height="42px" />
        </IconStack>
        <TypographyStack>
          <TypoStack>
            <TypographyComponent
              variant="caption2"
              color={theme.palette.textColor.medEmp}
              sx={{ whiteSpace: 'nowrap' }}>
              {isBuy ? PAYMENT_METHOD : PAYMENT_THROUGH}
            </TypographyComponent>
            <TypographyComponent
              variant="body1"
              color={theme.palette.textColor.highEmp}
              sx={{ whiteSpace: 'nowrap' }}>
              {paymentText}
            </TypographyComponent>
          </TypoStack>
          <TypoStack>
            <TypographyComponent
              variant="caption2"
              color={theme.palette.textColor.medEmp}
              sx={{ whiteSpace: 'nowrap' }}>
              {DELIVERY_FEES}
            </TypographyComponent>
            <TypographyComponent variant="body1" color={theme.palette.textColor.highEmp}>
              {`${String(deliveryFees)} ${walletCode}`}
            </TypographyComponent>
          </TypoStack>
          <TypoStack>
            <TypographyComponent variant="caption2" color={theme.palette.textColor.medEmp}>
              {DEPOSIT_TO}
            </TypographyComponent>
            <TypographyComponent
              variant="body1"
              color={theme.palette.textColor.highEmp}
              sx={{ whiteSpace: 'nowrap' }}>
              {depositText}
            </TypographyComponent>
          </TypoStack>
        </TypographyStack>
      </InnerStack>
    </OuterStack>
  );
};
export default TransactionStepper;
