import React from 'react';
import SignUp from '../../components/organisms/SignUp';
import SignupImage from '../../../public/assets/images/SignupPage.svg';
import SignupTemplate from '../../components/templates/SignupTemplate';
import { useNavigate } from 'react-router-dom';
import { useAuth0Provider } from '../../utils/auth0Provider';
import { NAVIGATE_LOGIN, USER_ALREADY_EXIST } from '../../utils/constants';
import { addUser } from '../../services';

const SignUpPage = () => {
  const navigate = useNavigate();
  const { loginWithRedirect } = useAuth0Provider();
  const handleOnClickLogin = () => {
    navigate('/');
  };
  const handleSignUp = async (name: string, email: string, password: string) => {
    const user = await addUser(name, email, password);
    if (user == null) {
      window.alert(USER_ALREADY_EXIST);
    } else {
      navigate(NAVIGATE_LOGIN);
    }
  };

  return (
    <SignupTemplate
      img={SignupImage}
      body={
        <SignUp
          handleLogIn={handleOnClickLogin}
          handleSignupWithGoogle={loginWithRedirect}
          onSignUp={handleSignUp}
        />
      }
      data-testid="Signup-page"
    />
  );
};

export default SignUpPage;
