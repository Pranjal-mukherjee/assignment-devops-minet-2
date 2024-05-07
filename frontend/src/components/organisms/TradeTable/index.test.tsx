import { screen, fireEvent, act } from '@testing-library/react';
import TradeTable from '.';
import '@testing-library/jest-dom/extend-expect';
import { render } from '../../../test-setup';
jest.mock('axios');
jest.mock('../../../services', () => ({
  ...jest.requireActual('../../../services'),
  GetAllCryptoCoins: jest.fn().mockResolvedValue([
    {
      id: 1,
      symbol: 'BTC',
      name: 'Bitcoin',
      src: 'url',
      price: 50000,
      change: -1.09,
      volume: 89,
      market_cap: 1000
    }
  ]),
  GetWatchLists: jest.fn().mockResolvedValue([
    {
      id: 1,
      user_id: 1,
      coin_id: 1
    }
  ]),
  getCryptoCoins: jest.fn().mockResolvedValue({
    id: 1,
    symbol: 'BTC',
    name: 'Bitcoin',
    src: 'url',
    price: 50000,
    change: 1.09,
    volume: 89,
    market_cap: 1000
  }),
  PostWatchlist: jest.fn().mockResolvedValue({
    user_id: 1,
    coin_id: 1
  }),
  DeleteWatchlistById: jest.fn().mockResolvedValue({
    user_id: 1,
    coin_id: 1
  })
}));

describe('TradeTable component', () => {
  it('renders correctly', () => {
    render(<TradeTable />);

    expect(screen.getByTestId('Trade-Table')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Price')).toBeInTheDocument();
    expect(screen.getByText('Change')).toBeInTheDocument();
    expect(screen.getByText('Market Cap')).toBeInTheDocument();
    expect(screen.getByText('Watch')).toBeInTheDocument();
  });

  it('Switching between tabs', () => {
    render(<TradeTable />);
    fireEvent.click(screen.getByText('Watchlist'));
    fireEvent.click(screen.getByText('All Assets'));
  });

  it('handles search functionality', () => {
    render(<TradeTable />);
    fireEvent.change(screen.getByPlaceholderText('Search all assets'), {
      target: { value: 'Bitcoin' }
    });

    fireEvent.click(screen.getByText('Watchlist'));

    const eyeIcon = screen.getByTestId('Clear-Icon');
    expect(eyeIcon).toBeInTheDocument();
    fireEvent.click(eyeIcon);
    expect(screen.getByPlaceholderText('Search all assets')).toHaveValue('');
  });

  it('adding & removing CryptoCurrency to watchlist ', async () => {
    render(<TradeTable />);
    const box = await screen.findAllByRole('checkbox');

    if (box.length > 1) {
      expect(box[1]).toBeInTheDocument();
      act(() => {
        fireEvent.click(box[1]);
      });

      fireEvent.click(screen.getByText('Watchlist'));

      const box2 = await screen.findAllByRole('checkbox');

      if (box2.length > 1) {
        expect(box2[1]).toBeInTheDocument();
        act(() => {
          fireEvent.click(box2[1]);
        });
      }
    }
  });
});
