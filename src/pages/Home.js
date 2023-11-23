import React from "react";
import { NavLink } from "react-router-dom";
import BodyHeader from "../components/BodyHeader";
import Desktop from "../components/Desktop";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div className="root">
      <Desktop />
      <div className="container">
        {/* composant BodyHeader */}
        <BodyHeader breadcrumb="Home/" />

        {/* Création d'une div pour regrouper le composant Navigation et le contenu de Home */}
        <div className="content">
          {/* Composant Navigation */}
          <Navigation />
          {/* Contenu de la page Home */}
          <div className="main-content">
            {/* Partie dossiers Fréquents */}
            <div className="title-main-content">
              <h4>Dossiers fréquents (4)</h4>
            </div>
            <div className="folder-main-content">
              <NavLink to="/js" className="js-folder">
                <img src="./images/file-and-folder.png" alt="logo de dossier" />
                <span>Guide Javascript</span>
              </NavLink>
              <NavLink to="/js-react" className="react-folder">
                <img src="./images/file-and-folder.png" alt="logo de dossier" />
                <span>Guide React.js</span>
              </NavLink>
              <NavLink to="/php" className="php-folder">
                <img src="./images/file-and-folder.png" alt="logo de dossier" />
                <span>Guide Php</span>
              </NavLink>
              <NavLink to="/php-symfony" className="symfony-folder">
                <img src="./images/file-and-folder.png" alt="logo de dossier" />
                <span>Guide Symfony</span>
              </NavLink>
            </div>

            {/* Partie Portfolio */}
            <div className="title-portfolio-content">
              <h4>Mon Portfolio</h4>
            </div>
            <div className="folder-portfolio-content">
              <NavLink to="/" className="perso-folder">
                <img src="./images/file-and-folder.png" alt="logo de dossier" />
                <span>Mes créations originales</span>
              </NavLink>
              <NavLink to="/" className="from-scratch-folder">
                <img src="./images/file-and-folder.png" alt="logo de dossier" />
                <span>Projets From Scratch</span>
              </NavLink>
              <NavLink to="/" className="front-end-mentor-folder">
                <img src="./images/file-and-folder.png" alt="logo de dossier" />
                <span>Projets Front-end Mentor</span>
              </NavLink>
            </div>

            {/* Partie Liens utiles au développement */}
            <div className="title-links-content">
              <h4>Liens de développement utiles</h4>
            </div>
            <div className="list-links-content">
              <div className="css-links-content">
                <h5>
                  <img src="./images/css.png" alt="logo css" />
                  CSS
                </h5>
                <NavLink>CSS Generator</NavLink>
                <NavLink>Polices Google</NavLink>
                <NavLink>Liste proprietés CSS3</NavLink>
                <NavLink>Photos libres de droits</NavLink>
                <NavLink>Images libres de droits</NavLink>
                <NavLink>Palettes Flat UI Colors</NavLink>
                <NavLink>Tabler Icons</NavLink>
                <NavLink>Icons Font Awesome</NavLink>
                <NavLink>Tiny PNG</NavLink>
              </div>
              <div className="css-links-content">
                <h5>
                  <img src="./images/bootstrap.png" alt="logo bootstrap" />
                  BOOTSTRAP
                </h5>
                <NavLink>Bibliothèque BOOTSTRAP</NavLink>
              </div>
              <div className="css-links-content">
                <h5>
                  <img src="./images/javascript.png" alt="logo javascript" />
                  JS
                </h5>
                <NavLink>Regular expression CheatSheet</NavLink>
                <NavLink>Codes de réponse HTTP</NavLink>
                <NavLink>API Hub</NavLink>
                <NavLink>CDN React</NavLink>
                <NavLink>Babel Compiler</NavLink>
                <NavLink>Babel Librairies</NavLink>
              </div>
              <div className="css-links-content">
                <h5>
                  <img src="./images/wordpress.png" alt="logo wordpress" />
                  WP
                </h5>
                <NavLink>Localhost Wordpress</NavLink>
                <NavLink>Forums Wordpress</NavLink>
                <NavLink>LocalHub</NavLink>
                <NavLink>Thèmes Wordpress</NavLink>
              </div>
              <div className="css-links-content">
                <h5>
                  <img src="./images/database.png" alt="logo database" />
                  APACHE
                </h5>
                <NavLink>LocalHost/PHPMyAdmin</NavLink>
                <NavLink>Tutos SQL</NavLink>
                <NavLink>Mockaroo</NavLink>
                <NavLink>bcrypt</NavLink>
              </div>
              <div className="css-links-content">
                <h5>
                  <img src="./images/github.png" alt="logo github" />
                  HEBERGEUR
                </h5>
                <NavLink>Netlify</NavLink>
                <NavLink>Forestry</NavLink>
                <NavLink>Eleventy</NavLink>
                <NavLink>PlanetHoster</NavLink>
              </div>
              <div className="css-links-content">
                <h5>
                  <img src="./images/text.png" alt="logo text" />
                  MARKDOWN
                </h5>
                <NavLink>Markdown CheatSheet</NavLink>
              </div>
              <div className="css-links-content">
                <h5>
                  <img src="./images/stockage.png" alt="logo stockage" />
                  STOCKAGE
                </h5>
                <NavLink>Cloudinary</NavLink>
              </div>
              <div className="css-links-content">
                <h5>
                  <img src="./images/postman.png" alt="logo postman" />
                  POSTMAN
                </h5>
                <NavLink>Postman Agent</NavLink>
              </div>
              <div className="css-links-content">
                <h5>
                  <img src="./images/text.png" alt="logo text" />
                  BACKEND
                </h5>
                <NavLink>Doctrine</NavLink>
                <NavLink>Composer</NavLink>
                <NavLink>Packagist</NavLink>
                <NavLink>PSR-4 Autoloader</NavLink>
                <NavLink>Symfony documentation</NavLink>
              </div>
              <div className="css-links-content">
                <h5>
                  <img src="./images/text.png" alt="logo text" />
                  TRELLO
                </h5>
                <NavLink>Trello</NavLink>
              </div>
              <div className="css-links-content">
                <h5>
                  <img src="./images/text.png" alt="logo text" />
                  ADOBE XD
                </h5>
                <NavLink>Documentation Adobe</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
