import  BuyPage  from '../pages/BuyPage';
import CheckoutSuccessPage from '../pages/CheckoutSuccessPage';
import CryptoCurrencyPage from '../pages/CryptoCurrencyPage';
import DashBoardPage from '../pages/DashBoardPage';
import ForgotPasswordPage from '../pages/ForgotPassword';
import LoginPage from '../pages/LoginPage';
import SellPage from '../pages/SellPage';
import SignUpPage from '../pages/SignUpPage';
import { TradePage } from '../pages/TradePage';
import  WalletCashPage  from '../pages/WalletCashPage';
import { AuthRoute } from './AuthRoute';

export const routes = [
  { path: '/signup', element: <SignUpPage /> },
  { path: '/', element: <LoginPage /> },
  { path: '/forgotPassword', element: <ForgotPasswordPage /> },
  {
    path: '/dashboard',
    element: <AuthRoute component={DashBoardPage} />
  },
  {
    path: '/trade',
    element: <AuthRoute component={TradePage} />
  },
  {
    path: '/details/:coinNameURL',
    element: <AuthRoute component={CryptoCurrencyPage} />
  },
  {
    path: '/purchase',
    element: <AuthRoute component={BuyPage} />
  },
  {
    path: '/sell',
    element: <AuthRoute component={SellPage} />
  },
  {
    path: '/success',
    element: <AuthRoute component={CheckoutSuccessPage} />
  },
  {
    path: '/wallet',
    element: <AuthRoute component={WalletCashPage} />
  }
];
