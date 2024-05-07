import { screen } from '@testing-library/react';
import CurrencyDetail from '.';
import { theme } from '../../../theme';
import { CURRENT_BTC_PRICE, MOVES_TIGHTLY, data } from '../../../utils/constants';
import ProfitIcon from '../../../../public/assets/images/greenArrow.svg';
import { render } from '../../../test-setup';

global.ResizeObserver = jest.fn().mockImplementation(() => {
  return {
    observe: jest.fn(),
    disconnect: jest.fn(),
    unobserve: jest.fn()
  };
});

describe('Currency Detail component', () => {
  it('should render Currency Detail component', () => {
    const args = {
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
    };
    const element = render(<CurrencyDetail {...args} />);
    expect(element).toBeDefined();

    expect(screen.getByAltText('Profit')).toBeDefined();
    expect(screen.getByText(CURRENT_BTC_PRICE)).toBeDefined();
    expect(screen.getAllByText(MOVES_TIGHTLY)).toBeDefined();
  });
});
