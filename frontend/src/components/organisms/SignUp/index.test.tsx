import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SignUp from './index';
import '@testing-library/jest-dom/extend-expect';

describe('SignUp', () => {
  it('renders SignUp component', () => {
    render(<SignUp />);

    const signUpElement = screen.getByText('Signup with Minet');
    expect(screen.getByText('Already have an account?')).toBeInTheDocument();
    expect(
      screen.getByText('A min of 8 charaters with atleast 1 special character and number included')
    ).toBeInTheDocument();
    expect(screen.getByText('Google')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Google'));
    const eyeIcon = screen.getByLabelText('toggle password visibility');
    expect(eyeIcon).toBeInTheDocument();
    fireEvent.click(eyeIcon);
    expect(screen.getByText('Facebook')).toBeInTheDocument();
    expect(screen.getByText('Microsoft')).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(signUpElement).toBeInTheDocument();
  });

  it('Disabled the signup button when invalid details are given', () => {
    render(<SignUp />);

    const nameInput = screen.getByPlaceholderText('Eg: John Doe');
    const emailInput = screen.getByPlaceholderText('you@company.com');
    const passwordInput = screen.getByPlaceholderText('Create Password');
    fireEvent.change(nameInput, { target: { value: '1234' } });
    fireEvent.change(emailInput, { target: { value: 'invalid_email' } });
    fireEvent.change(passwordInput, { target: { value: 'invalid_password' } });
    const signUpButton = screen.getByTestId('signup-button');

    expect(signUpButton).toBeDisabled();
  });

  it('Enabled the signup button when valid details are given', () => {
    const handleSubmit = jest.fn();
    render(<SignUp onSignUp={handleSubmit}/>);

    const nameInput = screen.getByPlaceholderText('Eg: John Doe');
    const emailInput = screen.getByPlaceholderText('you@company.com');
    const passwordInput = screen.getByPlaceholderText('Create Password');
    const signUpButton = screen.getByTestId('signup-button');
    fireEvent.change(nameInput, { target: { value: 'Jhon' } });
    fireEvent.change(emailInput, { target: { value: 'JohnDoe@gmail.com' } });
    fireEvent.change(passwordInput, {
      target: { value: 'Jhon@123' }
    });

    expect(signUpButton).toBeEnabled();
    fireEvent.click(signUpButton);
  });
});
