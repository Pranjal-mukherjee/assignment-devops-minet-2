import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import  DropDown  from '.';

describe('DropDown', () => {
  it('should render dropdown and handle onChange event', async () => {
    const mockOnChange = jest.fn();
    const menuList = ['1H', '1W', '1M', '1Y'];
    const defaultValue = '1W';

    render(<DropDown onChange={mockOnChange} menuList={menuList} width="77px" variant="button" value={defaultValue}/>);

    const dropDown = screen.getByTestId('dropDown');
    expect(dropDown).toBeInTheDocument();

    if (dropDown.firstChild) {
      fireEvent.keyDown(dropDown.firstChild, { key: 'ArrowDown' });
      const option1M = await screen.findByText('1M');
      fireEvent.click(option1M);

      expect(mockOnChange).toHaveBeenCalledTimes(1);
      expect(mockOnChange).toHaveBeenCalledWith('1M');
    }
  });
});
