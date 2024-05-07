import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import  CryptoDetails  from '.';

describe('CryptoDetails ', () => {
  it('should render crypto details correctly', () => {
    render(<CryptoDetails />);

    const aboutText = screen.getByText('About Bitcoin');
    expect(aboutText).toBeInTheDocument();
    const resourceText = screen.getByText('Resources');
    expect(resourceText).toBeInTheDocument();
    
  });
});
