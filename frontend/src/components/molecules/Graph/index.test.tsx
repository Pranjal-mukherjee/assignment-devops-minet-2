import React from "react";
import { render } from "@testing-library/react";
import Graph from ".";
import { data } from "../../../utils/constants";
import { theme } from "../../../theme";

global.ResizeObserver = jest.fn().mockImplementation(() => {
  return {
    observe: jest.fn(),
    disconnect: jest.fn(),
    unobserve: jest.fn()
  }
})

describe("Graph Molecule", () => {

    const  args={
    data: data,
    baseDataKey: "name",
    firstDataKey: "uv",
    firstColor: theme.palette.success[500],
    secondColor: theme.palette.error[500],
    height: 200
  }

  

    it("should render graph properly", () => {
        const element = render(<Graph {...args} multiple={true} secondDataKey="pv"/>);
        expect(element).toBeDefined();
    });

    it("should render graph properly with optional props", () => {
        const element = render(<Graph {...args} multiple={false}/>);
        expect(element).toBeDefined();
    });

})