import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import  InputFieldWithLabel  from '.';
import { EMAIL_LABEL, EMAIL_PLACEHOLDER } from '../../../utils/constants';

describe('InputFieldWithLabel', () => {
  it('should render the label and input field correctly', () => {
    render(<InputFieldWithLabel text={EMAIL_LABEL} placeholder={EMAIL_PLACEHOLDER} />);

    expect(screen.getByText(EMAIL_LABEL)).toBeInTheDocument();

    const inputField = screen.getByPlaceholderText(EMAIL_PLACEHOLDER);
    expect(inputField).toBeInTheDocument();
  });
});
