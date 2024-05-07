import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import  IconTypography  from '.';
import google from '../../../../public/assets/images/google.svg';
import facebook from '../../../../public/assets/images/stripe.svg';

describe('IconTypography ', () => {
  it('should render icon and typography correctly', () => {
    render(
      <IconTypography
        src={google}
        alt="google-icon"
        text="Google"
        variant="body1"
        isCardStyled={true}
      />
    );

    const iconText = screen.getByAltText('google-icon');
    expect(iconText).toBeInTheDocument();
    expect(iconText).toHaveAttribute('src', google);
    expect(screen.getByText('Google')).toBeInTheDocument();
  });
  it('should render image and typography correctly without background', () => {
    render(
      <IconTypography
        src={facebook}
        alt="facebook-icon"
        text="Facebook"
        variant="caption2"
        isCardStyled={false}
      />
    );

    const iconText = screen.getByAltText('facebook-icon');
    expect(iconText).toBeInTheDocument();
    expect(iconText).toHaveAttribute('src', facebook);
    expect(screen.getByText('Facebook')).toBeInTheDocument();
  });
});
