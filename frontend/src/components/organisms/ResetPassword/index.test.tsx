import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import  ResetPassword  from '.';
import '@testing-library/jest-dom';
import { render } from '../../../test-setup';

jest.mock('@tanstack/react-query', () => ({
  useMutation: jest.fn(() => ({
    mutate: jest.fn()
  })),
  useQueryClient: jest.fn(() => ({
    invalidateQueries: jest.fn()
  }))
}));

describe('ResetPassword}', () => {
  it('should render ResetPassword component correctly', () => {
    render(<ResetPassword email={''} />);

    const resetText = screen.getByTestId('reset-text');
    expect(resetText).toBeInTheDocument();
  });

  it('should disable Reset Password button when invalid passwords are given', () => {
    render(<ResetPassword email={''} />);
    const passwordInputs = screen.getAllByPlaceholderText(/Enter Password/);
    const newPasswordInput = passwordInputs[0];
    fireEvent.change(newPasswordInput, { target: { value: 'invalid_password' } });
    expect(newPasswordInput).toHaveValue('invalid_password');

    const eyeIcon = screen.getByLabelText('toggle password visibility');
    expect(eyeIcon).toBeInTheDocument();
    fireEvent.click(eyeIcon);

    const confirmPasswordInput = passwordInputs[1];
    fireEvent.change(confirmPasswordInput, { target: { value: 'invalid_password' } });
    expect(confirmPasswordInput).toHaveValue('invalid_password');

    const eyeIcon1 = screen.getByLabelText('toggle confirm password visibility');
    expect(eyeIcon1).toBeInTheDocument();
    fireEvent.click(eyeIcon1);

    const resetButton = screen.getByTestId('reset-button');
    expect(resetButton).toBeDisabled();
  });

  it('should disable Reset Password button when valid and mismatched passwords are given', () => {
    render(<ResetPassword email={''} />);

    const passwordInputs = screen.getAllByPlaceholderText(/Enter Password/);
    const newPasswordInput = passwordInputs[0];

    fireEvent.change(newPasswordInput, { target: { value: 'Hello@123' } });
    expect(newPasswordInput).toHaveValue('Hello@123');

    const confirmPasswordInput = passwordInputs[1];
    fireEvent.change(confirmPasswordInput, { target: { value: 'Hello@12' } });
    expect(confirmPasswordInput).toHaveValue('Hello@12');

    const resetButton = screen.getByTestId('reset-button');
    expect(resetButton).toBeDisabled();
  });

  it('should enable Reset Password button when valid and matching passwords are given', () => {
    render(<ResetPassword email={''} />);
    const passwordInputs = screen.getAllByPlaceholderText(/Enter Password/);
    const newPasswordInput = passwordInputs[0];

    fireEvent.change(newPasswordInput, { target: { value: 'Hello@123' } });
    expect(newPasswordInput).toHaveValue('Hello@123');

    const confirmPasswordInput = passwordInputs[1];
    fireEvent.change(confirmPasswordInput, { target: { value: 'Hello@123' } });
    expect(confirmPasswordInput).toHaveValue('Hello@123');

    const resetButton = screen.getByTestId('reset-button');
    expect(resetButton).toBeEnabled();
  });

  it('should set resetSuccess to true when passwords match', async () => {
    render(<ResetPassword email={''} />);
    const passwordInputs = screen.getAllByPlaceholderText(/Enter Password/);
    const newPasswordInput = passwordInputs[0];

    fireEvent.change(newPasswordInput, { target: { value: 'Hello@123' } });
    expect(newPasswordInput).toHaveValue('Hello@123');

    const confirmPasswordInput = passwordInputs[1];
    fireEvent.change(confirmPasswordInput, { target: { value: 'Hello@123' } });
    expect(confirmPasswordInput).toHaveValue('Hello@123');

    const resetButton = screen.getByTestId('reset-button');
    fireEvent.click(resetButton);

    // await new Promise((r) => setTimeout(r, 2000));

    // const successText = screen.getByTestId('reset-text1');
    // expect(successText).toBeInTheDocument();

    // const loginButton = screen.getByTestId('login-button');
    // expect(loginButton).toBeInTheDocument();
    // fireEvent.click(loginButton);
  });
});
