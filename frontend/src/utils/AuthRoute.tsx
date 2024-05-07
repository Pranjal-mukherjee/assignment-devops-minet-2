import { withAuthenticationRequired } from '@auth0/auth0-react';
import React from 'react';

interface AuthenticationGuardProps {
  component: React.ComponentType<any>;
}

export const AuthRoute: React.FC<AuthenticationGuardProps> = ({ component: Component }) => {
  const isAuthenticated = localStorage.getItem('user') != null;

  if (isAuthenticated) {
    return <Component />;
  }

  const AuthenticatedComponent = withAuthenticationRequired(Component);
  return <AuthenticatedComponent />;
};
