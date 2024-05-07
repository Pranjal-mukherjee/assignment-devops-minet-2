import React from "react";
import { render, fireEvent, screen } from '@testing-library/react';
import PortfolioCard, { CryptoPortfolioCardProps } from '.';

describe('PortfolioCard component', () => {
  const mockProps: CryptoPortfolioCardProps = {
    iconSrc: 'icon_url',
    coinName: 'Bitcoin',
    coinShortForm: 'BTC',
    amount: 1000,
    percentage: 5,
    onCardClick: jest.fn(),
  };

  it('renders with correct props', () => {
    render(
      <PortfolioCard
        iconSrc={mockProps.iconSrc}
        coinName={mockProps.coinName}
        coinShortForm={mockProps.coinShortForm}
        amount={mockProps.amount}
        percentage={mockProps.percentage}
        onCardClick={mockProps.onCardClick}
      />
    );

    const coinNameElement = screen.getByText(mockProps.coinName);
    const coinShortFormElement = screen.getByText(mockProps.coinShortForm);
    const amountElement = screen.getByText(`$ ${mockProps.amount.toFixed(2)}`);
    const percentageElement = screen.getByText(`+${mockProps.percentage.toFixed(2)}%`);

    expect(coinNameElement).toBeTruthy();
    expect(coinShortFormElement).toBeTruthy();
    expect(amountElement).toBeTruthy();
    expect(percentageElement).toBeTruthy();
  });

  it('triggers onClick handler when clicked', () => {
    render(
      <PortfolioCard
        iconSrc={mockProps.iconSrc}
        coinName={mockProps.coinName}
        coinShortForm={mockProps.coinShortForm}
        amount={mockProps.amount}
        percentage={-1}
        onCardClick={mockProps.onCardClick}
      />
    );

    const portfolioCard = screen.getByTestId('Portfolio-Card');
    fireEvent.click(portfolioCard);
    expect(mockProps.onCardClick).toHaveBeenCalledTimes(1);
  });
});
