import { fireEvent, screen, waitFor } from '@testing-library/react';
import ForgotPassword from '.';
import {
  CODE_PLACEHOLDER,
  EMAIL_PLACEHOLDER,
  LOGIN_TEXT,
  RESET_PASSWORD_TEXT,
  SEND_RESET_LINK,
  mockUserData
} from '../../../utils/constants';
import { render } from '../../../test-setup';

export const mockResetPasswordResponse = {
  status: 200,
  message: 'Email Sent Successfully',
  timeStamp: 1704448060216
};

jest.mock('../../../services/', () => ({
  resetPassword: jest.fn(() => Promise.resolve(mockResetPasswordResponse)),
  validateOtp: jest.fn(() => Promise.resolve(true))
}));

describe('Forgotpassword component', () => {
  it('should render Forgot Password component', async () => {
    const handleForgotPassword = jest.fn();
    const element = render(<ForgotPassword handleForgotPassword={handleForgotPassword} />);

    expect(element).toBeDefined();
    const inputElement = screen.getByPlaceholderText(EMAIL_PLACEHOLDER);
    fireEvent.change(inputElement, { target: { value: 'test' } });

    fireEvent.change(inputElement, { target: { value: 'test@gmail.com' } });

    fireEvent.click(screen.getByText(SEND_RESET_LINK));

    await new Promise((r) => setTimeout(r, 2000));

    const code = screen.getByPlaceholderText(CODE_PLACEHOLDER);
    fireEvent.change(code, { target: { value: '1234' } });
    fireEvent.change(code, { target: { value: '123433333' } });
    fireEvent.change(code, { target: { value: '11111111' } });
    fireEvent.change(code, { target: { value: '12345678' } });
    fireEvent.click(screen.getByText(RESET_PASSWORD_TEXT));
  });

  it('should navigate to Login component', () => {
    const handleForgotPassword = jest.fn();
    const element = render(<ForgotPassword handleForgotPassword={handleForgotPassword} />);

    expect(element).toBeDefined();
    fireEvent.click(screen.getByText(LOGIN_TEXT));
  });
});
