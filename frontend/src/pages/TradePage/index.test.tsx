import React from 'react';
import { render, screen } from '@testing-library/react';
import { TradePage } from '.';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';

describe('TradePage', () => {
  it('should render TradePage correctly', () => {
    render(<TradePage /> , { wrapper: Router });

    const navbar = screen.getByTestId('navbar');
    expect(navbar).toBeInTheDocument();

    const tradeTable = screen.getByTestId('Trade-Table');
    expect(tradeTable).toBeInTheDocument();
  });
});
