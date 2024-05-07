import { fireEvent, screen } from '@testing-library/react';
import DashBoardWatchList from '.';
import Bitcoin from '../../../../public/assets/images/bitcoin.svg';
import Ethereum from '../../../../public/assets/images/ethereumCoin.svg';
import { data } from '../../../utils/constants';
import { WatchListGraphProps } from '../../molecules/WatchListGraph';
import '@testing-library/jest-dom';
import { render } from '../../../test-setup';

global.ResizeObserver = jest.fn().mockImplementation(() => {
  return {
    observe: jest.fn(),
    disconnect: jest.fn(),
    unobserve: jest.fn()
  };
});

describe('DashBoardWatchList', () => {
  const cardProps: WatchListGraphProps[] = [
    {
      cryptoIcon: Bitcoin,
      cryptoName: 'Bitcoin',
      cryptoValue: 300439.93,
      changeCryptoData: '+2.3%',
      data: data
    },
    {
      cryptoIcon: Ethereum,
      cryptoName: 'Ethereum',
      cryptoValue: 1297.24,
      changeCryptoData: '+2.3%',
      data: data
    }
  ];
  const defaultProps: WatchListGraphProps[] = [
    {
      cryptoIcon: Bitcoin,
      cryptoName: 'Bitcoin',
      cryptoValue: 300439.93,
      changeCryptoData: '+2.3%',
      data: data
    },
    {
      cryptoIcon: Ethereum,
      cryptoName: 'Ethereum',
      cryptoValue: 1297.24,
      changeCryptoData: '+2.3%',
      data: data
    },
    {
      cryptoIcon: Ethereum,
      cryptoName: 'Ethereum',
      cryptoValue: 1297.24,
      changeCryptoData: '-2.3%',
      data: data
    }
  ];

  test('renders DashBoardWatchList component with cardProps', () => {
    render(<DashBoardWatchList cardProps={cardProps} />);
    expect(screen.getByText('Watchlist')).toBeInTheDocument();
  });
  test('renders DashBoardWatchList component with cardProps', () => {
    render(<DashBoardWatchList cardProps={defaultProps} />);
    expect(screen.getByText('Watchlist')).toBeInTheDocument();
  });

  test('checking the handleClick events', () => {
    render(<DashBoardWatchList cardProps={defaultProps} />);
    fireEvent.click(screen.getAllByTestId('container1')[0]);
  });
  test('checking the handleClick events of view watchlist', () => {
    render(<DashBoardWatchList cardProps={defaultProps} />);
    fireEvent.click(screen.getAllByTestId('container1')[1]);
  });
  test('checking the handleClick events of graph grid container', () => {
    render(<DashBoardWatchList cardProps={defaultProps} />);
    fireEvent.click(screen.getAllByTestId('watchListCard')[0]);
  });
});
