import { render, fireEvent, screen } from '@testing-library/react'
import TimeLineTabs from './index'
import { timeLineValues } from '../../../utils/constants';

describe('TimeLineTabs component', () => {
  it('renders tabs with correct labels', () => {
    const onSelectTab = jest.fn();
    render(<TimeLineTabs timeLineValues={timeLineValues} typevariant='Dashboard' onSelectTab={onSelectTab} value={0} />);

    const tabs = screen.getAllByTestId(/^tab-/);
    expect(tabs.length).toBe(6); 
    expect(tabs[0].textContent).toBe('1H');
    expect(tabs[1].textContent).toBe('24H');
    expect(tabs[2].textContent).toBe('1W');
    expect(tabs[3].textContent).toBe('1M');
    expect(tabs[4].textContent).toBe('1Y');
    expect(tabs[5].textContent).toBe('ALL');
  });

  it('selects tab and triggers callback', () => {
    const onSelectTab = jest.fn();
    render(<TimeLineTabs timeLineValues={timeLineValues} typevariant="Detail" onSelectTab={onSelectTab} value={0} />);

    const tab1M = screen.getByTestId('tab-1M');
    fireEvent.click(tab1M);

    expect(onSelectTab).toHaveBeenCalledTimes(1);
  });
});
