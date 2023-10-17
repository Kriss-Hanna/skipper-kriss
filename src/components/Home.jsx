import { Link } from "react-router-dom";
import Proptypes from "prop-types";

function Home({ inspectionData }) {
  const inspections = inspectionData.inspections;

  return (
    <>
      <ul>
        {inspections.map((inspection) => (
          <li key={inspection.name}>
            <Link to={`/inspections/${inspection.name}`}>
              {inspection.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home;

Home.propTypes = {
  inspectionData: Proptypes.object.isRequired,
};
