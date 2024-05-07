import { useAuth0 } from '@auth0/auth0-react';

export const useAuth0Provider = () => {
  const { loginWithRedirect, logout } = useAuth0();

  const handleLogin = () => {
    loginWithRedirect({ authorizationParams: { connection: "google-oauth2" } });
  };

  const handleLogout = () => {
    localStorage.clear();
    logout();
  };

  return {
    loginWithRedirect: handleLogin,
    logout: handleLogout,
  };
};