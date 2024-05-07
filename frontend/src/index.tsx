import ReactDOM from 'react-dom/client';
import { App } from './App';
import { ThemeProvider } from '@emotion/react';
import { Auth0Provider } from '@auth0/auth0-react';
import { theme } from './theme';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { CssBaseline } from '@mui/material';
import { AUTH0_CLIENT_ID, AUTH0_DOMAIN } from './utils/constants';
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain={AUTH0_DOMAIN}
        clientId={AUTH0_CLIENT_ID}
        authorizationParams={{
          redirect_uri: `${window.location.origin}/dashboard`
        }}>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <App />
        </ThemeProvider>
      </Auth0Provider>
    </BrowserRouter>
  </StrictMode>
);
