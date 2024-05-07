import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Wallet from '.';
import '@testing-library/jest-dom';
import { TOTAL_BALANCE_TEXT } from '../../../utils/constants';
import { getCryptoCoins } from '../../../services';

export const mockData = [
  {
    id: 1,
    date: '2023-12-03T06:25:14.933Z',
    supplier: 1,
    status: 'purchased',
    quantity: 0.023451,
    value: 34000,
    coin_id: 1,
    delivery_fee: 0,
    deposited_to: 'Etherium Wallet',
    transaction_fee: 1000,
    total_amount: 35000,
    payment_method: 'Bitcoin Wallet',
    user_id: 1,
    transaction_status: 'Success'
  }
];

const cryptoData = {
  id: 2,
  name: 'Bitcoin',
  price: 3285553.73,
  market_cap: 60.1,
  symbol: 'BTC',
  description: 'Bitcoin',
  circulating_supply: 18.8,
  volume: 2.9
};

jest.mock('../../../services', () => ({
  getCryptoCoins: jest.fn(() => Promise.resolve(cryptoData)),
  getTradesByUserId: jest.fn(() => Promise.resolve(mockData))
}));

describe('Wallet', () => {
  it('should render total balance', async () => {
    jest
      .spyOn(Object.getPrototypeOf(window.localStorage), 'getItem')
      .mockReturnValue(JSON.stringify({ id: 1, name: 'name', email: 'emma@gmail.com' }));

    const { getByText } = render(
      <Wallet
        totalBalance={'$0'}
        walletData={[
          {
            id: 1,
            date: '2023-12-20T06:25:14.933Z',
            supplier: 1,
            status: 'purchased',
            quantity: 0.023451,
            value: 34000,
            coinId: 1,
            deliveryFee: 0,
            depositedTo: 'Etherium Wallet',
            transactionFee: 1000,
            totalAmount: 35000,
            paymentMethod: 'Bitcoin Wallet',
            userId: 1,
            transactionStatus: 'Success'
          }
        ]}
      />
    );
    expect(getByText(TOTAL_BALANCE_TEXT)).toBeInTheDocument();

    const dropDown = screen.getByText('1M');
    expect(dropDown).toBeInTheDocument();
    await waitFor(() => expect(getCryptoCoins).toHaveBeenCalled());

    if (dropDown.firstChild) {
      fireEvent.keyDown(dropDown.firstChild, { key: 'ArrowDown' });
      await screen.findByText('1W');
      const option1 = screen.getByText('1W');
      fireEvent.click(option1);

      fireEvent.keyDown(dropDown.firstChild, { key: 'ArrowDown' });
      await screen.findByText('1M');
      const option2 = screen.getByText('1M');
      fireEvent.click(option2);

      fireEvent.keyDown(dropDown.firstChild, { key: 'ArrowDown' });
      await screen.findByText('1Y');
      const option3 = screen.getByText('1Y');
      fireEvent.click(option3);

      fireEvent.keyDown(dropDown.firstChild, { key: 'ArrowDown' });
      await screen.findByText('ALL');
      const optionAll = screen.getByText('ALL');
      fireEvent.click(optionAll);
    }
  });
});
