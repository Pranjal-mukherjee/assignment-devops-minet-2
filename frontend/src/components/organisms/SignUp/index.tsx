import { IconButton, InputAdornment, Stack } from '@mui/material';
import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import TypographyComponent from '../../atoms/Typography';
import google from '../../../../public/assets/images/google.svg';
import facebook from '../../../../public/assets/images/stripe.svg';
import microsoft from '../../../../public/assets/images/xero.svg';
import { EmailRegex, NameRegex, PasswordRegex } from '../../../utils/regex';
import { theme } from '../../../theme';
import  InputFieldWithLabel  from '../../molecules/InputFieldWithLabel';
import  IconTypography  from '../../molecules/IconTypography';
import  DividerComponent  from '../../atoms/Divider';
import Visibility from '../../../../public/assets/icons/Visibility.svg';
import VisibilityOff from '../../../../public/assets/icons/VisibilityOff.svg';
import { SIGNUP_CONSTANTS } from '../../../utils/constants';
import {
  FooterText,
  MainContainer,
  SignUpForm,
  SignUpOuterDiv,
  SocialLoginIconButtons,
  StyledButtonComponent
} from './style';
import IconComponent from '../../atoms/Icon';
import { StyledInputField } from '../ResetPassword/style';

export interface SignupProps {
  handleLogIn?: () => void;
  handleSignupWithGoogle?: () => void;
  onSignUp?: any;
}

const SignUp = (Props: SignupProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [nameError, setNameError] = useState('');
  const [showPassword, setShowPassword] = React.useState(false);
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    const isFormValid = !!(
      name &&
      email &&
      password &&
      !nameError &&
      !emailError &&
      !passwordError
    );
    setFormValid(isFormValid);
  }, [name, email, password, nameError, emailError, passwordError]);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);

    if (!validateName(event.target.value)) {
      setNameError(SIGNUP_CONSTANTS.Name_Error);
    } else {
      setNameError('');
    }
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);

    if (!validateEmail(event.target.value)) {
      setEmailError(SIGNUP_CONSTANTS.Email_Error);
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);

    if (!validatePassword(event.target.value)) {
      setPasswordError(SIGNUP_CONSTANTS.Password_Error);
    } else {
      setPasswordError('');
    }
  };

  const handleSignUp = useCallback(() => {
    Props.onSignUp(name, email, password);
  }, [email, password]);


  const validateEmail = (email: string) => {
    return EmailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    return PasswordRegex.test(password);
  };

  const validateName = (name: string) => {
    return NameRegex.test(name);
  };

  return (
    <MainContainer container>
      <SignUpOuterDiv container>
        <TypographyComponent
          variant="h4"
          color={theme.palette.textColor.highEmp}
          sx={{ marginBottom: '1.66vw' }}>
          {SIGNUP_CONSTANTS.Title}
        </TypographyComponent>
        <SignUpForm container>
          <InputFieldWithLabel
            text={SIGNUP_CONSTANTS.Name_Label}
            placeholder={SIGNUP_CONSTANTS.Name_PlaceHolder}
            type="text"
            handleChange={handleNameChange}
            error={Boolean(nameError)}
            helperText={nameError}
            sx={StyledInputField}
          />
          <InputFieldWithLabel
            text={SIGNUP_CONSTANTS.Email_Label}
            placeholder={SIGNUP_CONSTANTS.Email_PlaceHolder}
            type="email"
            handleChange={handleEmailChange}
            error={Boolean(emailError)}
            helperText={emailError}
            sx={StyledInputField}
          />
          <InputFieldWithLabel
            text={SIGNUP_CONSTANTS.Password_Label}
            placeholder={SIGNUP_CONSTANTS.Password_PlaceHolder}
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
            handleChange={handlePasswordChange}
            error={Boolean(passwordError)}
            sx={StyledInputField}
          />
          <TypographyComponent variant="caption2" color={theme.palette.gray[1300]}>
            {SIGNUP_CONSTANTS.DefaultErrorMessage}
          </TypographyComponent>
          <StyledButtonComponent
            variant="contained"
            disabled={!formValid}
            onClick={handleSignUp}
            data-testid="signup-button">
            <TypographyComponent variant="button" color={theme.palette.gray.white}>
              {SIGNUP_CONSTANTS.Signup_Button}
            </TypographyComponent>
          </StyledButtonComponent>
        </SignUpForm>
        <Stack width="100%">
          <DividerComponent height="2px" color={theme.palette.gray[100]} text={'Or'} />
        </Stack>
        <SocialLoginIconButtons>
          <IconTypography
            src={google}
            text={SIGNUP_CONSTANTS.GooGle}
            alt={'Google Icon'}
            variant="body1"
            fontColor={theme.palette.textColor.medEmp}
            onClick={Props.handleSignupWithGoogle}
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
        </SocialLoginIconButtons>
        <FooterText>
          <TypographyComponent variant="body1" color={theme.palette.textColor.medEmp}>
            {SIGNUP_CONSTANTS.Account}
          </TypographyComponent>
          <TypographyComponent
            variant="body1"
            color={theme.palette.primary[500]}
            onClick={Props.handleLogIn}
            sx={{ cursor: 'pointer' }}>
            {SIGNUP_CONSTANTS.Login_Button}
          </TypographyComponent>
        </FooterText>
      </SignUpOuterDiv>
    </MainContainer>
  );
};

export default SignUp;
