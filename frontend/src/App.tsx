import { Route, Routes } from 'react-router-dom';
import { routes } from '../src/utils/routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useAuth0 } from '@auth0/auth0-react';
import { addAuthUser } from './services';

const queryClient = new QueryClient();

export const App = () => {
  const { isAuthenticated, user } = useAuth0();

  if (isAuthenticated && user && user.name && user.email) {
    addAuthUser(user.name, user.email, 'Test@1234');
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </QueryClientProvider>
  );
};
