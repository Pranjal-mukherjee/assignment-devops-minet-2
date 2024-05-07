import React from 'react';
import { render } from '@testing-library/react';
import TransactionStepper from '.';
import '@testing-library/jest-dom';

describe('TransactionStepper', () => {
  test('renders without errors', () => {
    const { container } = render(
      <TransactionStepper
        isBuy={true}
        paymentText="Payment method text"
        depositText="Deposit text"
        deliveryFees={100}
        walletCode="USD"
      />
    );
    expect(container).toBeInTheDocument();
  });

  test('renders with isBuy set to false', () => {
    const { getByText } = render(
      <TransactionStepper
        isBuy={false}
        paymentText="Payment method text"
        depositText="Deposit text"
        deliveryFees={100}
        walletCode="USD"
      />
    );
    expect(getByText('100 USD')).toBeInTheDocument();
  });

  test('renders with proper delivery fees and wallet code', () => {
    const { getByText } = render(
      <TransactionStepper
        isBuy={true}
        paymentText="Payment method text"
        depositText="Deposit text"
        deliveryFees={150}
        walletCode="EUR"
      />
    );
    expect(getByText('150 EUR')).toBeInTheDocument();
  });
});
