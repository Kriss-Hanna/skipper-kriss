import React from "react";
import { Link } from "react-router-dom";
import Proptypes from "prop-types";

function Home({ inspectionData }) {
  const inspections = inspectionData.inspections;

  return (
    <>
      <ul>
        {inspections.map((inspection) => (
          <Link to={`/inspections/${inspection.name}`} key={inspection.name}>
            <li>{inspection.name}</li>
          </Link>
        ))}
      </ul>
    </>
  );
}

export default Home;

Home.propTypes = {
  inspectionData: Proptypes.object.isRequired,
};
