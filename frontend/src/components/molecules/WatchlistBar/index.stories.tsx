import type { Meta, StoryObj } from '@storybook/react';
import WatchListBar from '.';
import { BITCOIN_ALT, BITCOIN_CODE_ALT } from '../../../utils/constants';
import BitCoin from '../../../../public/assets/images/bitcoinLarge.svg';
import GreenArrow from '../../../../public/assets/images/greenArrow.svg';
import { theme } from '../../../theme';

const meta = {
  title: 'Molecules/WatchListBar',
  component: WatchListBar,
} satisfies Meta<typeof WatchListBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
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
  }
};
