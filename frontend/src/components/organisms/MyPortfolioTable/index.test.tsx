import React from 'react';
import { render } from '@testing-library/react';
import  MyPortfolioTable  from '.';
import '@testing-library/jest-dom';
import { PORTFOLIO_TOTAL_BALANCE } from '../../../utils/constants';

describe('MyPortfolioTable', () => {
  it('should render Portfolio table correctly', () => {
    const { getByText } = render(
      <MyPortfolioTable
        MyPortfolioTableData={[
          {
            id: 1,
            src: 'bitcoin',
            coinName: 'Bitcoin',
            shortForm: 'BTC',
            amount: 0,
            percentage: 0
          }
        ]}
      />
    );
    expect(getByText(PORTFOLIO_TOTAL_BALANCE)).toBeInTheDocument();
  });
});
