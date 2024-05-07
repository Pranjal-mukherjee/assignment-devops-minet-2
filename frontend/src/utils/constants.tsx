import warning from '../../public/assets/images/warning.svg';
import error from '../../public/assets/images/error.svg';
import success from '../../public/assets/images/successTick.svg';
import Bitcoin from '../../public/assets/images/bitcoin.svg';
import bitcoin from '../../public/assets/icons/bitcoin2.svg';
import CardanoCoin from '../../public/assets/icons/CardanoCoin.svg';
import Dodge from '../../public/assets/icons/Dodge.svg';
import TetherCoin from '../../public/assets/icons/TetherCoin.svg';
import XrpCoin from '../../public/assets/icons/XrpCoin.svg';
import ethreum from '../../public/assets/icons/EthereumIcon.svg';
import USDCoin from '../../public/assets/icons/USDCoin.svg';
import Ethereum from '../../public/assets/images/ethereumCoin.svg';
import Binance from '../../public/assets/images/binance.svg';
import Tether from '../../public/assets/images/smallTether.svg';
import Cardano from '../../public/assets/images/cardano.svg';
import XRP from '../../public/assets/images/smallXrp.svg';
import DodgeCoin from '../../public/assets/images/dodgeCoin.svg';
import Polkadot from '../../public/assets/images/polkaDot.svg';
import Ethereum2 from '../../public/assets/images/ethereum2.svg';
import { CryptoDetails } from '../components/organisms/ChooseCrypto';
import DarkBitcoin from '../../public/assets/images/darkBitcoin.svg';
import portfolio from '../../public/assets/images/navBarPortfolio.svg';
import trade from '../../public/assets/images/navBarTrade.svg';
import notification from '../../public/assets/images/navBarNotification.svg';
import ethereum from '../../public/assets/images/ethereum.svg';
import tether from '../../public/assets/icons/TetherCoin.svg';
import xrp from '../../public/assets/icons/XrpCoin.svg';
import { WatchListGraphProps } from '../components/molecules/WatchListGraph';
import { pxToRem } from '../theme';

export const EMAIL_LABEL = 'Email';
export const EMAIL_PLACEHOLDER = 'you@company.com';
export const NAME_LABEL = 'Full Name';
export const NAME_PLACEHOLDER = 'Eg: John Doe';
export const timeLineValues = ['1H', '24H', '1W', '1M', '1Y', 'ALL'];
export const BITCOIN_ALT = 'Bitcoin';
export const BITCOIN_CODE_ALT = 'BTC';
export const MARKET_CAP_ALT = 'Market Cap';
export type TypographyVariant =
  | 'inherit'
  | 'h4'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'caption1'
  | 'button'
  | 'overline'
  | 'caption2';
export const COIN_INFO_TEXT = 'Click on currency name below to display it on the graph';
export const DISCOVER_ASSETS = 'Discover assets';
export const CHEVRON_LEFT_ALT = 'Left Arrow';
export const INFO_ALT = 'Info Icon';
export const PURCHASED_TEXT = 'Purchased';
export const SOLD_TEXT = 'Sold';
export const TRANSACTION_SUCCESS_ALT = 'Transaction Success';
export const data = [
  {
    name: 'JUN 8',
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: 'JUN 15',
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: 'JUN 22',
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: 'JUN 29',
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: 'JUL 6',
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: 'JUL 13',
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: 'JUN 20',
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

export const USD_COIN_TEXT = 'USD Coin';
export const USD_TEXT = 'US Dollar';
export const USD_COIN_CASH = 'USD Coin(Cash)';
export const DEFAULT_TEXT = 'Default';
export const DUMMY_TOTAL_BALANCE = 'Total Balance - $34,000';
export const RUPEE_COIN_ALT = 'Rupee coin';
export const COINS_TEXT = '10 coins (3 active)';
export const COINS_DATA = [
  {
    cryptoName: 'Bitcoin',
    cryptoClr: '#F7931A33',
    focusColor: '#F7931A',
    width: '13%'
  },
  {
    cryptoName: 'XRP',
    cryptoClr: '#22222233',
    focusColor: '#222222',
    width: '9%'
  },
  {
    cryptoName: 'Polkadot',
    cryptoClr: '#E6007A33',
    focusColor: '#E6007A',
    width: '15%'
  },
  {
    cryptoName: 'Ethereum',
    cryptoClr: '#627EEA33',
    focusColor: '#627EEA',
    width: '15%'
  },
  {
    cryptoName: 'Tether',
    cryptoClr: '#26A17B33',
    focusColor: '#26A17B',
    width: '13%'
  },
  {
    cryptoName: 'Ethereum2',
    cryptoClr: '#19197133',
    focusColor: '#F7931A',
    width: '18%'
  },
  {
    cryptoName: 'Dodge Coin',
    cryptoClr: '#DBC98433',
    focusColor: '#DBC984',
    width: '27%'
  }
];
export const SIGNUP_CONSTANTS = {
  Title: 'Signup with Minet',
  DefaultErrorMessage: 'A min of 8 charaters with atleast 1 special character and number included',
  Signup_Button: 'Sign up',
  Account: 'Already have an account?',
  Login_Button: 'Login',
  Name_Error: 'Enter a valid Name like Eg : John Doe',
  Email_Error: 'Enter a valid Email like Eg : you@company.com',
  Password_Error:
    'Password must be at least 8 characters long, containing at least one capital letter, one digit, and one special character (@#$%^&+=)',
  Name_Label: 'Full name',
  Name_PlaceHolder: 'Eg: John Doe',
  Email_Label: 'Email',
  Email_PlaceHolder: 'you@company.com',
  Password_Label: 'Password',
  Password_PlaceHolder: 'Create Password',
  GooGle: 'Google',
  Facebook: 'Facebook',
  Microsoft: 'Microsoft'
};
export const PAYMENT_METHOD = 'Payment method';
export const PAYMENT_THROUGH = 'Payment through';
export const DELIVERY_FEES = 'Delivery fees';
export const DEPOSIT_TO = 'Deposit to';
export const SEARCH_ALL_ASSETS = 'Search all assets';
export const TOTAL_BALANCE_TEXT = 'Total balance';
export const DURATION_MENU_LIST = ['1W', '1M', '1Y', 'ALL'];
export const WalletData = [
  {
    id: 1,
    date: '2023-12-07',
    src: warning,
    userName: 'From Badgley',
    coinType: 'Bitcoin',
    label: 'Purchased',
    value: '+0.0010 BTC',
    subValue: '+$900'
  },
  {
    id: 2,
    date: '2023-12-03',
    src: error,
    coinType: 'Bitcoin',
    userName: 'From Jane Cooper',
    label: 'Purchased',
    value: '+0.0230 BTC',
    subValue: '+$1,800'
  },
  {
    id: 3,
    date: '2023-11-20',
    src: success,
    coinType: 'Bitcoin',
    userName: 'From Leslie Alexander',
    label: 'Purchased',
    value: '+0.0030 BTC',
    subValue: '+$1,200'
  },
  {
    id: 4,
    date: '2023-02-18',
    src: success,
    coinType: 'Bitcoin',
    userName: 'From Hawkins',
    label: 'Purchased',
    value: '+0.0150 BTC',
    subValue: '+$1,000'
  },
  {
    id: 5,
    date: '2023-02-15',
    src: success,
    coinType: 'Bitcoin',
    userName: 'From Jenny Wilson',
    label: 'Purchased',
    value: '+0.0650 BTC',
    subValue: '+$3,200'
  },
  {
    id: 6,
    date: '2023-02-15',
    src: success,
    coinType: 'Bitcoin',
    userName: 'From Jacob Jones',
    label: 'Purchased',
    value: '+0.0900 BTC',
    subValue: '+$9,000'
  },
  {
    id: 7,
    date: '2023-02-13',
    src: success,
    coinType: 'Bitcoin',
    userName: 'From Theresa Webb',
    label: 'Purchased',
    value: '+0.0020 BTC',
    subValue: '+$1,800'
  },
  {
    id: 8,
    date: '2020-02-11',
    src: success,
    coinType: 'Bitcoin',
    userName: 'From John Rosser',
    label: 'Purchased',
    value: '+0.0020 BTC',
    subValue: '+$1,800'
  }
];

export const PURCHASE_SUCCESS_ALT =
  'Purchase is completed, please check your balance in your crypto wallet';
export const SELL_SUCCESS_ALT =
  'Sell is completed, please check your balance in your crypto wallet';
export const BUY_CRYPTO_TEXT = 'BUY CRYPTO';
export const SELL_CRYPTO_TEXT = 'SELL CRYPTO';
export const GO_TO_USD = 'GO TO USD COIN';
export const SELECT_SPEED_DELIVERY = 'Select Speed Delivery';
export const INSTANT = 'Instant : ';
export const TRANSACTION_FEE = 'Transaction fees :';
export const DELIVERY_FEE = 'Delivery fees : ';
export const SpeedDeliveryData = [
  {
    id: 1,
    speed: 'Instant :',
    duration: '2-5 minutes',
    fees: '0.001 BTC'
  },
  { id: 2, speed: 'Faster : ', duration: '4 hours', fees: '0.0001 BTC' },
  {
    id: 3,
    speed: 'Fast : ',
    duration: '150 minutes',
    fees: '0.00001 BTC'
  },
  {
    id: 4,
    speed: 'None'
  }
];

export const MY_PORTFOLIO = 'My portfolio';
export const PORTFOLIO_TOTAL_BALANCE = 'Total Balance';

export const DashboardData = [
  {
    name: 'JUN 8',
    Bitcoin: 20,
    Ethereum: 20,
    TotalInvestment: 20
  },
  {
    name: 'JUN 15',
    Bitcoin: 42,
    Ethereum: 30,
    TotalInvestment: 35
  },
  {
    name: 'JUN 22',
    Bitcoin: 38,
    Ethereum: 50,
    TotalInvestment: 30
  },
  {
    name: 'JUN 29',
    Bitcoin: 55,
    Ethereum: 10,
    TotalInvestment: 28
  },
  {
    name: 'JUL 6',
    Bitcoin: 44,
    Ethereum: 45,
    TotalInvestment: 38
  },
  {
    name: 'JUL 13',
    Bitcoin: 48,
    Ethereum: 55,
    TotalInvestment: 40
  }
];

export const ALL_ASSETS_TEXT = 'All Assets';
export const WATCHLIST_TEXT = 'Watchlist';
export const AMOUNT_DETAILS = 'Amount Details';
export const BUY_MAX = 'Buy max';
export const SELL_MAX = 'Sell max';
export const DEFAULT_CRYPTO_VALUE = 0.023451;
export const USD_CASH = 'USD coin (cash)';
export const VIEW_WATCHLIST = 'View Watchlist';
export const FORGOT_PASSWORD_TEXT = 'Forgot Password';
export const SEND_RESET_LINK = 'Send Reset Link';
export const BACK_TEXT = 'Back to';
export const LOGIN_TEXT = 'Login';
export const EMAIL_ERROR = 'Please enter a valid email';
export const TradeFrameData = [
  {
    src: Bitcoin,
    coinHeight: pxToRem(42),
    coinWidth: pxToRem(42),
    coinName: 'Bitcoin',
    coinCode: 'BTC',
    priceChange: '+6.2%',
    price: 3285553,
    marketCap: '$60.1T'
  },
  {
    src: ethreum,
    coinHeight: pxToRem(42),
    coinWidth: pxToRem(42),
    coinName: 'Ethereum',
    coinCode: 'ETH',
    priceChange: '-5.49%',
    price: 3285553,
    marketCap: '$60.1T',
    checked: true
  },
  {
    src: Ethereum2,
    coinHeight: pxToRem(42),
    coinWidth: pxToRem(42),
    coinName: 'Ethereum 2',
    coinCode: 'ETH2',
    priceChange: '+6.2%',
    price: 3285553,
    marketCap: '$60.1T'
  },

  {
    src: TetherCoin,
    coinHeight: pxToRem(42),
    coinWidth: pxToRem(42),
    coinName: 'Tether',
    coinCode: 'USDT',
    priceChange: '+6.2%',
    price: 3285553,
    marketCap: '$60.1T',
    checked: true
  },
  {
    src: bitcoin,
    coinHeight: pxToRem(42),
    coinWidth: pxToRem(42),
    coinName: 'Bitcoin Coin',
    coinCode: 'BNB',
    priceChange: '-5.49%',
    price: 3285553,
    marketCap: '$60.1T'
  },
  {
    src: CardanoCoin,
    coinHeight: pxToRem(42),
    coinWidth: pxToRem(42),
    coinName: 'Cardano',
    coinCode: 'ADA',
    priceChange: '+6.2%',
    price: 3285553,
    marketCap: '$60.1T',
    checked: true
  },
  {
    src: XrpCoin,
    coinHeight: pxToRem(42),
    coinWidth: pxToRem(42),
    coinName: 'XRP',
    coinCode: 'XRP',
    priceChange: '-5.49%',
    price: 3285553,
    marketCap: '$60.1T'
  },
  {
    src: Dodge,
    coinHeight: pxToRem(42),
    coinWidth: pxToRem(42),
    coinName: 'Dodge Coin',
    coinCode: 'XRP',
    priceChange: '+6.2%',
    price: 3285553,
    marketCap: '$60.1T'
  },
  {
    src: USDCoin,
    coinHeight: pxToRem(42),
    coinWidth: pxToRem(42),
    coinName: 'USD Coin',
    coinCode: 'XRP',
    priceChange: '-5.49%',
    price: 3285553,
    marketCap: '$60.1T'
  }
];
export const TradeTableDropdowns = {
  dropdown1: ['ALL', '1H', '24H', '1W', '1M', '1Y'],
  dropdown2: ['All assets']
};
export const NAME = 'Name';
export const PRICE = 'Price';
export const CHANGE = 'Change';
export const WATCH = 'Watch';
export const CURRENT_VALUE = 'Current Value';
export const BITCOIN_DESCRIPTION =
  'The world’s first cryptocurrency, Bitcoin is stored and exchanged securely on the internet through a digital ledger known as a blockchain. Bitcoins are divisible into smaller units known as satoshis each satoshi is worth 0.00000001 bitcoin.';
export const ABOUT_BITCOICOIN = 'About Bitcoin';
export const PRICE_CORRELATION = 'Price correlation with';
export const RESOURCES = 'Resources';
export const OFFICIAL_WEBSITE = 'Official Website';
export const WHITE_PAPER = 'White Paper';
export const WEBSITE_ALT = 'Website Icon';
export const PAPERWORK_ALT = 'Paper Work icon';
export const MOVES_TIGHTLY = 'Moves tightly together';
export const CorrelationData = [
  {
    iconSrc: DarkBitcoin,
    coinName: 'Bitoin',
    coinShortForm: MOVES_TIGHTLY,
    amount: 3285553.73,
    percentage: 100
  },
  {
    iconSrc: Ethereum,
    coinName: 'Etherium',
    coinShortForm: MOVES_TIGHTLY,
    amount: 230966.85,
    percentage: 86
  },
  {
    iconSrc: XRP,
    coinName: 'XRP',
    coinShortForm: MOVES_TIGHTLY,
    amount: 60.2,
    percentage: 10
  },
  {
    iconSrc: Tether,
    coinName: 'Tether',
    coinShortForm: MOVES_TIGHTLY,
    amount: 74.28,
    percentage: 2
  }
];

export const CURRENT_BTC_PRICE = '$3,285,553.73';
export const CHOOSE_CRYPTO = 'Choose Crypto';
export const cryptoDetailsData: CryptoDetails[] = [
  {
    cryptoIcon: Bitcoin,
    cryptoName: 'Bitcoin',
    cryptoValue: 300439.93
  },
  {
    cryptoIcon: Ethereum,
    cryptoName: 'Ethereum',
    cryptoValue: 1297.24
  },
  {
    cryptoIcon: Binance,
    cryptoName: 'Binance',
    cryptoValue: 30054.88
  },
  {
    cryptoIcon: Tether,
    cryptoName: 'Tether',
    cryptoValue: 74.21
  },
  {
    cryptoIcon: Cardano,
    cryptoName: 'Cardano',
    cryptoValue: 138.22
  },
  {
    cryptoIcon: XRP,
    cryptoName: 'XRP',
    cryptoValue: 76.73
  },
  {
    cryptoIcon: DodgeCoin,
    cryptoName: 'DodgeCoin',
    cryptoValue: 21.37
  },
  {
    cryptoIcon: Polkadot,
    cryptoName: 'Polkadot',
    cryptoValue: 1642.39
  },
  {
    cryptoIcon: Ethereum2,
    cryptoName: 'Ethereum2',
    cryptoValue: 216678.1
  }
];
export const LOGIN_TITLE = 'Login to Minet';
export const ENTER_PASSWORD = 'Enter Password';
export const SIGN_IN = 'Sign In';
export const LOGIN_ACCOUNT = "Don't have an account?";
export const SIGN_UP = 'Signup';
export const DASHBOARD = 'Dashboard';
export const CAREERS = 'Careers';
export const LEGAL_PRIVACY = 'Legal & Privacy';
export const MINET_2021 = '© 2021 Minet';
export const NEED_HELP = 'NEED HELP';
export const FOOTER_MENU = ['English', 'Spanish', 'Dutch'];
export const SELL_ORDER = 'You are selling';
export const BUY_ORDER = 'You are buying';
export const BUY_NOW = 'BUY NOW ';
export const SELL_NOW = 'SELL NOW';
export const TRANSACTION_FEE_TEXT = 'transaction fee';
export const TOTAL = 'Total';
export const NavBarData = [
  { id: 1, src: portfolio, alt: 'portfolio-icon', tooltip: 'Portfolio' },
  { id: 2, src: trade, alt: 'trade-icon', tooltip: 'Trade' },
  { id: 3, src: notification, alt: 'notification-icon', tooltip: 'Notification' }
];
export const ALT_TEXT = 'Image not found';
export const RECENT_TRANSACTIONS = 'Recent transactions';
export const VIEW_ALL = 'View All';
export const EMPTY_TRANSACTION_TEXT =
  'You don’t own any crypto. Send yourself some crypto to get started.';
export const RESET_PASSWORD_TEXT = 'Reset Password';
export const CONFIRM_PASSWORD = 'Re-Enter Password';
export const PASSWORD_ERROR = 'Password is not matching';
export const RESET_SUCCESS_TEXT = 'Password reset successful';
export const RESET_SUCCESS_LOGIN = 'Click on button below to proceed to login';
export const DAY_VOLUME = 'Vol. 24H';
export const CIRCULATING_SUPPLY = 'Circulating Supply';
export const ADDED_TO_WATCHLIST = 'ADDED TO WATCHLIST';
export const MY_PORTFOLIO_VALUE = 'My portfolio value';
export const MyPortfolioTableData = [
  {
    id: 1,
    src: Bitcoin,
    coinName: 'Bitcoin',
    shortForm: 'BTC',
    amount: 0,
    percentage: 0
  },
  {
    id: 2,
    src: ethereum,
    coinName: 'Ethereum',
    shortForm: 'ETH',
    amount: 0,
    percentage: 0
  },
  {
    id: 3,
    src: tether,
    coinName: 'Tether',
    shortForm: 'USDT',
    amount: 0,
    percentage: 0
  },
  {
    id: 4,
    src: xrp,
    coinName: 'XRP',
    shortForm: 'XRP',
    amount: 0,
    percentage: 0
  },
  {
    id: 5,
    src: xrp,
    coinName: 'XRP',
    shortForm: 'XRP',
    amount: 0,
    percentage: 0
  }
];
export let MyPortfolioUserTableData = [
  {
    id: 1,
    src: Bitcoin,
    coinName: 'Bitcoin',
    shortForm: 'BTC',
    amount: 0,
    percentage: 2.3
  },
  {
    id: 2,
    src: ethereum,
    coinName: 'Ethereum',
    shortForm: 'ETH',
    amount: 0,
    percentage: 1.06
  },
  {
    id: 3,
    src: tether,
    coinName: 'Tether',
    shortForm: 'USDT',
    amount: 74.28,
    percentage: 1.5
  },
  {
    id: 4,
    src: xrp,
    coinName: 'XRP',
    shortForm: 'XRP',
    amount: 90.55,
    percentage: 1.2
  },
  {
    id: 5,
    src: xrp,
    coinName: 'XRP',
    shortForm: 'XRP',
    amount: 90.55,
    percentage: 1.2
  }
];
export const TOTAL_INVESTEMENT = 'Total Investment';
export const INTIAL_PRICE = '$0.00';
export const INTIAL_PERCENTAGE = '0.00%';
export const MY_WALLETS = 'My wallets';
export const cardProps: WatchListGraphProps[] = [
  {
    cryptoIcon: Bitcoin,
    cryptoName: 'Bitcoin',
    cryptoValue: 300439.93,
    changeCryptoData: '+2.3%',
    data: data
  }
];
export const BITCOIN_MARKET_CAP = '64.2T';
export const BITCOIN_DAY_VOULME = '2.9T';
export const BITCOIN_CIRCULATING_SUPPLY = '18.8M BTC';
export const BITCOIN_CHANGE_DATA = '+8.2%';
export const ETHERIUM_MARKET_CAP = '162.92B';
export const ETHERIUM_DAY_VOULME = '11.5B';
export const ETHERIUM_CIRCULATING_SUPPLY = '122.60M ETH';
export const ETHERIUM_CHANGE_DATA = '+0.64%';
export const GREEN_ARROW = 'Green Arrow';
export const NAME_ALT = 'name';
export const OVERVIEW_TEXT = 'Overview';
export const WALLET_TEXT = 'Wallet';
export const RESET_CODE = 'Reset Code';
export const CODE_PLACEHOLDER = '8 digits code';
export const VALID_OTP = 'Please enter valid otp';
export const INVALID_OTP_LENGTH = 'Please enter 8 digits otp';

export const WalletCashData = [
  {
    id: 1,
    date: '2023-12-07',
    src: success,
    userName: 'From Teja Minnikanti',
    coinType: 'Received Bitcoin',
    label: 'Purchased',
    value: '+0.0010 BTC',
    subValue: '+$900'
  },
  {
    id: 2,
    date: '2023-12-03',
    src: success,
    coinType: 'Received Bitcoin',
    userName: 'From Teja Minnikanti',
    label: 'Sold',
    value: '+0.0230 BTC',
    subValue: '+$1,800'
  },
  {
    id: 3,
    date: '2023-11-20',
    src: success,
    coinType: 'Received Bitcoin',
    userName: 'From Teja Minnikanti',
    label: 'Purchased',
    value: '+0.0030 BTC',
    subValue: '+$1,200'
  },
  {
    id: 4,
    date: '2023-02-18',
    src: success,
    coinType: 'Received Bitcoin',
    userName: 'From Teja Minnikanti',
    label: 'Purchased',
    value: '+0.0150 BTC',
    subValue: '+$1,000'
  },
  {
    id: 5,
    date: '2023-02-15',
    src: success,
    coinType: 'Received Bitcoin',
    userName: 'From Teja Minnikanti',
    label: 'Purchased',
    value: '+0.0650 BTC',
    subValue: '+$3,200'
  },
  {
    id: 6,
    date: '2023-02-15',
    src: success,
    coinType: 'Received Bitcoin',
    userName: 'From Teja Minnikanti',
    label: 'Purchased',
    value: '+0.0900 BTC',
    subValue: '+$9,000'
  },
  {
    id: 7,
    date: '2023-02-13',
    src: success,
    coinType: 'Received Bitcoin',
    userName: 'From Teja Minnikanti',
    label: 'Purchased',
    value: '+0.0020 BTC',
    subValue: '+$1,800'
  },
  {
    id: 8,
    date: '2020-02-11',
    src: success,
    coinType: 'Received Bitcoin',
    userName: 'From Teja Minnikanti',
    label: 'Purchased',
    value: '+0.0020 BTC',
    subValue: '+$1,800'
  }
];
export const CASH_TEXT = 'Cash';
export const CASH_DEPOSIT_TEXT = 'CASH DEPOSIT';
export const CASH_WITHDRAWAL_TEXT = 'WITHDRAWAL';
export const TOTAL_BALANCE_AMOUNT = '0.0234510 BTC ($85,553.73)';
export const ETHEREUM_ALT = 'Ethereum';
export const ETHEREUM_CODE_ALT = 'ETH';
export const USER_ALREADY_EXIST = 'User already exists';
export const NAVIGATE_DASHBOARD = '/dashboard';
export const LOGIN_FILED = 'Login failed: The provided email and password do not match.';
export const USER_NOT_EXISTS = 'User does not exists';
export const mockUserData = {
  id: 2,
  name: 'Emma',
  email: 'emma@zemoso.com',
  user_balance: 500000,
  created_at: '2023-12-13',
  password: 'Password@123'
};
export const FROM_USER_NAME = 'From Teja Minnikanti';
export const SELL_CRYPTO_ALT = 'Sell Crypto';
export const BUY_CRYPTO_ALT = 'Buy Crypto';
export const mocked_wallet_data = [
  {
    id: 1,
    date: '2023-12-20T06:25:14.933Z',
    supplier: 1,
    status: 'purchased',
    quantity: 0.023451,
    value: 34000,
    coin_id: 1,
    delivery_fee: 0,
    deposited_to: 'Etherium Wallet',
    transaction_fee: 1000,
    total_amount: 35000,
    payment_method: 'Bitcoin Wallet',
    user_id: 1,
    transaction_status: 'Success',
    src: success
  },
  {
    id: 1,
    date: '2023-12-20T06:25:14.933Z',
    supplier: 1,
    status: 'purchased',
    quantity: 0.023451,
    value: 34000,
    coin_id: 1,
    delivery_fee: 0,
    deposited_to: 'Etherium Wallet',
    transaction_fee: 1000,
    total_amount: 35000,
    payment_method: 'Bitcoin Wallet',
    user_id: 1,
    transaction_status: 'Warning',
    src: warning
  },
  {
    id: 1,
    date: '2023-12-20T06:25:14.933Z',
    supplier: 1,
    status: 'purchased',
    quantity: 0.023451,
    value: 34000,
    coin_id: 1,
    delivery_fee: 0,
    deposited_to: 'Etherium Wallet',
    transaction_fee: 1000,
    total_amount: 35000,
    payment_method: 'Bitcoin Wallet',
    user_id: 1,
    transaction_status: 'Success',
    src: error
  },
  {
    id: 1,
    date: '2023-12-20T06:25:14.933Z',
    supplier: 1,
    status: 'purchased',
    quantity: 0.023451,
    value: 34000,
    coin_id: 1,
    delivery_fee: 0,
    deposited_to: 'Etherium Wallet',
    transaction_fee: 1000,
    total_amount: 35000,
    payment_method: 'Bitcoin Wallet',
    user_id: 1,
    transaction_status: 'Success',
    src: success
  }
];
export const graph_data = [
  {
    name: 'JUN 8',
    bitcoin: 4000,
    ethereum: 2400,
    amt: 2400
  },
  {
    name: 'JUN 15',
    bitcoin: 3000,
    ethereum: 1398,
    amt: 2210
  },
  {
    name: 'JUN 22',
    bitcoin: 2000,
    ethereum: 9800,
    amt: 2290
  },
  {
    name: 'JUN 29',
    bitcoin: 2780,
    ethereum: 3908,
    amt: 2000
  },
  {
    name: 'JUL 6',
    bitcoin: 1890,
    ethereum: 4800,
    amt: 2181
  },
  {
    name: 'JUL 13',
    bitcoin: 2390,
    ethereum: 3800,
    amt: 2500
  },
  {
    name: 'JUN 20',
    bitcoin: 3490,
    ethereum: 4300,
    amt: 2100
  }
];
export interface IWalletProps {
  tradeId?: number;
  userId: string;
  coinId: number;
  balance: number;
}

export const mockTradeData = [
  {
    id: 1,
    date: '2023-12-20T06:25:14.933Z',
    supplier: 1,
    status: 'purchased',
    quantity: 0.023451,
    value: 34000,
    coin_id: 1,
    delivery_fee: 0,
    deposited_to: 'Etherium Wallet',
    transaction_fee: 1000,
    total_amount: 35000,
    payment_method: 'Bitcoin Wallet',
    user_id: 1,
    transaction_status: 'Success'
  }
];
export const AUTH0_DOMAIN = process.env.REACT_APP_AUTH0_DOMAIN!;
export const AUTH0_CLIENT_ID = process.env.REACT_APP_AUTH0_CLIENT_ID!;
export const IMAGE_URL = 'https://assets.coingecko.com/coins/images/';
export const NAVIGATE_LOGIN = '/';
export const INITIAL_BALANCE = 500000;
export const RESET_PASSWORD_ERROR = 'Something went wrong while sending otp';
