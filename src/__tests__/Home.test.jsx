import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "../components/Home";
import "@testing-library/jest-dom";

test("show a list of inspections ", () => {
  const mockData = {
    inspections: [
      { name: "Inspection 1" },
      { name: "Inspection 2" },
      { name: "Inspection 3" },
    ],
  };

  render(
    <MemoryRouter>
      <Home inspectionData={mockData} />
    </MemoryRouter>
  );

  expect(screen.getByText("Inspection 1")).toBeInTheDocument();
  expect(screen.getByText("Inspection 2")).toBeInTheDocument();
  expect(screen.getByText("Inspection 3")).toBeInTheDocument();
});
