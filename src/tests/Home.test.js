import TestRenderer from "react-test-renderer";
import Home from "./Home";
import { test, expect } from "@jest/globals";

test("renders inspection list", () => {
  const mockData = {
    inspections: [{ name: "Inspection 1" }, { name: "Inspection 2" }],
  };

  const tree = TestRenderer.create(<Home inspectionData={mockData} />).toJSON();
  expect(tree).toMatchSnapshot();
});
