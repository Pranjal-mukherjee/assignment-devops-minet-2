import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import  SpeedDelivery  from '.';
import '@testing-library/jest-dom';
import { SELECT_SPEED_DELIVERY } from '../../../utils/constants';
import { formatDuration } from '../../../utils/functions';

describe('SpeedDelivery', () => {
  it('should render the speed delivery dropdown correctly', () => {
    render(<SpeedDelivery />);

    const textElememt = screen.getByText(SELECT_SPEED_DELIVERY);
    expect(textElememt).toBeInTheDocument();

    const dropdown = screen.getByTestId('delivery-dropdown');
    expect(dropdown).toBeInTheDocument();

    fireEvent.click(dropdown);
  });

  it('should select a menu item and update the dropdown display', () => {
    render(<SpeedDelivery />);
    const dropdown = screen.getByTestId('delivery-dropdown');

    fireEvent.click(dropdown);
    const menuItems = screen.getAllByTestId('menu-item');

    fireEvent.click(menuItems[0]);

    expect(screen.getByText(/Instant : 2-5 min/i)).toBeInTheDocument();
    expect(screen.getByText(/Transaction fees : 0.001 BTC/i)).toBeInTheDocument();
  });
  it('should handle None option and update the dropdown display', () => {
    render(<SpeedDelivery />);
    const dropdown = screen.getByTestId('delivery-dropdown');

    fireEvent.click(dropdown);
    const menuItems = screen.getAllByTestId('menu-item');

    fireEvent.click(menuItems[3]);

    expect(screen.getByText(/None/i)).toBeInTheDocument();
  });

  it('should format duration correctly', () => {
    const formattedDuration1 = formatDuration('2-5 minutes');
    expect(formattedDuration1).toBe('2-5 min');

    const formattedDuration2 = formatDuration('150 minutes');
    expect(formattedDuration2).toBe('150 min');

    const formattedDuration3 = formatDuration();
    expect(formattedDuration3).toBe('');
  });
});
