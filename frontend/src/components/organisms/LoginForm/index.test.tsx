import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LoginForm from './index';
import { render } from '../../../test-setup';
import { FORGOT_PASSWORD_TEXT } from '../../../utils/constants';

describe('Login Form', () => {
  test('renders Login component', () => {
    render(<LoginForm />);

    const signInElement = screen.getByText('Login to Minet');
    expect(screen.getByText('Google')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Google'));
    const eyeIcon = screen.getByLabelText('toggle password visibility');
    expect(eyeIcon).toBeInTheDocument();
    fireEvent.click(eyeIcon);
    expect(screen.getByText('Facebook')).toBeInTheDocument();
    expect(screen.getByText('Microsoft')).toBeInTheDocument();
    expect(signInElement).toBeInTheDocument();
  });

  test('Disabled the signin button when invalid details are given', () => {
    render(<LoginForm />);

    const emailInput = screen.getByPlaceholderText('you@company.com');
    const passwordInput = screen.getByPlaceholderText('Enter Password');
    fireEvent.change(emailInput, { target: { value: 'invalid_email' } });
    fireEvent.change(passwordInput, { target: { value: 'invalid_password' } });
    const signInButton = screen.getByTestId('signin-button');

    expect(signInButton).toBeDisabled();
  });

  test('Enabled the signin button when valid details are given', () => {
    const handleSubmit = jest.fn();
    render(<LoginForm onLogin={handleSubmit} />);

    const emailInput = screen.getByPlaceholderText('you@company.com');
    const passwordInput = screen.getByPlaceholderText('Enter Password');
    const signInButton = screen.getByTestId('signin-button');
    fireEvent.change(emailInput, { target: { value: 'JohnDoe@gmail.com' } });
    fireEvent.change(passwordInput, {
      target: { value: 'Jhon@123' }
    });

    expect(signInButton).toBeEnabled();
    fireEvent.click(signInButton);
  });

  test('should navigate to forgot password', () => {
    render(<LoginForm />);
    const forgotButton = screen.getByText(FORGOT_PASSWORD_TEXT);
    expect(forgotButton).toBeDefined();
    fireEvent.click(forgotButton);
  });
});
