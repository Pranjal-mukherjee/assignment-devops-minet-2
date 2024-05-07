import React from 'react';
import { render, fireEvent,screen } from '@testing-library/react';
import WatchListGraph from '.';
import { formattedAmount } from '../../../utils/functions';
import "@testing-library/jest-dom"
import { data } from '../../../utils/constants';


global.ResizeObserver = jest.fn().mockImplementation(() => {
    return {
      observe: jest.fn(),
      disconnect: jest.fn(),
      unobserve: jest.fn()
    }
  })
  
describe('WatchListGraph component', () => {
  test('renders the component with correct data', () => {
    const cryptoName = 'Bitcoin';
    const cryptoValue = 50000;
    const cryptoIcon = 'bitcoin-icon.svg';
    const changeCryptoData = '+5%';

   render(
      <WatchListGraph
        cryptoName={cryptoName}
        cryptoValue={cryptoValue}
        cryptoIcon={cryptoIcon}
        data={data}
        changeCryptoData={changeCryptoData}
      />
    );

    expect(screen.getByText(cryptoName)).toBeInTheDocument();
    expect(screen.getByText(`$${formattedAmount(cryptoValue)}`)).toBeInTheDocument();
    expect(screen.getByText('24 h')).toBeInTheDocument();
  });

  test('calls handleCardClick on card click', () => {
    const handleCardClick = jest.fn();
    render(
      <WatchListGraph
        cryptoName="Bitcoin"
        cryptoValue={50000}
        cryptoIcon="bitcoin-icon.svg"
        data={data}
        changeCryptoData="-5%"
        handleCardClick={handleCardClick}
      />
    );

    fireEvent.click(screen.getByTestId("crypto-card"));

    expect(handleCardClick).toHaveBeenCalled();
  });
});
