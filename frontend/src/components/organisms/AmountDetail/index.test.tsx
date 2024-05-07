import { fireEvent, screen } from '@testing-library/react';
import AmountDetail from '.';
import { BUY_MAX, SELL_MAX } from '../../../utils/constants';
import { render } from '../../../test-setup';

describe(' Amount detail organism', () => {
  const args = {
    walletBalance: 340000,
    cryptoBalance: 0.023451,
    cryptoCoinCode: 'BTC',
    cryptoPrice: 3406069.54
  };
  it('should render amount details purchase variant', () => {
    const element = render(
      <AmountDetail
        buy={true}
        walletBalance={args.walletBalance}
        cryptoBalance={args.cryptoBalance}
        cryptoCoinCode={args.cryptoCoinCode}
        cryptoPrice={args.cryptoPrice}
        transactionFee={0}
        handleAmountChange={jest.fn()}
      />
    );
    expect(element).toBeDefined();
    const slider = screen.getByRole('slider');
    fireEvent.change(slider, { target: { value: 50 } });
    fireEvent.click(screen.getByText(BUY_MAX));
  });

  it('should render amount details purchase variant', () => {
    const element = render(
      <AmountDetail
        buy={false}
        walletBalance={args.walletBalance}
        cryptoBalance={args.cryptoBalance}
        cryptoCoinCode={args.cryptoCoinCode}
        cryptoPrice={args.cryptoPrice}
        transactionFee={0}
        handleAmountChange={jest.fn()}
      />
    );
    expect(element).toBeDefined();
    const slider = screen.getByRole('slider');
    fireEvent.change(slider, { target: { value: 50 } });
    fireEvent.click(screen.getByText(SELL_MAX));
  });
});
