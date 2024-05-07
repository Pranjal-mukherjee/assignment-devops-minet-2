import React from "react";
import { render, screen } from "@testing-library/react";
import  DividerComponent  from ".";
import { theme } from "../../../theme";

describe("DividerComponent", () => {
  test("should render divider component with text and color prop", () => {
    render(<DividerComponent text="Or" color={theme.palette.gray[100]}/>);
    expect(screen.getByText("Or")).toBeInTheDocument;
  });

  test("should render divider component without color prop", () => {
    render(<DividerComponent text="Or" />);
    expect(screen.getByText("Or")).toBeInTheDocument;
  });
});
