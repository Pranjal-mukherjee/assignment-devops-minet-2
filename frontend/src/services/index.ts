import api from './api';
import { getUserID } from '../utils/functions';
import { INITIAL_BALANCE, IWalletProps } from '../utils/constants';

export const getCoinDetail = async (coinName: string) => {
  const res = await api.get(`/api/v1/cryptos/name/${coinName}`);
  return res.data;
};

// adding new user to the database if he/she is not already a user
export const addUser = async (name: string, email: string, password: string) => {
  try {
    const userData = {
      name: name,
      email: email,
      password: password,
      userBalance: INITIAL_BALANCE
    };

    const user = await api.post(`/users`, userData);

    if (user.data) {
      const newUser = {
        email: user.data.email,
        name: user.data.name,
        id: user.data.id
      };
      localStorage.setItem('user', JSON.stringify(newUser));
      return user;
    } else {
      console.log('error ');
      throw new Error('error creating user');
    }
  } catch (error) {
    console.error('Error fetching users:', error);
    return null;
  }
};

// adding auth0 user to the database
export const addAuthUser = async (name: string, email: string, password: string) => {
  if (await checkUsers(email, password)) {
    return true;
  } else {
    addUser(name, email, password);
  }
  const response = await api.post(`/users/login`, { email: email, password: password });
  localStorage.setItem('user', JSON.stringify(response.data));
};

// checking if the user is authenticated
export const checkUsers = async (email: string, password: string) => {
  try {
    const response = await api.post(`/users/login`, { email: email, password: password });
    const user = response.data;

    if (user) {
      const newUser = {
        email: user.email,
        name: user.name,
        id: user.userId,
        token: user.token,
        userBalance: user.userBalance
      };
      localStorage.setItem('user', JSON.stringify(newUser));
      return true;
    } else {
      throw new Error('Error fetching users while login:');
    }
  } catch (error) {
    console.error('Error fetching users while login:', error);
    //throw error;
    return null;
  }
};

export const GetAllCryptoCoins = async () => {
  try {
    const response = await api.get(`/api/v1/cryptos`);
    return response.data;
  } catch (error) {
    console.error('Error fetching all crypto coins', error);
    throw error;
  }
};

export const GetWatchLists = async () => {
  try {
    const userId = await getUserID();
    const WatchlistData = await api.get(`/api/v1/cryptos/watchlist/${userId}`);
    return WatchlistData.data;
  } catch (error) {
    console.error('Error fetching watchlist by user_id:', error);
    return [];
  }
};

export const DeleteWatchlistById = async (id: number) => {
  try {
    return await api.delete(`/api/v1/cryptos/watchlist/${id}`);
  } catch (error) {
    console.error('Error while deleting watchlist data by watchlist_id:', error);
    throw error;
  }
};

export const PostWatchlist = async (coinId: number) => {
  try {
    const userId = await getUserID();
    const watchlistData = {
      userId: userId,
      coinId: coinId
    };
    return await api.post('/api/v1/cryptos/watchlist', watchlistData);
  } catch (error) {
    console.error('Error while posting watchlist data:', error);
    throw error;
  }
};

export const getCryptoCoins = async (cryptoId: number) => {
  try {
    const response = await api.get(`/api/v1/cryptos/${cryptoId}`);
    return response.data;
  } catch (error) {
    console.error('Error while fetching crypto details:', error);
    return [];
  }
};

export const postTrades = async (data: any) => {
  const response = await api.post(`/trades`, data);
  return response.data;
};

export const getUsersByEmail = async (email: string) => {
  try {
    const res = await api.get(`/users/${email}`);
    return res.data;
  } catch (error) {
    console.error('Error while fetching users by email:', error);
    return null;
  }
};

export const updateUserByEmail = async (email: string, data: object) => {
  if (email === undefined || data == undefined) {
    return null;
  }

  const res = await api.put(`/users/${email}`, data);
  console.log('res : ', res);

  return res.data;
};

export const getAllTrades = async () => {
  const response = await api.get(`/trades`);
  console.log('response : ', response);

  return response.data;
};

export const getWalletsByUserIdAndCryptoId = async (userId: number, coinId: number) => {
  try {
    const response = await api.get(`/wallets/${userId}/${coinId}`);

    return response.data;
  } catch (error) {
    console.error('Error fetching wallet by userId and coinId:', error);
    return [];
  }
};

export const getCryptoDetailByName = async (name: string) => {
  const response = await api.get(`/api/v1/cryptos/name/${name}`);
  return response.data;
};

export const updateWallets = async (data: IWalletProps) => {
  try {
    const response = await api.patch(`/wallets`, data);

    return response.data;
  } catch (error) {
    const response = await api.post(`/wallets`, data);
    return response.data;
  }
};

export const postWallet = async (data: any) => {
  const response = await api.post(`/wallets`, data);
  return response.data;
};

export const updateWalletById = async (id: number, data: any) => {
  if (id === undefined || data == undefined) {
    return null;
  }
  const walletDetail = await api.get(`/wallets?id=${id}`);
  const res = await api.patch(`/wallets/${walletDetail.data[0].id}`, data);
  return res.data;
};

export const getTradesByUserId = async (userId: number) => {
  try {
    const response = await api.get(`/trades/${userId}`);
    return response.data;
  } catch (error) {
    console.log('error fetching trades ', error);
    return [];
  }
};

export const resetPassword = async (email: string) => {
  try {
    const response = await api.get(`/users/reset/${email}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error resetting password', error);
    return [];
  }
};

export const validateOtp = async (otp: string, email: string) => {
  try {
    const response = await api.get(`/users/otp/${email}/${otp}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error validating otp', error);
    return null;
  }
};
