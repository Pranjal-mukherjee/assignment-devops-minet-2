import { IconButton, InputAdornment, Stack } from '@mui/material';
import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import TypographyComponent from '../../atoms/Typography';
import google from '../../../../public/assets/images/google.svg';
import facebook from '../../../../public/assets/images/stripe.svg';
import microsoft from '../../../../public/assets/images/xero.svg';
import { EmailRegex, PasswordRegex } from '../../../utils/regex';
import { theme } from '../../../theme';
import  InputFieldWithLabel  from '../../molecules/InputFieldWithLabel';
import IconTypography  from '../../molecules/IconTypography';
import  DividerComponent  from '../../atoms/Divider';
import Visibility from '../../../../public/assets/icons/Visibility.svg';
import VisibilityOff from '../../../../public/assets/icons/VisibilityOff.svg';
import {
  ENTER_PASSWORD,
  FORGOT_PASSWORD_TEXT,
  LOGIN_ACCOUNT,
  LOGIN_TITLE,
  SIGNUP_CONSTANTS,
  SIGN_IN,
  SIGN_UP
} from '../../../utils/constants';
import IconComponent from '../../atoms/Icon';
import {
  LoginOuterDiv,
  OuterContainer,
  SocialLoginButtons,
  StyledButton,
  StyledFooterText,
  StyledLoginForm
} from './styles';
import { StyledInputField } from '../ResetPassword/style';
import { useNavigate } from 'react-router-dom';

export interface LoginProps {
  handleSignup?: () => void;
  handleLoginWithGoogle?: () => void;
  onLogin?: any;
  handleForgotPasswordClick?: () => void;
}

const LoginForm = (Props: LoginProps) => {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = React.useState(false);
  const [formValid, setFormValid] = useState(false);

  const handleForgotPasswordClick = () => {
    navigate('/forgotPassword');
  };

  useEffect(() => {
    const isFormValid = !!(userEmail && userPassword && !emailError && !passwordError);
    setFormValid(isFormValid);
  }, [userEmail, userPassword, emailError, passwordError]);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleEmailFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserEmail(event.target.value);

    if (!validateEmail(event.target.value)) {
      setEmailError(SIGNUP_CONSTANTS.Email_Error);
    } else {
      setEmailError('');
    }
  };

  const handleLogin = useCallback(() => {
    Props.onLogin(userEmail, userPassword);
  }, [userEmail, userPassword]);

  const handlePasswordFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserPassword(event.target.value);

    if (!validatePassword(event.target.value)) {
      setPasswordError(SIGNUP_CONSTANTS.Password_Error);
    } else {
      setPasswordError('');
    }
  };

  const validateEmail = (email: string) => {
    return EmailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    return PasswordRegex.test(password);
  };

  return (
    <OuterContainer>
      <LoginOuterDiv>
        <TypographyComponent
          variant="h4"
          color={theme.palette.textColor.highEmp}
          sx={{ marginBottom: '1.45vw' }}>
          {LOGIN_TITLE}
        </TypographyComponent>
        <StyledLoginForm>
          <InputFieldWithLabel
            text={SIGNUP_CONSTANTS.Email_Label}
            placeholder={SIGNUP_CONSTANTS.Email_PlaceHolder}
            type="email"
            handleChange={handleEmailFieldChange}
            error={Boolean(emailError)}
            helperText={emailError}
            sx={StyledInputField}
          />
          <InputFieldWithLabel
            text={SIGNUP_CONSTANTS.Password_Label}
            placeholder={ENTER_PASSWORD}
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end">
                  {showPassword ? (
                    <IconComponent src={Visibility} />
                  ) : (
                    <IconComponent src={VisibilityOff} />
                  )}
                </IconButton>
              </InputAdornment>
            }
            handleChange={handlePasswordFieldChange}
            error={Boolean(passwordError)}
            sx={StyledInputField}
          />
          <TypographyComponent
            color={theme.palette.primary[500]}
            variant="body2"
            onClick={handleForgotPasswordClick}
            sx={{ cursor: 'pointer' }}>
            {FORGOT_PASSWORD_TEXT}
          </TypographyComponent>
          <StyledButton
            variant="contained"
            disabled={!formValid}
            onClick={handleLogin}
            data-testid="signin-button">
            <TypographyComponent variant="button" color={theme.palette.gray.white}>
              {SIGN_IN}
            </TypographyComponent>
          </StyledButton>
        </StyledLoginForm>
        <Stack width="100%">
          <DividerComponent height="2px" color={theme.palette.gray[100]} text={'Or'} />
        </Stack>
        <SocialLoginButtons>
          <IconTypography
            src={google}
            text={SIGNUP_CONSTANTS.GooGle}
            alt={'Google Icon'}
            variant="body1"
            fontColor={theme.palette.textColor.medEmp}
            onClick={Props.handleLoginWithGoogle}
            isCardStyled={true}
          />
          <IconTypography
            src={facebook}
            text={SIGNUP_CONSTANTS.Facebook}
            variant="body1"
            fontColor={theme.palette.textColor.medEmp}
            isCardStyled={true}
          />
          <IconTypography
            src={microsoft}
            text={SIGNUP_CONSTANTS.Microsoft}
            variant="body1"
            fontColor={theme.palette.textColor.medEmp}
            isCardStyled={true}
          />
        </SocialLoginButtons>
        <StyledFooterText>
          <TypographyComponent variant="body1" color={theme.palette.textColor.medEmp}>
            {LOGIN_ACCOUNT}
          </TypographyComponent>
          <TypographyComponent
            variant="body1"
            fontWeight={300}
            color={theme.palette.primary[500]}
            onClick={Props.handleSignup}
            sx={{ cursor: 'pointer' }}>
            {SIGN_UP}
          </TypographyComponent>
        </StyledFooterText>
      </LoginOuterDiv>
    </OuterContainer>
  );
};

export default LoginForm;
