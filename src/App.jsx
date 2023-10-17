import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import InspectionsDetails from "./components/InspectionsDetails";

import inspectionData from "../InspectionData.json";

const App = () => {
  return (
    <>
      <h1>Skipper Inspections</h1>
      <Routes>
        <Route path="/" element={<Home inspectionData={inspectionData} />} />
        <Route
          path="/inspections/:id"
          element={<InspectionsDetails inspectionData={inspectionData} />}
        />
      </Routes>
    </>
  );
};

export default App;
