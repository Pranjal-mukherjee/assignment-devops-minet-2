import { render, screen } from '@testing-library/react';
import TradeScreenTemplate from './TradeScreen';
import TypographyComponent from '../../atoms/Typography';

describe('Trade Screen Template', () => {
  it('should render  Trade Screen Template', () => {
    const element = render(<TradeScreenTemplate />);

    expect(element).toBeDefined();
    expect(screen.getByText('Trade')).toBeDefined();
  });

  it('should render  Trade Screen Template with optional props', () => {
    const element = render(
      <TradeScreenTemplate
        watchlistBar={true}
        innerBody={<TypographyComponent variant="caption2">All Assets</TypographyComponent>}
        watchList={<TypographyComponent variant="caption2">WatchlistBar</TypographyComponent>}
      />
    );

    expect(element).toBeDefined();
    expect(screen.getByText('Trade')).toBeDefined();
  });
  it('should render  Trade Screen Template with optional props', () => {
    const element = render(
      <TradeScreenTemplate
        watchlistBar={true}
        pageName='Checkout'
        innerBody={<TypographyComponent variant="caption2">All Assets</TypographyComponent>}
        watchList={<TypographyComponent variant="caption2">WatchlistBar</TypographyComponent>}
      />
    );

    expect(element).toBeDefined();
    expect(screen.getByText('Checkout')).toBeDefined();
  });
});
