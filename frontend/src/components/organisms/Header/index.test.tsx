import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from '.';

describe('Header component', () => {
  it('Renders with correct page name', () => {
    const { getByText } = render(<Header pageName="Test Page" displayButtons={false} />);
    expect(getByText('Test Page')).toBeInTheDocument();
  });

  it('Displays buttons when displayButtons prop is true', () => {
    const { getByText } = render(<Header pageName="Test Page" displayButtons={true} />);
    expect(getByText('SELL')).toBeInTheDocument();
    expect(getByText('BUY')).toBeInTheDocument();
  });

  it('Calls onSell and onBuy functions on button click', () => {
    const onSell = jest.fn();
    const onBuy = jest.fn();
    const { getByText } = render(
      <Header pageName="Test Page" displayButtons={true} onSell={onSell} onBuy={onBuy} />
    );

    fireEvent.click(getByText('SELL'));
    fireEvent.click(getByText('BUY'));

    expect(onSell).toHaveBeenCalled();
    expect(onBuy).toHaveBeenCalled();
  });

  it('Disables the "SELL" button when disableSell prop is true', () => {
    const onSell = jest.fn();
    const onBuy = jest.fn();
    const { getByText } = render(
      <Header
        pageName="Test Page"
        displayButtons={true}
        onSell={onSell}
        onBuy={onBuy}
        disableSell={true}
      />
    );

    fireEvent.click(getByText('SELL'));
    expect(onSell).not.toHaveBeenCalled();
  });

  it('Disables the "BUY" button when disableBuy prop is true', () => {
    const onSell = jest.fn();
    const onBuy = jest.fn();
    const { getByText } = render(
      <Header
        pageName="Test Page"
        displayButtons={true}
        onSell={onSell}
        onBuy={onBuy}
        disableBuy={true}
      />
    );

    fireEvent.click(getByText('BUY'));
    expect(onBuy).not.toHaveBeenCalled();
  });
});
