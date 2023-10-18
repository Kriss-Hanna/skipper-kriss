import React from "react";
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
      <div className="button-container">
        <Link to="/">
          <button>Back to home</button>
        </Link>
      </div>

      <div className="details-infos">
        <h2>{name}</h2>
        <p>Type of installation: {installationType}</p>
        <p>Year of construction: {constructionYear}</p>
        <p>Company: {company}</p>
        <p>Type: {type}</p>
        <p>Diameter: {diameter}</p>
        <p>Material: {material}</p>
        <p>Coating: {coating}</p>
      </div>
    </>
  );
};

export default InspectionsDetails;

InspectionsDetails.propTypes = {
  inspectionData: Proptypes.object.isRequired,
};
