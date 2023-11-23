import React from "react";
import BodyHeader from "../components/BodyHeader";
import Desktop from "../components/Desktop";
import Navigation from "../components/Navigation";

const Param = () => {
  return (
    <div className="root">
      <Desktop />
      <div className="container">
        <BodyHeader breadcrumb="Home/Param" />
        <Navigation />
      </div>
    </div>
  );
};

export default Param;
