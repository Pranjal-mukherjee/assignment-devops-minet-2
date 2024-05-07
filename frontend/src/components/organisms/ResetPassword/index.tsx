import React, { ChangeEvent, useEffect, useState } from 'react';
import {
  ResetPasswordContainer,
  StyledMainContainer,
  StyledInputField,
  SuccessContainer
} from './style';
import TypographyComponent from '../../atoms/Typography';
import {
  CONFIRM_PASSWORD,
  ENTER_PASSWORD,
  LOGIN_TEXT,
  PASSWORD_ERROR,
  RESET_PASSWORD_TEXT,
  RESET_SUCCESS_LOGIN,
  RESET_SUCCESS_TEXT,
  SIGNUP_CONSTANTS
} from '../../../utils/constants';
import InputFieldWithLabel from '../../molecules/InputFieldWithLabel';
import { theme } from '../../../theme';
import { PasswordRegex } from '../../../utils/regex';
import { IconButton, InputAdornment } from '@mui/material';
import IconComponent from '../../atoms/Icon';
import Visibility from '../../../../public/assets/icons/Visibility.svg';
import VisibilityOff from '../../../../public/assets/icons/VisibilityOff.svg';
import ResetPasswordSuccess from '../../molecules/ResetPasswordSuccess';
import { StyledButton } from '../LoginForm/styles';
import success from '../../../../public/assets/icons/TickCircle.svg';
import { useNavigate } from 'react-router-dom';
import { useUpdateUserData } from './hooks';
interface IResetPassword {
  email: string;
}

const ResetPassword = ({ email }: IResetPassword) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [resetSuccess, setResetSuccess] = useState(false);
  const [passwordError, setPasswordError] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const isFormValid = !!(newPassword && confirmPassword && passwordsMatch);
    setFormValid(isFormValid);
  }, [newPassword, confirmPassword, passwordsMatch]);

  const handleClickShowNewPassword = () => setShowNewPassword((show) => !show);

  const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);

  const handleNewPasswordFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newPasswordValue = event.target.value;
    setNewPassword(newPasswordValue);
  };

  const handleConfirmPasswordFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    const confirmPasswordValue = event.target.value;
    setConfirmPassword(confirmPasswordValue);

    setPasswordsMatch(
      newPassword === confirmPasswordValue && validatePassword(confirmPasswordValue)
    );

    if (newPassword === confirmPasswordValue) {
      setPasswordError('');
    } else {
      setPasswordError(PASSWORD_ERROR);
    }
  };

  const validatePassword = (password: string) => {
    return PasswordRegex.test(password);
  };

  const { updateUserData, updatedData } = useUpdateUserData();

  const handleResetPassword = () => {
    updateUserData({ email, updateField: { password: confirmPassword } });
  };

  useEffect(() => {
    if (updatedData) {
      setResetSuccess(true);
    }
  }, [updatedData]);

  const handleLogin = () => {
    navigate('/');
  };

  return (
    <StyledMainContainer container>
      {resetSuccess ? (
        <SuccessContainer container>
          <TypographyComponent
            data-testid="reset-text1"
            variant="h4"
            color={theme.palette.textColor.highEmp}>
            {RESET_PASSWORD_TEXT}
          </TypographyComponent>
          <ResetPasswordSuccess
            img={success}
            alt="success-icon"
            mainTitle={RESET_SUCCESS_TEXT}
            subTitle={RESET_SUCCESS_LOGIN}
          />
          <StyledButton variant="contained" data-testid="login-button" onClick={handleLogin}>
            {LOGIN_TEXT}
          </StyledButton>
        </SuccessContainer>
      ) : (
        <>
          <TypographyComponent variant="h4" data-testid="reset-text">
            {RESET_PASSWORD_TEXT}
          </TypographyComponent>
          <ResetPasswordContainer container>
            <InputFieldWithLabel
              handleChange={handleNewPasswordFieldChange}
              placeholder={ENTER_PASSWORD}
              text={ENTER_PASSWORD}
              value={newPassword}
              type={showNewPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowNewPassword}
                    edge="end">
                    {showNewPassword ? (
                      <IconComponent src={Visibility} />
                    ) : (
                      <IconComponent src={VisibilityOff} />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              sx={StyledInputField}
            />
            <InputFieldWithLabel
              handleChange={handleConfirmPasswordFieldChange}
              placeholder={CONFIRM_PASSWORD}
              text={CONFIRM_PASSWORD}
              value={confirmPassword}
              type={showConfirmPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle confirm password visibility"
                    onClick={handleClickShowConfirmPassword}
                    edge="end">
                    {showConfirmPassword ? (
                      <IconComponent src={Visibility} />
                    ) : (
                      <IconComponent src={VisibilityOff} />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              helperText={passwordError}
              error={Boolean(passwordError)}
              sx={StyledInputField}
            />
            <TypographyComponent variant="caption2" color={theme.palette.gray[500]}>
              {SIGNUP_CONSTANTS.DefaultErrorMessage}
            </TypographyComponent>
            <StyledButton
              onClick={handleResetPassword}
              disabled={!formValid}
              variant="contained"
              data-testid="reset-button">
              {RESET_PASSWORD_TEXT}
            </StyledButton>
          </ResetPasswordContainer>
        </>
      )}
    </StyledMainContainer>
  );
};
export default ResetPassword;
