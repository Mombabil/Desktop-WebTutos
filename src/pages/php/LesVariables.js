import React, { useState } from "react";
import BodyHeader from "../../components/BodyHeader";
import Desktop from "../../components/Desktop";
import Navigation from "../../components/Navigation";
import LvDescription from "../../components/php/LvDescription";

const LesVariables = () => {
  /* On crée un useState pour changer l'affichage du composant au clic sur différents boutons */
  const [description, setDescription] = useState(<LvDescription />);
  const descriptions = (number) => {
    const descriptionsTable = [
      <div>
        <span>
          Une variable est représentée par un identifiant associé à une valeur.
          <br />
          Les variables peuvent changer de valeur en fonction des traitements
          effectués (calculs, modification de texte, modification de la liste de
          valeurs, etc.).
        </span>
        <img src="./images/lvelcDescription0.png" alt="screen 0" />
        <span>
          <ul>
            <li>
              Pour déclarer une variable PHP, on précède le nom qu'on souhaite
              lui donner du symbole dollar ($).
            </li>
            <li>
              Les noms des variables sont sensibles à la casse (prise en compte
              des majuscules/minuscules). Ils doivent commencer par une lettre
              ou le symbole souligné ( _ ) et peuvent contenir des lettres,
              chiffres ou des soulignés.{" "}
            </li>
            <li>
              Une variable ne peut pas commencer par un chiffre (ex :
              $1userName) ou par un autre caractère spécial (ex : $/userName) La
              bonne pratique veut que le nom de la variable soit en anglais et
              assez descriptif (ex : $userName pour définir le nom de
              l'utilisateur).
            </li>
            <li>
              Pour lui affecter une valeur, on fait suivre le nom du symbole
              égal (=), suivi de la valeur désirée.{" "}
            </li>
            <li>
              Comme toutes les instructions en PHP, l'affectation doit être
              clôturée avec un point-virgule (;).
            </li>
          </ul>
        </span>
      </div>,
    ];
    return descriptionsTable[number];
  };
  return (
    <div className="root">
      <Desktop />
      <div className="container">
        <BodyHeader breadcrumb="Home/Guides/PHP/Les-variables-et-les-constantes" />

        {/* Création d'une div pour regrouper le composant Navigation et le contenu de Home */}
        <div className="content">
          {/* Composant Navigation */}
          <Navigation />
          {/* Contenu de la page LesVariables */}
          <div className="les-variables-content">
            <div className="les-variables-template">
              {/* Titre Partie 1 */}
              <div className="main-title-lvelct-content title-content">
                <h4>1. Les variables PHP</h4>
              </div>
              {/* Partie 1 */}
              <div className="first-part-lvelct-content">
                <div>
                  <span
                    onClick={(e) =>
                      setDescription(
                        <LvDescription description={descriptions(0)} />
                      )
                    }
                  >
                    <img src="./images/formula.png" alt="logo variables" />
                  </span>
                </div>
                {/* Titre Partie 2 */}
                <div className="second-title-lvelct-content title-content">
                  <h4>
                    2. Configurer Apache pour accéder à notre site web (avec
                    XAMPP)
                  </h4>
                </div>
                {/* Partie 2 */}
                <div className="second-part-lvelct-content"></div>
                <div className="title-content">
                  <h4>Cliquer sur un icône pour afficher le guide</h4>
                </div>
              </div>
              <div className="les-variables-description">{description}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LesVariables;
