import React from "react";
import { NavLink } from "react-router-dom";
import BodyHeader from "../components/BodyHeader";
import Desktop from "../components/Desktop";
import Navigation from "../components/Navigation";

const Php = () => {
  return (
    <div className="root">
      <Desktop />
      <div className="container">
        <BodyHeader breadcrumb="Home/Guides/Php" />

        {/* Création d'une div pour regrouper le composant Navigation et le contenu de Home */}
        <div className="content">
          {/* Composant Navigation */}
          <Navigation />
          {/* Contenu de la page Home */}
          <div className="symfony-content">
            <NavLink
              to="/php-les-variables-et-les-constantes"
              className="symfony-folder"
            >
              <img src="./images/file-and-folder.png" alt="logo de dossier" />
              <span>Les variables et les constantes</span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Php;
