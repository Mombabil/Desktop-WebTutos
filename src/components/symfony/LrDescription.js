import React from "react";

const LrDescription = ({ description }) => {
  return (
    <div className="lrd-pense-bete">
      <div className="lrd-pense-bete-header">
        <img
          className="lrd-header-add"
          src="./images/cupsd-plus.png"
          alt="bouton add"
        />
        <img
          className="lrd-header-close"
          src="./images/cupsd-close.png"
          alt="bouton fermer"
        />
        <span className="lrd-header-param">...</span>
      </div>
      <div className="lrd-pense-bete-content">{description}</div>
    </div>
  );
};

export default LrDescription;
