import React from 'react';
import { render, screen } from '@testing-library/react';
import WalletCashPage from '.';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import { getAllTrades } from '../../services';
import { mockData } from '../../components/organisms/Wallet/index.test';
import { mockUserData } from '../SellPage/index.test';

const mockCryptoData = {
  id: 2,
  name: 'Bitcoin',
  price: 3285553.73,
  market_cap: 60.1,
  symbol: 'BTC',
  description: 'Bitcoin',
  circulating_supply: 18.8,
  volume: 2.9
};

jest.mock('../../services', () => ({
  getCryptoCoins: jest.fn(() => Promise.resolve(mockCryptoData)),
  getAllTrades: jest.fn(),
  getTradesByUserId: jest.fn(() => Promise.resolve(mockData)),
  getUsersByEmail: jest.fn(() => Promise.resolve(mockUserData)),
  getCryptoDetailByName: jest.fn(() => Promise.resolve(mockCryptoData))
}));

describe('WalletCashPage', () => {
  it('should render WalletCashPage correctly', async () => {
    jest
      .spyOn(Object.getPrototypeOf(window.localStorage), 'getItem')
      .mockReturnValue(JSON.stringify({ id: 1, name: 'name', email: 'email' }));

    (getAllTrades as jest.Mock).mockResolvedValueOnce({
      id: 1,
      date: '2023-12-20T06:25:14.933Z',
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
    });
    render(<WalletCashPage />, { wrapper: Router });

    const navbar = screen.getByTestId('navbar');
    expect(navbar).toBeInTheDocument();

    const walletElement = screen.getByText(/Wallet/);
    expect(walletElement).toBeInTheDocument();

    const balanceElement = screen.getByText(/Total balance/);
    expect(balanceElement).toBeInTheDocument();
  });
});
