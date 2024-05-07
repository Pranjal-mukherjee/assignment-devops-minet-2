import { render, screen } from '@testing-library/react';
import ResetPasswordSuccess from '.';
import TickCircle from '../../../../public/assets/icons/TickCircle.svg';
import React from 'react';

describe('ResetPasswordSuccess component', () => {
  const testProps = {
    img: TickCircle,
    alt: "reset-success",
    mainTitle: 'Main Title',
    subTitle: 'Sub Title',
  };

  it('renders with correct props', () => {
    render(
      <ResetPasswordSuccess
        img={testProps.img}
        alt={testProps.alt}
        mainTitle={testProps.mainTitle}
        subTitle={testProps.subTitle}
      />
    );

    const mainTitleElement = screen.getByText(testProps.mainTitle);
    const subTitleElement = screen.getByText(testProps.subTitle);
    const imgElement = screen.getByAltText('reset-success'); 

    expect(mainTitleElement).toBeTruthy();
    expect(subTitleElement).toBeTruthy();
    expect(imgElement?.getAttribute('alt')).toBe('reset-success');
  });
});

