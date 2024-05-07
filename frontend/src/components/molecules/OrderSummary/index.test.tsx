import { fireEvent, screen } from '@testing-library/react';
import OrderSummary from '.';
import { render } from '../../../test-setup';

export const mockUserData = [
  {
    id: 1,
    name: 'John',
    email: 'john@zemoso.com',
    user_balance: 500000,
    created_at: '2023-12-13'
  }
];
jest.mock('../../../services', () => ({
  postTrades: jest.fn(() => Promise.resolve({ id: 1 })),
  updateWallets: jest.fn(() =>
    Promise.resolve([
      {
        id: 3,
        coin_id: 2,
        user_id: 1,
        balance: 0.04345
      }
    ])
  ),
  getUsersByEmail: jest.fn(() => Promise.resolve(mockUserData)),
  updateUserByEmail: jest.fn(() => Promise.resolve(mockUserData))
}));

describe('Order Summary component', () => {
  const args = {
    coinAmount: 0.023451,
    currentPrice: 3406069.54,
    paymentText: 'Visa credit ...8845',
    depositText: 'Bitcoin wallet',
    walletCode: 'BTC',
    deliveryFee: 0.001,
    transactionFee: 1000
  };
  const defaultArgs = {
    coinAmount: 0.023451,
    currentPrice: 3406069.54,
    paymentText: 'Visa credit ...8845',
    depositText: 'Ethereum wallet',
    walletCode: 'ETH',
    deliveryFee: 0.001,
    transactionFee: 1000
  };
  it('should render Order Summary component', () => {
    const element = render(<OrderSummary isBuy={true} {...args} />);
    expect(element).toBeDefined();
    const buyButton = screen.getByText('BUY NOW');
    expect(buyButton).toBeDefined();
    fireEvent.click(buyButton);
  });

  it('should render Order Summary component', () => {
    const element = render(<OrderSummary isBuy={false} {...args} />);
    expect(element).toBeDefined();
    const sellButton = screen.getByText('SELL NOW');
    expect(sellButton).toBeDefined();
    fireEvent.click(sellButton);
  });

  it('should render Order Summary component', () => {
    const element = render(<OrderSummary isBuy={true} {...defaultArgs} />);
    expect(element).toBeDefined();
    const buyButton = screen.getByText('BUY NOW');
    expect(buyButton).toBeDefined();
    fireEvent.click(buyButton);
  });
});
