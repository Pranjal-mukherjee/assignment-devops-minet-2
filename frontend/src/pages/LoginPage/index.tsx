import React from 'react';
import loginlogo from '../../../public/assets/images/login.svg';
import SignupTemplate from '../../components/templates/SignupTemplate';
import LoginForm from '../../components/organisms/LoginForm';
import { useNavigate } from 'react-router-dom';
import { useAuth0Provider } from '../../utils/auth0Provider';
import { checkUsers } from '../../services';
import { LOGIN_FILED, NAVIGATE_DASHBOARD } from '../../utils/constants';

const LoginPage = () => {
  const navigate = useNavigate();
  const { loginWithRedirect } = useAuth0Provider();
  const handleOnClickSignup = () => {
    navigate('/signup');
  };
  const handleLogin = async (userEmail: string, userPassword: string) => {
    const user = await checkUsers(userEmail, userPassword);

    if (user) {
      navigate(NAVIGATE_DASHBOARD);
    } else {
      window.alert(LOGIN_FILED);
    }
  };
  return (
    <SignupTemplate
      img={loginlogo}
      body={
        <LoginForm
          handleSignup={handleOnClickSignup}
          handleLoginWithGoogle={loginWithRedirect}
          onLogin={handleLogin}
        />
      }
    />
  );
};

export default LoginPage;
