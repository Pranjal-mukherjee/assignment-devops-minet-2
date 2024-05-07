import React from 'react';
import { render, fireEvent,screen } from '@testing-library/react';
import TradeCard from '.';
import Ethereum2 from "../../../../public/assets/images/ethereum.svg";
import '@testing-library/jest-dom';


describe('TradeCard Component', () => {
  const mockProps = {
    src: Ethereum2,
    coinHeight: '30px',
    coinWidth: '30px',
    coinName: 'Btestcoin',
    coinCode: 'BTC',
    priceChange: '+10.5%',
    price: 50000,
    marketCap: '2T',
    checked: true,
    onChange: jest.fn(),
    cryptoId: 1,
    onClick: jest.fn(),
  };
  const defaultProps = {
    src: Ethereum2,
    coinHeight: '30px',
    coinWidth: '30px',
    coinName: 'Btestcoin',
    coinCode: 'BTC',
    priceChange: '-10.5%',
    price: 50000,
    marketCap: '2T',
    checked: true,
    onChange: jest.fn(),
    cryptoId: 1,
    onClick: jest.fn(),
  };

  test('renders TradeCard component correctly', () => {
    render(<TradeCard {...defaultProps} />);
    expect(screen.getByText("BTC")).toBeInTheDocument;
  });

  test('triggers onChange when Checkbox is clicked', () => {
    const { getByRole } = render(<TradeCard {...mockProps} />);
    const checkbox = getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(mockProps.onChange).toHaveBeenCalled();
  });

  test('triggers onClick when TradeCard is clicked', () => {
    const { getByText } = render(<TradeCard {...mockProps} />);
    const tradeCard = getByText('Btestcoin');
    fireEvent.click(tradeCard);
  });

});
