import { render } from '@testing-library/react';
import RecentTransactions from '.';
import TransactionStateImage from '../../../../public/assets/images/transactionState.svg';
import {
  EMPTY_TRANSACTION_TEXT,
  PURCHASED_TEXT,
  SOLD_TEXT,
  TRANSACTION_SUCCESS_ALT
} from '../../../utils/constants';
import '@testing-library/jest-dom';
jest.mock('../../../services', () => ({
  getCryptoCoins: jest.fn().mockResolvedValue([])
}));

describe('RecentTransactions', () => {
  test('renders with data', () => {
    const transactionData = [
      {
        coinId: 1,
        date: 'June 14',
        coinName: 'Bitcoin BTC',
        transactionType: PURCHASED_TEXT,
        coinAmount: '+0.0010 BTC',
        usdAmount: '-$34,000.0',
        src: TransactionStateImage,
        alt: TRANSACTION_SUCCESS_ALT
      },
      {
        coinId: 2,
        date: 'June 23',
        coinName: 'Bitcoin BTC',
        transactionType: SOLD_TEXT,
        coinAmount: '-0.0010 BTC',
        usdAmount: '+$34,000.0',
        src: TransactionStateImage,
        alt: TRANSACTION_SUCCESS_ALT
      }
    ];
    const { getByText } = render(
      <RecentTransactions transactionData={transactionData} isDataPresent={true} />
    );

    expect(getByText('Recent transactions')).toBeInTheDocument();
  });

  test('renders empty state when no data', () => {
    const { getByText } = render(<RecentTransactions isDataPresent={false} />);
    expect(getByText(EMPTY_TRANSACTION_TEXT)).toBeInTheDocument();
  });
});
