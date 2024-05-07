import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import SignUpPage from '.';
import '@testing-library/jest-dom/extend-expect';
import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router } from 'react-router-dom';
import { addUser } from '../../services';

jest.mock('../../services', () => ({
  addUser: jest.fn(),
}));
jest.mock('@auth0/auth0-react');
describe('SignUpPage', () => {
  const login = jest.fn();
  beforeEach(() => {
    (useAuth0 as jest.Mock).mockReturnValue({
      isAuthenticated: false,
      loginWithRedirect: login
    });
    render(<SignUpPage />, { wrapper: Router });
  });

  it('renders without crashing', () => {
    (addUser as jest.Mock).mockResolvedValue(null);
    const imageElement = screen.getByAltText('Image not found');
    expect(imageElement).toBeInTheDocument();

    const LoginText = screen.getByText('Login');
    expect(LoginText).toBeInTheDocument();
    fireEvent.click(LoginText);

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

  test('click on sign in with google', () => {
    const googleButton = screen.getByAltText('Google Icon');
    fireEvent.click(googleButton);
    expect(login).toBeCalled;
  });


  test("clicking on the SignUp button",()=>{
    (addUser as jest.Mock).mockResolvedValue('user123');

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
  })
});
