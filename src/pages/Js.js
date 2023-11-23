import React from "react";
import BodyHeader from "../components/BodyHeader";
import Desktop from "../components/Desktop";
import Navigation from "../components/Navigation";

const Js = () => {
  return (
    <div className="root">
      <Desktop />
      <div className="container">
        <BodyHeader breadcrumb="Home/Guides/Javascript" />

        {/* Création d'une div pour regrouper le composant Navigation et le contenu de Home */}
        <div className="content">
          {/* Composant Navigation */}
          <Navigation />
        </div>
      </div>
    </div>
  );
};

export default Js;
