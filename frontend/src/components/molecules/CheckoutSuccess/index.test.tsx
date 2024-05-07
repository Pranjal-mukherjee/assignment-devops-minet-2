import { fireEvent, screen } from '@testing-library/react';
import CheckoutSuccess from '.';
import SuccessImage from '../../../../public/assets/images/successTick.svg';
import { GO_TO_USD } from '../../../utils/constants';
import { render } from '../../../test-setup';

describe('Checkout Success Molecule', () => {
  const args = {
    src: SuccessImage,
    alt: 'Success',
    buy: true,
    amount: '0.0234510 BTC'
  };

  it('should render checkout success', () => {
    const element = render(
      <CheckoutSuccess src={args.src} alt={args.alt} buy={true} amount={args.amount} />
    );
    expect(element).toBeDefined();
    expect(screen.getByText(args.amount)).toBeDefined();
    expect(screen.getByAltText(args.alt)).toBeDefined();
  });

  it('should render checkout success with optional props', () => {
    const element = render(
      <CheckoutSuccess
        src={args.src}
        alt={args.alt}
        buy={false}
        amount={args.amount}
      />
    );
    expect(element).toBeDefined();
    expect(screen.getByText(args.amount)).toBeDefined();
    expect(screen.getByAltText(args.alt)).toBeDefined();
    fireEvent.click(screen.getByText(GO_TO_USD));
  });
});
