import inspectionData from "../InspectionData.json";

const inspections = inspectionData.inspections;

console.log(inspections);

function App() {
  return (
    <>
      <h1>Skipper Inspections</h1>

      <ul>
        {inspections.map((inspection) => (
          <li key={inspection.name}>
            <h2>{inspection.name}</h2>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
