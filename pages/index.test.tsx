import { render, screen, fireEvent } from "@testing-library/react";
import Index from "./index";
import { useRouter } from "next/router";
import "@testing-library/jest-dom";

// Mock the Next.js router
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("Index Component", () => {
  it("renders the input field and updates its value", () => {
    render(<Index />);
    const input = screen.getByRole("textbox");

    // Verify the input field is rendered
    expect(input).toBeInTheDocument();

    // Simulate typing into the input field
    fireEvent.change(input, { target: { value: "testuser" } });
    expect(input).toHaveValue("testuser");
  });

  it("calls router.push on form submission with valid input", () => {
    const pushMock = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push: pushMock });

    render(<Index />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    // Simulate typing into the input field
    fireEvent.change(input, { target: { value: "testuser" } });

    // Simulate form submission
    fireEvent.submit(form);

    // Verify router.push was called with the correct URL
    expect(pushMock).toHaveBeenCalledWith("/u/testuser");
  });

  it("does not call router.push on form submission with empty input", () => {
    const pushMock = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push: pushMock });

    render(<Index />);
    const form = screen.getByRole("form");

    // Simulate form submission without typing
    fireEvent.submit(form);

    // Verify router.push was not called
    expect(pushMock).not.toHaveBeenCalled();
  });
});