import { fireEvent, render, screen } from '@testing-library/react';
import WatchListBar from '.';
import { theme } from '../../../theme';
import { ADDED_TO_WATCHLIST, BITCOIN_ALT, BITCOIN_CODE_ALT } from '../../../utils/constants';
import BitCoin from '../../../../public/assets/images/bitcoinLarge.svg';
import GreenArrow from '../../../../public/assets/images/greenArrow.svg';

describe('Watchlist Bar component', () => {
  const args = {
    firstText: BITCOIN_ALT,
    secondText: BITCOIN_CODE_ALT,
    coinIcon: BitCoin,
    coinIconAlt: BITCOIN_ALT,
    changeData: '+8.2%',
    changeIcon: GreenArrow,
    thirdTextColor: theme.palette.success[500],
    circulatingSupply: '18.8M BTC',
    dayVolumeChange: '2.9T',
    marketCap: '64.2T'
  };
  it('should render Watchlist Bar component', () => {
    const element = render(<WatchListBar {...args} />);
    expect(element).toBeDefined();
    expect(screen.getByText(BITCOIN_ALT)).toBeDefined();
    const watchListbutton = screen.getByText(ADDED_TO_WATCHLIST);
    expect(watchListbutton).toBeDefined();
    fireEvent.click(watchListbutton);
    expect(screen.getByText('18.8M BTC')).toBeDefined();
  });
});
