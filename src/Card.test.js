import { fireEvent, render, screen } from "@testing-library/react";
import Card from "./components/Card";

test("renders repositories", () => {
  render(<Card />);
  const buttonElement = screen.getByText(/Flip Card/i);
  expect(buttonElement).toBeInTheDocument();
});

test("renders commits when you flip card", () => {
  render(<Card />);
  const buttonElement = screen.getByText(/Flip Card/i);
  expect(buttonElement).toBeInTheDocument();

  fireEvent.click(screen.getAllByText("Flip Card")[0]);

  const commitElement = screen.getAllByText(/Commits last 24 hours/i);
  expect(commitElement).toHaveLength(1);
});
