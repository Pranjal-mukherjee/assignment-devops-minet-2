import React, { useState } from 'react';
import SignupTemplate from '../../components/templates/SignupTemplate';
import ForgotPassword from '../../components/organisms/ForgotPassword';
import  ResetPassword  from '../../components/organisms/ResetPassword';
import ForgotPasswordImage from '../../../public/assets/images/login.svg';

const ForgotPasswordPage = () => {
  const [forgot, setForgot] = useState<boolean>(true);
  const [email, setEmail] = useState<string>('');
  const handleForgotPasswordOnClick = (email: string) => {
    setEmail(email);
    setForgot(!forgot);
  };
  return (
    <SignupTemplate
      body={
        forgot ? (
          <ForgotPassword handleForgotPassword={handleForgotPasswordOnClick} />
        ) : (
          <ResetPassword email={email} />
        )
      }
      img={ForgotPasswordImage}
    />
  );
};

export default ForgotPasswordPage;
