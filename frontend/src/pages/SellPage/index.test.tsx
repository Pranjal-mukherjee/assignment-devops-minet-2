import React from 'react';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import SellPage from '.';
import '@testing-library/jest-dom';
import { TOTAL_BALANCE_TEXT, mockTradeData } from '../../utils/constants';
import { BrowserRouter } from 'react-router-dom';
import { render } from '../../test-setup';

export const mockUserData = [
  {
    id: 1,
    name: 'John',
    email: 'john@zemoso.com',
    user_balance: 500000,
    created_at: '2023-12-13',
    password: 'Password@123'
  }
];

export const mockCryptoData = {
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
  getCryptoCoins: jest.fn(),
  getUsersByEmail: jest.fn(() => Promise.resolve(mockUserData)),
  getCryptoDetailByName: jest.fn(() => Promise.resolve(mockCryptoData)),
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

describe('SellPage Component', () => {
  test('display the information', () => {
    jest
      .spyOn(Object.getPrototypeOf(window.localStorage), 'getItem')
      .mockReturnValue(JSON.stringify({ id: 7, name: 'name', email: 'emma@gmail.com' }));
    const element = render(<SellPage />);
    expect(element).toBeDefined();
  });
  /*test('displays the correct balance information', async () => {
    jest
      .spyOn(Object.getPrototypeOf(window.localStorage), 'getItem')
      .mockReturnValue(JSON.stringify({ id: 7, name: 'name', email: 'emma@gmail.com' }));

    // (getCryptoDetailByName as jest.Mock).mockResolvedValueOnce({
    //   id: 1,
    //   name: 'Bitcoin',
    //   price: 3285553.73,
    //   market_cap: 60.1,
    //   symbol: 'BTC',
    //   description: 'Bitcoin',
    //   circulating_supply: 18.8,
    //   volume: 2.9
    // });
    render(
      <BrowserRouter>
        <SellPage />
      </BrowserRouter>
    );
    expect(screen.getAllByText(TOTAL_BALANCE_TEXT)).toBeInTheDocument;
    const slider = screen.getByRole('slider');
    fireEvent.change(slider, { target: { value: 50 } });

    //await waitFor(() => expect(getCryptoDetailByName).toHaveBeenCalled());
  });
  /* test('displays the correct balance information when the id chnages', async () => {
    jest
      .spyOn(Object.getPrototypeOf(window.localStorage), 'getItem')
      .mockReturnValue(JSON.stringify({ id: 7, name: 'name', email: 'emma@gmail.com' }));

    //(getCryptoDetailByName as jest.Mock).mockResolvedValueOnce();
    render(
      <BrowserRouter>
        <SellPage />
      </BrowserRouter>
    );
    expect(screen.getAllByText(TOTAL_BALANCE_TEXT)).toBeInTheDocument;
    const slider = screen.getByRole('slider');
    fireEvent.change(slider, { target: { value: 50 } });

    // await waitFor(() => expect(getCryptoDetailByName).toHaveBeenCalled());
  });*/
});
