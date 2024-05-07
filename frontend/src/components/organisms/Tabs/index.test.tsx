import { fireEvent, render, screen } from '@testing-library/react';
import Tabs from '.';
import { ALL_ASSETS_TEXT, WATCHLIST_TEXT } from '../../../utils/constants';

describe(' Tabs Organism', () => {
  it('should render the tabs', () => {
    const firstData = 'Item 1';
    const secondData = 'Item 2';
    const element = render(
      <Tabs
        firstLabel={ALL_ASSETS_TEXT}
        secondLabel={WATCHLIST_TEXT}
        firstData={firstData}
        secondData={secondData}
      />
    );
    expect(element).toBeDefined();
    expect(screen.getByText(firstData)).toBeDefined();
    fireEvent.click(screen.getByText(WATCHLIST_TEXT));

    expect(screen.getByText(secondData)).toBeDefined();
  });
});
