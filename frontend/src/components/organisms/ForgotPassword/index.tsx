import React, { ChangeEvent, useState } from 'react';
import {
  CustomLoginText,
  InputDataContainer,
  MainContainer,
  StyledButton,
  TypographyContainer
} from './style';
import TypographyComponent from '../../atoms/Typography';
import {
  BACK_TEXT,
  CODE_PLACEHOLDER,
  EMAIL_ERROR,
  EMAIL_LABEL,
  EMAIL_PLACEHOLDER,
  FORGOT_PASSWORD_TEXT,
  INVALID_OTP_LENGTH,
  LOGIN_TEXT,
  RESET_CODE,
  RESET_PASSWORD_ERROR,
  RESET_PASSWORD_TEXT,
  SEND_RESET_LINK,
  USER_NOT_EXISTS,
  VALID_OTP
} from '../../../utils/constants';
import InputFieldWithLabel from '../../molecules/InputFieldWithLabel';
import { theme } from '../../../theme';
import { useNavigate } from 'react-router-dom';
import { EmailRegex } from '../../../utils/regex';
import { resetPassword, validateOtp } from '../../../services';

interface IForgorPasswordProps {
  handleForgotPassword: (email: string) => void;
}

const ForgotPassword = ({ handleForgotPassword }: IForgorPasswordProps) => {
  const [code, setCode] = useState<boolean>(false);
  const navigate = useNavigate();
  const handleBackToLogin = () => {
    navigate('/');
  };

  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<string>(' ');
  const [resetCode, setResetCode] = useState<string>('');
  const [error, setError] = useState<string>();
  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);

    if (!EmailRegex.test(event.target.value)) {
      setEmailError(EMAIL_ERROR);
    } else {
      setEmailError('');
    }
  };

  const handleStateChange = async () => {
    const userData = await resetPassword(email);
    if (userData?.message != RESET_PASSWORD_ERROR) {
      setCode(true);
      setError('');
    } else {
      setError(USER_NOT_EXISTS);
    }
  };

  const handleResetCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setResetCode(value);
    if (value.length != 8) {
      setEmailError(INVALID_OTP_LENGTH);
    } else {
      setEmailError('');
    }
  };

  const validateOtpCode = async () => {
    const response = await validateOtp(resetCode, email);
    console.log('response : ', response);

    if (!response) {
      setEmailError(VALID_OTP);
    } else {
      setEmailError('');
      handleForgotPassword(email);
    }
  };

  const handleClick = () => {
    if (code) {
      validateOtpCode();
    } else {
      handleStateChange();
    }
  };

  return (
    <MainContainer container>
      <TypographyComponent variant="h4">{FORGOT_PASSWORD_TEXT}</TypographyComponent>
      <TypographyComponent color={theme.palette.error[500]} variant="caption2">
        {error}
      </TypographyComponent>
      <InputDataContainer container>
        <InputFieldWithLabel
          handleChange={code ? handleResetCodeChange : handleEmailChange}
          placeholder={code ? CODE_PLACEHOLDER : EMAIL_PLACEHOLDER}
          text={code ? RESET_CODE : EMAIL_LABEL}
          value={code ? resetCode : email}
          error={emailError.length > 1}
          helperText={emailError}
          type={code ? 'number' : 'string'}
        />
        <StyledButton onClick={handleClick} disabled={emailError.length !== 0} variant="contained">
          {code ? RESET_PASSWORD_TEXT : SEND_RESET_LINK}
        </StyledButton>
      </InputDataContainer>
      <TypographyContainer>
        <TypographyComponent color={theme.palette.textColor.medEmp} variant="body1">
          {BACK_TEXT}
        </TypographyComponent>
        <CustomLoginText onClick={handleBackToLogin} variant="body1">
          {LOGIN_TEXT}
        </CustomLoginText>
      </TypographyContainer>
    </MainContainer>
  );
};

export default ForgotPassword;
