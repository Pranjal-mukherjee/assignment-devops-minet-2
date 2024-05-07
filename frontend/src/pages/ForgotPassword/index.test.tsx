import { fireEvent, screen } from '@testing-library/react';
import ForgotPasswordPage from '.';
import {
  CODE_PLACEHOLDER,
  CONFIRM_PASSWORD,
  EMAIL_PLACEHOLDER,
  ENTER_PASSWORD,
  FORGOT_PASSWORD_TEXT,
  LOGIN_TEXT,
  RESET_PASSWORD_TEXT,
  SEND_RESET_LINK,
  mockUserData
} from '../../utils/constants';
import { render } from '../../test-setup';
import { mockResetPasswordResponse } from '../../components/organisms/ForgotPassword/index.test';

jest.mock('../../services/', () => ({
  resetPassword: jest.fn(() => Promise.resolve(mockResetPasswordResponse)),
  validateOtp: jest.fn(() => Promise.resolve(true))
}));

jest.mock('@tanstack/react-query', () => ({
  useMutation: jest.fn(() => ({
    mutate: jest.fn(() => {
      data: mockUserData;
    })
  }))
}));

describe('Forgot Password Page component', () => {
  it('should render Forgot Password Page component', async () => {
    const element = render(<ForgotPasswordPage />);
    expect(element).toBeDefined();
    expect(screen.getByText(FORGOT_PASSWORD_TEXT)).toBeDefined();
    const emailField = screen.getByPlaceholderText(EMAIL_PLACEHOLDER);
    expect(emailField).toBeDefined();
    fireEvent.change(emailField, { target: { value: 'raj' } });
    fireEvent.change(emailField, { target: { value: 'raj@gmail.com' } });
    fireEvent.click(screen.getByText(SEND_RESET_LINK));

    await new Promise((r) => setTimeout(r, 2000));

    const code = screen.getByPlaceholderText(CODE_PLACEHOLDER);
    fireEvent.change(code, { target: { value: '1234' } });
    fireEvent.change(code, { target: { value: '123433333' } });
    fireEvent.change(code, { target: { value: '11111111' } });
    fireEvent.change(code, { target: { value: '12345678' } });
    fireEvent.click(screen.getByText(RESET_PASSWORD_TEXT));

    await new Promise((r) => setTimeout(r, 2000));

    const password = screen.getByPlaceholderText(ENTER_PASSWORD);
    const confirmPassword = screen.getByPlaceholderText(CONFIRM_PASSWORD);
    fireEvent.change(password, { target: { value: 'confirmPassword' } });
    fireEvent.change(confirmPassword, { target: { value: 'cnfirmPassword' } });

    fireEvent.change(password, { target: { value: 'Password@123' } });
    fireEvent.change(password, { target: { value: 'Password@123' } });
    fireEvent.click(screen.getAllByText(RESET_PASSWORD_TEXT)[1]);
  });

  it('should navigate to login page component ', () => {
    const element = render(<ForgotPasswordPage />);

    expect(element).toBeDefined();
    fireEvent.click(screen.getByText(LOGIN_TEXT));
  });
});
