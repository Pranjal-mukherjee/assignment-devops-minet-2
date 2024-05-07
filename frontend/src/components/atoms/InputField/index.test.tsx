import { render, screen, fireEvent } from '@testing-library/react';
import InputFieldComponent from '.';

describe('InputFieldComponent', () => {
  test('should render input field with placeHolder and handles value change', () => {
    const handleChange = jest.fn((event) => {
      return {
        target: {
          value: event.target.value
        }
      };
    });
    render(<InputFieldComponent handleChange={handleChange} placeholder={'Test Input'} />);
    const inputElement = screen.getByPlaceholderText('Test Input');
    fireEvent.change(inputElement, { target: { value: 'test' } });
    expect(handleChange).toHaveBeenCalled();
  });
});
