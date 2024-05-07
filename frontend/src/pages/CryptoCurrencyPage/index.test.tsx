import { fireEvent, screen } from '@testing-library/react';
import CryptoCurrencyPage from '.';
import * as router from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render } from '../../test-setup';
global.ResizeObserver = jest.fn().mockImplementation(() => {
  return {
    observe: jest.fn(),
    disconnect: jest.fn(),
    unobserve: jest.fn()
  };
});
const data = {
  id: 2,
  name: 'Ethereum',
  price: 216678.1,
  market_cap: 25.4,
  symbol: 'ETH',
  description: 'Etherium',
  circulating_supply: 18.8,
  volume: 2.9,
  change: '+1.06'
};
let index = 0;
const navigate = jest.fn();
jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate);

jest.mock('../../services', () => ({
  getCryptoCoins: jest.fn(() => Promise.resolve(data)),
  getCoinDetail: jest.fn(() => Promise.resolve(data)),
  getTradesByUserId: jest.fn(() => Promise.resolve([]))
}));
const queryClient = new QueryClient();

describe('Crypto Currency page component', () => {
  it('should render Crypto Currency Page component', async () => {
    jest
      .spyOn(Object.getPrototypeOf(window.localStorage), 'getItem')
      .mockReturnValue(JSON.stringify({ id: 7, name: 'name', email: 'email' }));
    const element = render(
      <QueryClientProvider client={queryClient}>
        <CryptoCurrencyPage />
      </QueryClientProvider>
    );
    expect(element).toBeDefined();
    await new Promise((r) => setTimeout(r, 2000));
    const walletTab = screen.getByText('Wallet');
    expect(walletTab).toBeDefined();
    fireEvent.click(walletTab);
  });

  it('should render Crypto Currency Page component with other props', () => {
    jest
      .spyOn(Object.getPrototypeOf(window.localStorage), 'getItem')
      .mockReturnValue(JSON.stringify({ id: 7, name: 'name', email: 'email' }));
    const element = render(
      <QueryClientProvider client={queryClient}>
        <CryptoCurrencyPage />
      </QueryClientProvider>
    );
    expect(element).toBeDefined();
    const buyButton = screen.getByText('BUY');
    expect(buyButton).toBeDefined();
    fireEvent.click(buyButton);

    const sellButton = screen.getByText('SELL');
    expect(sellButton).toBeDefined();
    fireEvent.click(sellButton);
  });

  it('should render Crypto Currency Page component with other props', () => {
    jest
      .spyOn(Object.getPrototypeOf(window.localStorage), 'getItem')
      .mockReturnValue(JSON.stringify({ id: 7, name: 'name', email: 'email' }));
    index = 2;
    const element = render(
      <QueryClientProvider client={queryClient}>
        <CryptoCurrencyPage />
      </QueryClientProvider>
    );

    expect(element).toBeDefined();
  });
});
