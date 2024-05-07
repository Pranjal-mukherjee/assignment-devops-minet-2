import React from 'react';
import { render } from '@testing-library/react';
import DashboardTemplate from '.';
import '@testing-library/jest-dom/extend-expect';

describe('DashboardTemplate Component', () => {
  const mockProps = {
    pageName: 'Example Page',
    displayButtons: true,
    disableBuy: false,
    disableSell: false,
    onBuy: jest.fn(),
    onSell: jest.fn(),
    middleComponent: <div>Body 1 Content</div>,
    rightComponent: <div>Body 2 Content</div>,
    leftComponent: <div>Left Component Content</div>,
  };

  it('Renders DashboardTemplate component with two body contents', () => {
    const { getByText } = render(<DashboardTemplate {...mockProps} />);
    expect(getByText('Body 1 Content')).toBeInTheDocument();
    expect(getByText('Body 2 Content')).toBeInTheDocument();
    expect(getByText('Left Component Content')).toBeInTheDocument();
    expect(getByText('Example Page')).toBeInTheDocument();
  });

  it('Renders DashboardTemplate component with a single body content', () => {
    const { getByText, queryByText } = render(
      <DashboardTemplate {...mockProps} rightComponent={undefined} />,
    );
    expect(getByText('Body 1 Content')).toBeInTheDocument();
    expect(queryByText('Body 2 Content')).toBeNull();
    expect(getByText('Left Component Content')).toBeInTheDocument();
    expect(getByText('Example Page')).toBeInTheDocument();
  });

});
