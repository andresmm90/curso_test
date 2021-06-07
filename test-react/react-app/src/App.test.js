import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Dado que tengo una funciones para realizar diferentes operaciones", () => {
  test("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  it("deseo garantizar que se ejecute correctamente la función", () => {
    render(<App />);
    const linkElement = screen.getByText("Guardar");
  });
});
