import { render, screen } from '@testing-library/react';
import PaymentsCrypto from '.';
import Ethereum from '../../../../public/assets/images/ethereum.svg';
import '@testing-library/jest-dom';

describe('PaymentsCrypto component', () => {
  const defaultProps = {
    src: Ethereum,
    text: 'Example Coin',
    subText: 100,
    isSelected: false,
    alt: 'Example Alt',
  };

  test('renders with default props', () => {
    render(<PaymentsCrypto {...defaultProps} />);
    expect(screen.getByText('Example Coin')).toBeInTheDocument();
    expect(screen.getByAltText('Example Alt')).toBeInTheDocument();
  });

  test('renders selected state correctly', () => {
    const props = {
      ...defaultProps,
      isSelected: true,
    };
    render(<PaymentsCrypto {...props} />); 
    expect(screen.getByAltText('done')).toBeInTheDocument();
  });

});
