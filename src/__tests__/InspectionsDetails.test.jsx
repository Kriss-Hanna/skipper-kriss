import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import InspectionsDetails from "../components/InspectionsDetails";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

const mockData = {
  inspections: [
    {
      name: "TestName",
      installationType: "TestType",
      constructionYear: "2000",
      company: "TestCompany",
      type: "TestType",
      diameter: "100mm",
      material: "TestMaterial",
      coating: "TestCoating",
    },
  ],
};

describe("InspectionsDetails component", () => {
  test("displays the details correctly", () => {
    render(
      <MemoryRouter initialEntries={["/inspections/TestName"]}>
        <Routes>
          <Route
            path="/inspections/:id"
            element={<InspectionsDetails inspectionData={mockData} />}
          />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText("TestName")).toBeInTheDocument();
    expect(
      screen.getByText("Type of installation: TestType")
    ).toBeInTheDocument();
  });

  test('has a working "Back to home" button', async () => {
    render(
      <MemoryRouter initialEntries={["/inspections/TestName"]}>
        <Routes>
          <Route
            path="/inspections/:id"
            element={<InspectionsDetails inspectionData={mockData} />}
          />
          <Route path="/" element={<div>Home Page</div>} />
        </Routes>
      </MemoryRouter>
    );

    userEvent.click(screen.getByText("Back to home"));

    await waitFor(() => {
      expect(screen.getByText("Home Page")).toBeInTheDocument();
    });
  });
});
