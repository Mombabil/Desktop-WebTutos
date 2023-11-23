import React from "react";

const CupsDescription = ({ description }) => {
  return (
    <div className="cupsd-pense-bete">
      <div className="cupsd-pense-bete-header">
        <img
          className="cupsd-header-add"
          src="./images/cupsd-plus.png"
          alt="bouton add"
        />
        <img
          className="cupsd-header-close"
          src="./images/cupsd-close.png"
          alt="bouton fermer"
        />
        <span className="cupsd-header-param">...</span>
      </div>
      <div className="cupsd-pense-bete-content">{description}</div>
    </div>
  );
};

export default CupsDescription;
