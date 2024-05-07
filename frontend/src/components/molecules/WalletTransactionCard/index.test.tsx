import React from 'react';
import { render, screen } from '@testing-library/react';
import WalletTransactionCard  from '.';
import warning from '../../../../public/assets/images/warning.svg';
import '@testing-library/jest-dom';
jest.mock('../../../services', () => ({
  getCryptoCoins: jest.fn().mockResolvedValue([])
}));

const mockProps = {
  date: '2023-02-28',
  src: warning,
  coinType: 'Bitcoin',
  userName: 'From Badgley',
  label: 'Purchased',
  value: '+0.0010 BTC',
  subValue: '+$900',
  coinId:1
};

describe('WalletTransactionCard', () => {
  it('should render the transaction card with the correct values', () => {
    render(<WalletTransactionCard {...mockProps} />);

    const chipLabel = screen.getByText('Purchased');
    expect(chipLabel).toBeInTheDocument();


    const subValue = screen.getByText('+$900');
    expect(subValue).toBeInTheDocument();
  });
});
