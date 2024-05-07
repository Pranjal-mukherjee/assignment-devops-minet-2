import { render, screen } from '@testing-library/react';
import SignupTemplate from '.';
import '@testing-library/jest-dom/extend-expect';

describe('SignupTemplate component', () => {
  const mockImage = 'mock-image-url';
  const mockBody = <div data-testid="mock-body">Mock Body</div>;

  it('renders without crashing', () => {
    render(<SignupTemplate img={mockImage} body={mockBody} />);
    const imageElement = screen.getByAltText('Image not found');

    expect(imageElement).toBeInTheDocument();
    expect(screen.getByTestId('mock-body')).toBeInTheDocument();
  });

  it('displays body content correctly', () => {
    render(<SignupTemplate img={mockImage} body={mockBody} />);
    const bodyElement = screen.getByTestId('mock-body');
    expect(bodyElement).toBeInTheDocument();
    expect(bodyElement).toHaveTextContent('Mock Body');
  });
});
