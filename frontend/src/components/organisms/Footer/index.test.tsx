import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Footer } from '.';

describe('Footer ', () => {
  it('should render footer component correctly', () => {
    render(<Footer />);

    const dashboardText = screen.getByText('Dashboard');
    expect(dashboardText).toBeInTheDocument();

    const careerText = screen.getByText('Careers');
    expect(careerText).toBeInTheDocument();

    const minetText = screen.getByText('© 2021 Minet');
    expect(minetText).toBeInTheDocument();

    const helpButton = screen.getByRole('button');
    expect(helpButton).toBeInTheDocument();
  });
});
