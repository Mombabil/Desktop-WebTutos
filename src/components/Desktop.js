import React from "react";

const Desktop = () => {
  const toggleDesktop = () => {
    const container = document.querySelector(".container");
    container.classList.remove("close-container");
  };
  return (
    <div className="desktop-container">
      <div>
        <img src="./images/moi-toon.png" alt="portail de profil" />
        <h1>Morgan Perret</h1>
        <h2>Developpeur Web Full Stack</h2>
        <h3>Spécialisation Front-end</h3>
      </div>
      <div>
        <img
          src="./images/file-and-folder.png"
          alt="logo dossier"
          onClick={() => toggleDesktop()}
        />
        <h6 onClick={() => toggleDesktop()}>Explorateur de fichiers</h6>
      </div>
      <div>
        <h2>Mes langages de programmation</h2>
        <div className="langages">
          <div className="front">
            <h3>Langages et framework Front-end</h3>
            <ul>
              <li>HTML</li>
              <li>Css</li>
              <li>Bootstrap</li>
              <li>Javascript</li>
              <li>JQuery</li>
              <li>React.js</li>
            </ul>
          </div>
          <div className="back">
            <h3>Langages et framework Back-end</h3>
            <ul>
              <li>PHP</li>
              <li>Symfony</li>
              <li>Node.js</li>
              <li>Composer</li>
              <li>React Native</li>
              <li>Doctrine</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop;
