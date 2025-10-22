import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterAll } from "vitest";
import Greeting from "../components/Greeting";

vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string, opts?: any) => {
      if (key === "Hello, {{name}}!") return `Hello, ${opts?.name || "guest"}!`;
      if (key === "guest") return "guest";
      if (key === "Enter your name") return "Enter your name";
      return key;
    },
  }),
}));

describe("Greeting component", () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  afterAll(() => {
    localStorage.clear();
    vi.restoreAllMocks();
  });

  it("should render with 'guest' when no name is stored", () => {
    render(<Greeting />);
    expect(screen.getByText(/Hello, guest!/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter your name")).toBeInTheDocument();
  });

  it("should display the stored name from localStorage on load", () => {
    localStorage.setItem("name", "Timur");
    render(<Greeting />);
    expect(screen.getByDisplayValue("Timur")).toBeInTheDocument();
    expect(screen.getByText("Hello, Timur!")).toBeInTheDocument();
  });

  it("should update the greeting when user types a new name", () => {
    render(<Greeting />);
    const input = screen.getByPlaceholderText("Enter your name");

    fireEvent.change(input, { target: { value: "Alice" } });

    expect(screen.getByDisplayValue("Alice")).toBeInTheDocument();

    expect(screen.getByText("Hello, Alice!")).toBeInTheDocument();
  });

  it("should save the name to localStorage when it changes", () => {
    render(<Greeting />);
    const input = screen.getByPlaceholderText("Enter your name");

    fireEvent.change(input, { target: { value: "Bob" } });

    expect(localStorage.setItem).toHaveBeenCalledWith("name", "Bob");
  });
});
