import React from "react";
import { NavLink } from "react-router-dom";
import BodyHeader from "../components/BodyHeader";
import Desktop from "../components/Desktop";
import Navigation from "../components/Navigation";

const Symfony = () => {
  return (
    <div className="root">
      <Desktop />
      <div className="container">
        <BodyHeader breadcrumb="Home/Guides/Symfony" />

        {/* Création d'une div pour regrouper le composant Navigation et le contenu de Home */}
        <div className="content">
          {/* Composant Navigation */}
          <Navigation />
          {/* Contenu de la page Home */}
          <div className="symfony-content">
            <NavLink
              to="/php-symfony-creer-un-projet-symfony"
              className="symfony-folder"
            >
              <img src="./images/file-and-folder.png" alt="logo de dossier" />
              <span>Créer un projet Symfony</span>
            </NavLink>
            <NavLink
              to="/php-symfony-les-bases-de-symfony"
              className="symfony-folder"
            >
              <img src="./images/file-and-folder.png" alt="logo de dossier" />
              <span>Les Bases de symfony</span>
            </NavLink>
            <NavLink to="/php-symfony-le-routing" className="symfony-folder">
              <img src="./images/file-and-folder.png" alt="logo de dossier" />
              <span>Le routing</span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Symfony;
