import { render, screen } from '@testing-library/react';
import Image from '.';
import '@testing-library/jest-dom';
import MyPortfolio from '../../../../public/images/myPortfolio.svg';

describe('Image', () => {
  test('renders the image component as expected', () => {
    render(<Image src={MyPortfolio} alt={'my-portfolio'} />);
    const imageElement = screen.getByAltText('my-portfolio');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', MyPortfolio);
    expect(imageElement).toHaveAttribute('alt', 'my-portfolio');
  });
});
