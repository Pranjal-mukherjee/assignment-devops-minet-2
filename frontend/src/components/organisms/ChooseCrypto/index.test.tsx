import { screen } from '@testing-library/react';
import ChooseCrypto from '.';
import { CHOOSE_CRYPTO, cryptoDetailsData } from '../../../utils/constants';
import '@testing-library/jest-dom';
import { render } from '../../../test-setup';

describe('Choose Crypto', () => {
  test('renders all the components with activeIcon as Bitcoin', () => {
    render(<ChooseCrypto cryptoData={cryptoDetailsData} activeIcon="Bitcoin" />);
    expect(screen.getByText(CHOOSE_CRYPTO)).toBeInTheDocument;
  });
  test('renders all the components', () => {
    render(<ChooseCrypto cryptoData={cryptoDetailsData} />);
    expect(screen.getByText('Bitcoin')).toBeInTheDocument;
  });
});
