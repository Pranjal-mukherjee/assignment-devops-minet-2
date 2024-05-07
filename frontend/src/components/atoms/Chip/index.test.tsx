import React from "react";
import { render, screen } from "@testing-library/react";
import Chip from ".";

describe("Chip Component", () => {
    it("should render a chip component", () => {
        const element = render(<Chip label={"Purchased"}/>);
        expect(element).toBeDefined();
        expect(screen.getByText("Purchased")).toBeDefined();
    })
})