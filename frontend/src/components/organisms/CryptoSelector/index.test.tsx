import React from 'react';
import { fireEvent } from '@testing-library/react';
import CryptoSelector from '.';
import '@testing-library/jest-dom';
import { render } from '../../../test-setup';

describe('CryptoSelector', () => {
  test('renders without errors', () => {
    const { container } = render(<CryptoSelector />);
    expect(container).toBeInTheDocument();
  });

  test('handles Bitcoin click', () => {
    const handleBitcoinClick = jest.fn();
    const { getByText } = render(<CryptoSelector handleBitcoinClick={handleBitcoinClick} />);
    const bitcoinButton = getByText('Bitcoin');
    fireEvent.click(bitcoinButton);
  });

  test('handles Ethereum click', () => {
    const handleEthereumClick = jest.fn();
    const { getByText } = render(<CryptoSelector handleEthereumClick={handleEthereumClick} />);
    const ethereumButton = getByText('Ethereum');
    fireEvent.click(ethereumButton);
  });
});
