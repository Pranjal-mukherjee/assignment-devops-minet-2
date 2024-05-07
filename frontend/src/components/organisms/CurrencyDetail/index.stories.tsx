import type { Meta, StoryObj } from '@storybook/react';
import CurrencyDetail from '.';
import { CURRENT_BTC_PRICE, data } from '../../../utils/constants';
import { theme } from '../../../theme';
import ProfitIcon from '../../../../public/assets/images/greenArrow.svg';

const meta = {
  title: 'Organisms/CurrencyDetail',
  component: CurrencyDetail
} satisfies Meta<typeof CurrencyDetail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    data: data,
    baseDataKey: 'name',
    firstDataKey: '',
    secondDataKey: 'pv',
    firstColor: theme.palette.gray.white,
    secondColor: theme.palette.warning[300],
    currentPrice: CURRENT_BTC_PRICE,
    changeData: '+8.2%',
    changeIcon: ProfitIcon,
    changeIconAlt: 'Profit',
    changeDataColor: theme.palette.success[500]
  }
};
