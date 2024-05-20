import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { SessionProvider } from "next-auth/react";
import { Header } from "~/components/pages/Header";

describe("HomePage", () => {
  it("renders a heading", () => {
    render(
      <div>
        <SessionProvider>
          <Header />
        </SessionProvider>
      </div>,
    );

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
  });

  it("renders a button", () => {
    render(
      <div>
        <SessionProvider>
          <Header />
        </SessionProvider>
      </div>,
    );

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  it("shows login", () => {
    render(
      <div>
        <SessionProvider>
          <Header />
        </SessionProvider>
      </div>,
    );

    const button = screen.getByText("Iniciar sesion");

    expect(button).toBeInTheDocument();
  });
});
