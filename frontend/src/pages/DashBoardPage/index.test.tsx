import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import DashBoardPage from '.';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { getAllTrades, getCryptoCoins, getWalletsByUserIdAndCryptoId } from '../../services';
import { mockUserData } from '../../components/molecules/OrderSummary/index.test';

global.ResizeObserver = jest.fn().mockImplementation(() => {
  return {
    observe: jest.fn(),
    disconnect: jest.fn(),
    unobserve: jest.fn()
  };
});

jest.mock('../../services', () => ({
  getAllTrades: jest.fn().mockResolvedValue([]),
  getWalletsByUserIdAndCryptoId: jest.fn().mockResolvedValue([]),
  getCryptoCoins: jest.fn().mockResolvedValue([]),
  getUsersByEmail: jest.fn(() => Promise.resolve(mockUserData)),
  postTrades: jest.fn().mockResolvedValue([]),
  updateUserByEmail: jest.fn(() => Promise.resolve(mockUserData)),
  updateWallets: jest.fn(() => Promise.resolve([])),
  getTradesByUserId: jest.fn().mockResolvedValue([])
}));

describe('DashBoardPage', () => {
  test('renders without crashing', async () => {
    jest
      .spyOn(Object.getPrototypeOf(window.localStorage), 'getItem')
      .mockReturnValue(JSON.stringify({ id: 7, name: 'name', email: 'email' }));
    await (getAllTrades as jest.Mock).mockResolvedValueOnce([
      {
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
        user_id: 7,
        transaction_status: 'Success'
      }
    ]);
    await (getWalletsByUserIdAndCryptoId as jest.Mock).mockResolvedValueOnce([
      {
        id: 2,
        coin_id: 1,
        user_id: 7,
        balance: 0.04345
      }
    ]);
    await (getWalletsByUserIdAndCryptoId as jest.Mock).mockResolvedValueOnce([
      {
        id: 2,
        coin_id: 2,
        user_id: 7,
        balance: 0.04345
      }
    ]);

    render(<DashBoardPage />, { wrapper: Router });
    expect(screen.getAllByText('Dashboard')[0]).toBeInTheDocument();
  });

  test('displays the portfolio value correctly', async () => {
    await (getAllTrades as jest.Mock).mockResolvedValueOnce([
      {
        id: 1,
        date: '2023-12-20T06:25:14.933Z',
        supplier: 1,
        status: 'sold',
        quantity: 0.023451,
        value: 34000,
        coin_id: 2,
        delivery_fee: 0,
        deposited_to: 'Etherium Wallet',
        transaction_fee: 1000,
        total_amount: 35000,
        payment_method: 'Bitcoin Wallet',
        user_id: 7,
        transaction_status: 'Success'
      }
    ]);
    await (getWalletsByUserIdAndCryptoId as jest.Mock).mockResolvedValueOnce([
      {
        id: 2,
        coin_id: 2,
        user_id: 7,
        balance: 0.04345
      }
    ]);
    await (getWalletsByUserIdAndCryptoId as jest.Mock).mockResolvedValueOnce([
      {
        id: 2,
        coin_id: 1,
        user_id: 7,
        balance: 0.04345
      }
    ]);
    await render(<DashBoardPage />, { wrapper: Router });
    expect(screen.getByText('My portfolio value')).toBeInTheDocument();
  });

  test('displays the portfolio value correctly', async () => {
    jest
      .spyOn(Object.getPrototypeOf(window.localStorage), 'getItem')
      .mockReturnValue(JSON.stringify({ id: 7, name: 'name', email: 'email' }));
    await (getAllTrades as jest.Mock).mockResolvedValueOnce([
      {
        id: 1,
        date: '2023-12-20T06:25:14.933Z',
        supplier: 1,
        status: 'Sold',
        quantity: 0.023451,
        value: 34000,
        coin_id: 2,
        delivery_fee: 0,
        deposited_to: 'Etherium Wallet',
        transaction_fee: 1000,
        total_amount: 35000,
        payment_method: 'Bitcoin Wallet',
        user_id: 7,
        transaction_status: 'Success'
      }
    ]);
    await (getWalletsByUserIdAndCryptoId as jest.Mock).mockResolvedValueOnce([
      {
        id: 2,
        coin_id: 2,
        user_id: 7,
        balance: 0.04345
      }
    ]);

    await (getWalletsByUserIdAndCryptoId as jest.Mock).mockResolvedValueOnce([
      {
        id: 2,
        coin_id: 1,
        user_id: 7,
        balance: 0.04345
      }
    ]);
    (getCryptoCoins as jest.Mock).mockResolvedValueOnce({
      id: 2,
      name: 'Bitcoin',
      price: 3285553.73,
      market_cap: 60.1,
      symbol: 'BTC',
      description: 'Bitcoin',
      circulating_supply: 18.8,
      volume: 2.9
    });

    render(<DashBoardPage />, { wrapper: Router });
  });
  test('displays the portfolio value correctly', async () => {
    await (getAllTrades as jest.Mock).mockResolvedValueOnce([]);
    await (getWalletsByUserIdAndCryptoId as jest.Mock).mockResolvedValueOnce([]);

    await (getWalletsByUserIdAndCryptoId as jest.Mock).mockResolvedValueOnce([]);

    render(<DashBoardPage />, { wrapper: Router });

    expect(screen.getByAltText('empty-transaction')).toBeInTheDocument;
  });
});
