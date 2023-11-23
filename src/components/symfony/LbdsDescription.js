import React from "react";

const LbdsDescription = ({ description }) => {
  return (
    <div className="lbdsd-pense-bete">
      <div className="lbdsd-pense-bete-header">
        <img
          className="lbdsd-header-add"
          src="./images/cupsd-plus.png"
          alt="bouton add"
        />
        <img
          className="lbdsd-header-close"
          src="./images/cupsd-close.png"
          alt="bouton fermer"
        />
        <span className="lbdsd-header-param">...</span>
      </div>
      <div className="lbdsd-pense-bete-content">{description}</div>
    </div>
  );
};

export default LbdsDescription;
