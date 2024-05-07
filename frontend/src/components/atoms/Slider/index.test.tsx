import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import Slider from ".";

describe('Slider component', () => {
  it('should render slider component', () => {
    const handleChange = jest.fn();
    const element = render(<Slider value={40} handleSliderChange={handleChange}/>);
    expect(element).toBeDefined();

    const slider = screen.getByRole("slider");
    fireEvent.change(slider, { target: { value: 50 } });
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(expect.anything(), 50, 0);
  })

  it("should render slider without optional props", ()=> {
    const element = render(<Slider value={40} />);
    expect(element).toBeDefined();

    const slider = screen.getByRole("slider");
    fireEvent.change(slider, { target: { value: 50 } });
    
  })
})
