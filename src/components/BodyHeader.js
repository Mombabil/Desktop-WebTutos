import React from "react";
import { NavLink } from "react-router-dom";

const BodyHeader = ({ breadcrumb }) => {
  const displayDesktop = () => {
    const container = document.querySelector(".container");
    container.classList.add("close-container");
  };
  return (
    <header className="bodyHeader">
      <div className="explorateur">
        <div className="leftSide">
          <span className="folder1">
            <img src="./images/folder1.png" alt="dossier windows" />
          </span>
          <span className="folder3">
            <img src="./images/folder3.png" alt="dossier windows" />
          </span>
          <span className="arrow">
            <img src="./images/arrow.png" alt="dossier windows" />
          </span>
          <h4>Explorateur de fichiers</h4>
        </div>
        <div className="rightSide">
          <span className="reduire">
            <img src="./images/reduire.png" alt="bouton reduire windows" />
          </span>
          <span className="agrandir">
            <img src="./images/agrandir.png" alt="bouton agrandir windows" />
          </span>
          <span className="fermer" onClick={() => displayDesktop()}>
            <img src="./images/fermer.png" alt="bouton fermer windows" />
          </span>
        </div>
      </div>
      <nav className="path">
        <div className="fichier">Fichier</div>
        <div className="accueil">
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            Accueil
          </NavLink>
        </div>
        <div className="partage">
          <NavLink
            to="/contact"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            Partage
          </NavLink>
        </div>
        <div className="affichage">
          <NavLink
            to="/param"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            Affichage
          </NavLink>
        </div>
      </nav>
      <div className="arianne">
        <div className="arrows">
          <span className="arrowLeft">
            <img src="./images/arrow-left.png" alt="flèche gauche" />
          </span>
          <span className="arrowRight">
            <img src="./images/arrow-right.png" alt="flèche droite" />
          </span>
        </div>
        <div className="breadcrumb">
          <span>{breadcrumb}</span>
        </div>
        <div className="search">
          <span>Rechercher dans: Accès rapide</span>
        </div>
      </div>
    </header>
  );
};

export default BodyHeader;
