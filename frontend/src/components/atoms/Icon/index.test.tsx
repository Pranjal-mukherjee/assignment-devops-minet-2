import React from "react";
import { render, screen } from "@testing-library/react";
import Notification from "../../../../public/assets/images/notification.svg"
import "@testing-library/jest-dom";
import IconComponent from ".";

describe("Icon ", () => {
  test("should render with correct src and alt attributes", () => {
    render(<IconComponent src={Notification} alt="notification-icon" />);
    const imageElement = screen.getByAltText("notification-icon");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", Notification);
    expect(imageElement).toHaveAttribute("alt", "notification-icon");
  });
});
