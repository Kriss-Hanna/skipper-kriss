import { Link, useParams } from "react-router-dom";
import Proptypes from "prop-types";

const InspectionsDetails = ({ inspectionData }) => {
  const params = useParams();

  const inspection = inspectionData.inspections.find(
    (inspection) => inspection.name === params.id
  );

  const {
    name,
    installationType,
    constructionYear,
    company,
    type,
    diameter,
    material,
    coating,
  } = inspection;

  return (
    <>
      <button>
        <Link to="/">Back to home</Link>
      </button>
      <h2>{name}</h2>
      <p>{installationType}</p>
      <p>{constructionYear}</p>
      <p>{company}</p>
      <p>{type}</p>
      <p>{diameter}</p>
      <p>{material}</p>
      <p>{coating}</p>
    </>
  );
};

export default InspectionsDetails;

InspectionsDetails.propTypes = {
  inspectionData: Proptypes.object.isRequired,
};
