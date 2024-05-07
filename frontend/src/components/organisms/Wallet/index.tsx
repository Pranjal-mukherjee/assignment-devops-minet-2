import { Box } from '@mui/material';
import WalletTransactionCard from '../../molecules/WalletTransactionCard';
import { theme } from '../../../theme';
import DividerComponent from '../../atoms/Divider';
import InputFieldComponent from '../../atoms/InputField';
import search from '../../../../public/assets/images/search.svg';
import filter from '../../../../public/assets/images/filter.svg';
import IconComponent from '../../atoms/Icon';
import DropDown from '../../atoms/Dropdown';
import TypographyComponent from '../../atoms/Typography';
import { isAfter, subWeeks, subMonths, subYears } from 'date-fns';
import success from '../../../../public/assets/images/successTick.svg';
import {
  StyledBalanceContainer,
  StyledIconContainer,
  StyledInnerContainer,
  StyledMainContainer,
  StyledSearchMainContainer,
  StyledVerticalDivider,
  StyledWalletContainer,
  sxSearchFilterBox
} from './style';
import {
  DURATION_MENU_LIST,
  SEARCH_ALL_ASSETS,
  TOTAL_BALANCE_TEXT,
  WalletData
} from '../../../utils/constants';
import { SetStateAction, useEffect, useState } from 'react';
import { formattedAmount } from '../../../utils/functions';

export interface WalletProps {
  totalBalance: string;
  walletData: Array<{
    src?: string;
    id: number;
    date: string;
    supplier: number;
    status: string;
    quantity: number;
    value: number;
    coinId: number;
    deliveryFee: number;
    depositedTo: string;
    transactionFee: number;
    totalAmount: number;
    paymentMethod: string;
    userId: number;
    transactionStatus: string;
  }>;
}

const Wallet: React.FC<WalletProps> = ({ totalBalance, walletData }) => {
  const [selectedDuration, setSelectedDuration] = useState<string>('1M');
  const [filteredWalletData, setFilteredWalletData] = useState(walletData);

  useEffect(() => {
    setFilteredWalletData(walletData);
  }, [walletData]);

  const handleDurationChange = (value: SetStateAction<string>) => {
    setSelectedDuration(value);

    const currentDate = new Date();
    let filteredData;

    switch (value) {
      case '1W': {
        const oneWeekAgo = subWeeks(currentDate, 1);
        filteredData = walletData.filter((transaction) =>
          isAfter(new Date(transaction.date), oneWeekAgo)
        );
        break;
      }

      case '1M': {
        const oneMonthAgo = subMonths(currentDate, 1);
        filteredData = walletData.filter((transaction) =>
          isAfter(new Date(transaction.date), oneMonthAgo)
        );
        break;
      }

      case '1Y': {
        const oneYearAgo = subYears(currentDate, 1);
        filteredData = walletData.filter((transaction) =>
          isAfter(new Date(transaction.date), oneYearAgo)
        );
        break;
      }

      default:
        filteredData = walletData;
        break;
    }
    setFilteredWalletData(filteredData);
  };

  return (
    <StyledMainContainer>
      <StyledBalanceContainer>
        <TypographyComponent variant="subtitle1">{TOTAL_BALANCE_TEXT}</TypographyComponent>
        <TypographyComponent variant="subtitle1">{totalBalance}</TypographyComponent>
      </StyledBalanceContainer>
      <StyledSearchMainContainer>
        <Box>
          <InputFieldComponent
            sx={sxSearchFilterBox}
            placeholder={SEARCH_ALL_ASSETS}
            endAdornment={
              <StyledIconContainer>
                <IconComponent src={search} alt="search-icon" />
                <StyledVerticalDivider orientation="vertical" />
                <IconComponent src={filter} alt="filter-icon" />
              </StyledIconContainer>
            }
          />
          <DropDown
            data-testid="drop-down"
            width={'77px'}
            menuList={DURATION_MENU_LIST}
            variant={'body1'}
            fontColor={theme.palette.gray[500]}
            onChange={handleDurationChange}
            value={selectedDuration}
          />
        </Box>
      </StyledSearchMainContainer>
      <StyledWalletContainer>
        <StyledInnerContainer>
          {filteredWalletData.map((transaction, index) => (
            <Box key={transaction.id} marginTop={'12px'}>
              <WalletTransactionCard
                date={transaction.date}
                src={success}
                coinId={transaction.coinId}
                label={transaction.status}
                value={`+${formattedAmount(transaction.quantity)}`}
                subValue={`+$${formattedAmount(transaction.value + 1000)} `}
                sx={{
                  marginBottom: '16px'
                }}
              />
              {index < WalletData.length - 1 && <DividerComponent />}
            </Box>
          ))}
        </StyledInnerContainer>
      </StyledWalletContainer>
    </StyledMainContainer>
  );
};
export default Wallet;
