import { screen, render } from '@testing-library/react';
import TransactionCard from '.';
import { SOLD_TEXT } from '../../../utils/constants';
import { getCryptoCoins } from '../../../services';
jest.mock('../../../services', () => ({
  getCryptoCoins: jest.fn().mockResolvedValue([])
}));

describe('Transaction Card Molecule', () => {
  it('should render the transaction card molecule', () => {
    (getCryptoCoins as jest.Mock).mockResolvedValueOnce({
      id: 1,
      name: 'Bitcoin',
      price: 3285553.73,
      market_cap: 60.1,
      symbol: 'BTC',
      description: 'Bitcoin',
      circulating_supply: 18.8,
      volume: 2.9
    });
    const date = 'June 14';
    const coinAmount = '-0.0010 BTC';
    const usdAmount = '+$34,000.0';
    const element = render(
      <TransactionCard
        date={date}
        transactionType={SOLD_TEXT}
        coinAmount={coinAmount}
        usdAmount={usdAmount}
        coinId={1}
      />
    );
    expect(element).toBeDefined();
    expect(screen.getByText(date)).toBeDefined();
    expect(screen.getByText(usdAmount)).toBeDefined();
  });
  it('should render the transaction card molecule', () => {
    (getCryptoCoins as jest.Mock).mockResolvedValueOnce({
      id: 2,
      name: 'Ethereum',
      price: 3285553.73,
      market_cap: 60.1,
      symbol: 'ETH',
      description: 'Ethereum',
      circulating_supply: 18.8,
      volume: 2.9
    });
    const date = 'June 14';
    const coinAmount = '-0.0010 ETH';
    const usdAmount = '+$34,000.0';
    const element = render(
      <TransactionCard
        date={date}
        transactionType={SOLD_TEXT}
        coinAmount={coinAmount}
        usdAmount={usdAmount}
        coinId={2}
      />
    );
    expect(element).toBeDefined();
    expect(screen.getByText(date)).toBeDefined();
    expect(screen.getByText(usdAmount)).toBeDefined();
  });
});
