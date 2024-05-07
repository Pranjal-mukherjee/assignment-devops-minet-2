import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import  NavBar  from '.';
import { BrowserRouter as Router } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

jest.mock('@auth0/auth0-react');
describe('NavBar ', () => {
  const logoutFn = jest.fn();
  beforeEach(() => {
    (useAuth0 as jest.Mock).mockReturnValue({
      isAuthenticated: true,
      logout: logoutFn
    });
    render(<NavBar />, { wrapper: Router });
  });

  it('should render NavBar component correctly', () => {
    const dashboardIcon = screen.getByAltText('dashboard-icon');
    expect(dashboardIcon).toBeInTheDocument();
    fireEvent.click(dashboardIcon);

    const logoutIcon = screen.getByAltText('logout-icon');
    expect(logoutIcon).toBeInTheDocument();
    fireEvent.click(logoutIcon);
    expect(logoutFn).toHaveBeenCalled();
  });

  test('active icon state is set correctly when URL contains "/dashboard"', () => {
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useLocation: jest.fn().mockReturnValue({ pathname: '/dashboard' })
    }));

    const dashboardIcon = screen.getByAltText('Active-dashboard-icon');
    expect(dashboardIcon).toBeInTheDocument();
    fireEvent.click(dashboardIcon);
  });
});
