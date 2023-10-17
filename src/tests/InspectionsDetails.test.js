import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import InspectionsDetails from "./InspectionsDetails";
import { test, expect } from "@jest/globals";

test("renders inspection details", () => {
  const mockData = {
    inspections: [
      {
        name: "Test Inspection",
        installationType: "Type1",
        constructionYear: "2020",
        company: "Company1",
        type: "Type2",
        diameter: "30cm",
        material: "Steel",
        coating: "Coating1",
      },
    ],
  };

  const { getByText } = render(
    <MemoryRouter initialEntries={["/inspections/Test Inspection"]}>
      <InspectionsDetails inspectionData={mockData} />
    </MemoryRouter>
  );

  // Vérifie que les détails de l'inspection apparaissent bien
  expect(getByText("Test Inspection")).toBeInTheDocument();
  expect(getByText("Type1")).toBeInTheDocument();
  expect(getByText("2020")).toBeInTheDocument();
  // ... Continue pour les autres champs
});
