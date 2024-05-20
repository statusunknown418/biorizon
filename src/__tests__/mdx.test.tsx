import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Table } from "~/components/mdx";

describe("mdx", () => {
  it("renders a table", () => {
    render(
      <div>
        <Table
          data={{
            headers: ["Name", "Age"],
            rows: [
              ["Alice", "20"],
              ["Bob", "21"],
            ],
          }}
        />
      </div>,
    );

    const table = screen.getByRole("table");

    expect(table).toBeInTheDocument();
  });
});
