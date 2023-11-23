import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="home">
        <NavLink to="/" classname={(nav) => (nav.isActive ? "nav-active" : "")}>
          <span>
            <img src="./images/coding.png" alt="logo accueil" />
          </span>
          <span className="nav-describ">Accueil</span>
        </NavLink>
        <NavLink
          to="/contact"
          classname={(nav) => (nav.isActive ? "active" : "")}
        >
          <span>
            <img src="./images/contact-us.png" alt="logo contact" />
          </span>
          <span className="nav-describ">Partage</span>
        </NavLink>
        <NavLink
          to="/param"
          className={(nav) => (nav.isActive ? "active" : "")}
        >
          <span>
            <img src="./images/slider.png" alt="logo parametres" />
          </span>
          <span className="nav-describ">Affichage</span>
        </NavLink>
      </div>
      <div className="langage">
        <NavLink to="/js" classname={(nav) => (nav.isActive ? "active" : "")}>
          <span>
            <img src="./images/js.png" alt="logo javascript" />
          </span>
          <span className="nav-describ">Javascript</span>
        </NavLink>
        <NavLink
          to="/js-react"
          className={(nav) => (nav.isActive ? "active" : "")}
        >
          <span>
            <img src="./images/science.png" alt="logo react.js" />
          </span>
          <span className="nav-describ">React.js</span>
        </NavLink>
        <NavLink to="/php" className={(nav) => (nav.isActive ? "active" : "")}>
          <span>
            <img src="./images/php.png" alt="logo php" />
          </span>
          <span className="nav-describ">Php</span>
        </NavLink>
        <NavLink
          to="/php-symfony"
          className={(nav) => (nav.isActive ? "active" : "")}
        >
          <span>
            <img src="./images/framework.png" alt="logo symfony" />
          </span>
          <span className="nav-describ">Symfony</span>
        </NavLink>
      </div>
      <div className="portfolio">
        <NavLink
          to="/portfolio"
          className={(nav) => (nav.isActive ? "active" : "")}
        >
          <span>
            <img src="./images/portfolio.png" alt="logo portfolio" />
          </span>
          <span className="nav-describ">Portfolio</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
