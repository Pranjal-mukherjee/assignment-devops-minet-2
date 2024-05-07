import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import BuyPage from '.';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { getCryptoDetailByName } from '../../services';
import { mockUserData } from '../../components/molecules/OrderSummary/index.test';
import { mockTradeData } from '../../utils/constants';

jest.mock('../../services', () => ({
  getCryptoCoins: jest.fn(),
  getUsersByEmail: jest.fn(() => Promise.resolve(mockUserData)),
  getCryptoDetailByName: jest.fn(),
  postTrades: jest.fn(() => Promise.resolve()),
  updateUserByEmail: jest.fn(() => Promise.resolve(mockUserData)),
  updateWallets: jest.fn(() => Promise.resolve()),
  getTradesByUserId: jest.fn(() => Promise.resolve(mockTradeData))
}));

jest.mock('@tanstack/react-query', () => ({
  ...jest.requireActual('@tanstack/react-query'),
  useQuery: jest.fn(() => ({
    data: mockUserData,
    isLoading: false
  }))
}));

describe('BuyPage', () => {
  it('should display the correct amount details', async () => {
    jest
      .spyOn(Object.getPrototypeOf(window.localStorage), 'getItem')
      .mockReturnValue(JSON.stringify({ id: 7, name: 'name', email: 'emma@gmail.com' }));
    (getCryptoDetailByName as jest.Mock).mockResolvedValueOnce({
      id: 1,
      name: 'Bitcoin',
      price: 3285553.73,
      market_cap: 60.1,
      symbol: 'BTC',
      description: 'Bitcoin',
      circulating_supply: 18.8,
      volume: 2.9
    });

    render(
      <BrowserRouter>
        <BuyPage />
      </BrowserRouter>
    );

    const slider = screen.getByRole('slider');
    fireEvent.change(slider, { target: { value: 50 } });

    await waitFor(() => expect(getCryptoDetailByName).toHaveBeenCalled());
  });
  it('should display the information when the id chnages', async () => {
    jest
      .spyOn(Object.getPrototypeOf(window.localStorage), 'getItem')
      .mockReturnValue(JSON.stringify({ id: 7, name: 'name', email: 'emma@gmail.com' }));
    (getCryptoDetailByName as jest.Mock).mockResolvedValueOnce({
      id: 2,
      name: 'Ethereum',
      price: 3285553.73,
      market_cap: 60.1,
      symbol: 'ETH',
      description: 'Ethereum',
      circulating_supply: 18.8,
      volume: 2.9
    });

    render(
      <BrowserRouter>
        <BuyPage />
      </BrowserRouter>
    );

    const slider = screen.getByRole('slider');
    fireEvent.change(slider, { target: { value: 50 } });

    await waitFor(() => expect(getCryptoDetailByName).toHaveBeenCalled());
  });
});
