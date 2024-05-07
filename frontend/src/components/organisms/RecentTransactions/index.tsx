import { Stack, styled } from '@mui/material';
import TypographyComponent from '../../atoms/Typography';
import { EMPTY_TRANSACTION_TEXT, RECENT_TRANSACTIONS, VIEW_ALL } from '../../../utils/constants';
import { theme } from '../../../theme';
import TransactionCard, { ITransactionCardProps } from '../../molecules/TransactionCard';
import  IconTypography  from '../../molecules/IconTypography';
import EmptyTransaction from '../../../../public/assets/images/emptyTransaction.svg';

export interface RecentTransactionsProps {
  transactionData?: ITransactionCardProps[];
  isDataPresent: boolean;
}

const StyledStack = styled(Stack)({
  flexDirection: 'column'
});

const TypographyStack = styled(Stack)({
  width: '100%'
});

const DataStack = styled(Stack)({
  flexDirection: 'column',
  gap: '24px'
});
const CustomStack = styled(Stack)(({ isDataPresent }: { isDataPresent: boolean }) => ({
  marginTop: isDataPresent ? '12px' : '58px',
  alignItems: isDataPresent ? 'none' : 'center'
}));

const RecentTransactions = ({ transactionData, isDataPresent }: RecentTransactionsProps) => {
  return (
    <StyledStack>
      <TypographyStack alignItems={'center'} justifyContent={'space-between'} direction={'row'}>
        <TypographyComponent variant="subtitle1" color={theme.palette.textColor.highEmp}>
          {RECENT_TRANSACTIONS}
        </TypographyComponent>
        <TypographyComponent variant="caption2" color={theme.palette.primary[500]}>
          {VIEW_ALL}
        </TypographyComponent>
      </TypographyStack>
      <CustomStack isDataPresent={isDataPresent}>
        {isDataPresent ? (
          <DataStack>
            {transactionData?.map((item) => (
              <TransactionCard
                coinId={item.coinId}
                key={item.coinAmount}
                date={item.date}
                transactionType={item.transactionType}
                coinAmount={item.coinAmount}
                usdAmount={item.usdAmount}
              />
            ))}
          </DataStack>
        ) : (
          <IconTypography
            alt="empty-transaction"
            src={EmptyTransaction}
            text={EMPTY_TRANSACTION_TEXT}
            variant="caption2"
            fontColor={theme.palette.textColor.medEmp}
            padding="12px"
          />
        )}
      </CustomStack>
    </StyledStack>
  );
};
export default RecentTransactions;
