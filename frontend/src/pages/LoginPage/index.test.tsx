import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import LoginPage from '.';
import '@testing-library/jest-dom/extend-expect';
import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router } from 'react-router-dom';
import { checkUsers } from '../../services';

jest.mock('../../services', () => ({
  checkUsers: jest.fn(),
}));

jest.mock('@auth0/auth0-react');
describe('LoginPage', () => {
  const login = jest.fn();
  beforeEach(() => {
    (useAuth0 as jest.Mock).mockReturnValue({
      isAuthenticated: false,
      loginWithRedirect: login
    });
    render(<LoginPage />, { wrapper: Router });
  });

  it('renders without crashing', () => {
    (checkUsers as jest.Mock).mockResolvedValue(null);
    const imageElement = screen.getByAltText('Image not found');
    expect(imageElement).toBeInTheDocument();

    const SignupText = screen.getByText('Signup');
    expect(SignupText).toBeInTheDocument();
    fireEvent.click(SignupText);

    const emailInput = screen.getByPlaceholderText("you@company.com");
    const passwordInput = screen.getByPlaceholderText("Enter Password");
    const signInButton = screen.getByTestId('signin-button');
    fireEvent.change(emailInput, { target: { value: "vamsi@gmail.com" } });
    fireEvent.change(passwordInput, {
      target: { value: "Vamsi@99" },
    });

    expect(signInButton).toBeEnabled();
    fireEvent.click(signInButton);
  });

  test('click on sign in with google', () => {
    const googleButton = screen.getByAltText('Google Icon');
    fireEvent.click(googleButton);
    expect(login).toBeCalled;
  });

  test("clicking on the signIn button",()=>{
    (checkUsers as jest.Mock).mockResolvedValue('user123');

    const emailInput = screen.getByPlaceholderText("you@company.com");
    const passwordInput = screen.getByPlaceholderText("Enter Password");
    const signInButton = screen.getByTestId('signin-button');
    fireEvent.change(emailInput, { target: { value: "vamsi@gmail.com" } });
    fireEvent.change(passwordInput, {
      target: { value: "Vamsi@99" },
    });

    expect(signInButton).toBeEnabled();
    fireEvent.click(signInButton);
  })
});
