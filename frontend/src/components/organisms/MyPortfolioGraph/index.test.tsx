import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import MyportfolioGraph from '.';
import "@testing-library/jest-dom/extend-expect";
import { DashboardData } from '../../../utils/constants';

global.ResizeObserver = jest.fn().mockImplementation(() => {
  return {
    observe: jest.fn(),
    disconnect: jest.fn(),
    unobserve: jest.fn()
  }
})

describe('MyportfolioGraph', () => {
  it('should render with default props', () => {
    render(
      <MyportfolioGraph 
         title="Total Investment" 
         value="$11,900,204" 
         changePercentage1="+1.2%" 
         data={DashboardData} 
         newUser={false} />
    );

    expect(screen.getByText('Total Investment')).toBeInTheDocument();
    expect(screen.getByText('$11,900,204')).toBeInTheDocument();
    expect(screen.getByText('+1.2%')).toBeInTheDocument();
  });

  it('should render with graph and additional props', () => {
    render(
      <MyportfolioGraph
        title="Total Investment"
        value="$11,900,204" 
        changePercentage1={'-1.2%'} 
        data={DashboardData} 
        newUser={true}      />
    );
    expect(screen.getByText('Total Investment')).toBeInTheDocument();
    expect(screen.getByText('$11,900,204')).toBeInTheDocument();
    expect(screen.getByText('-1.2%')).toBeInTheDocument();
    expect(screen.getByTestId('Bitcoin')).toBeInTheDocument();
    expect(screen.getByText('$ 12,400')).toBeInTheDocument();
    expect(screen.getByText('+8.2%')).toBeInTheDocument();
  });

  it('Handles CryptoSelector clicks correctly', () => {
    render(
      <MyportfolioGraph
        title="Total Investment"
        value="$11,900,204"
        changePercentage1={'-1.2%'}
        data={DashboardData}
        newUser={true}
      />
    );
  
    const bitcoinButton = screen.getByTestId('Bitcoin');
    const ethereumButton = screen.getByTestId('Ethereum');
  
    fireEvent.click(bitcoinButton);
    fireEvent.click(ethereumButton);
  });
  
});
