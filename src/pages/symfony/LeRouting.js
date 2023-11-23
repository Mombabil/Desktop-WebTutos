import React, { useState } from "react";
import BodyHeader from "../../components/BodyHeader";
import Desktop from "../../components/Desktop";
import Navigation from "../../components/Navigation";
import LrDescription from "../../components/symfony/LrDescription";

const LeRouting = () => {
  /* On crée un useState pour changer l'affichage du composant au clic sur différents boutons */
  const [description, setDescription] = useState(<LrDescription />);
  const descriptions = (number) => {
    const descriptionsTable = [
      // 0
      <div>
        <span>
          <ul>
            <li>
              Lorsqu'une requête est faite sur l'URL d'une application Symfony,
              c'est tout d'abord le kernel qui reçoit la requête HTTP.
            </li>
            <li>
              Celui-ci fait alors appel au router afin de déterminer quelle sera{" "}
              <strong>l'action</strong> à exécuter, c'est-à-dire la fonction qui
              va être appelée, et quels seront les éventuels paramètres à lui
              fournir. Le router va alors comparer chacune des routes de
              l'application avec l'URL de la requête, jusqu'à trouver celle qui
              correspond.
            </li>
            <li>
              Une fois la bonne route trouvée, le kernel pourra alors demander
              au bon controller d'exécuter <strong>l'action</strong>{" "}
              correspondante, avec les éventuels paramètres.
            </li>
          </ul>
        </span>
        <img src="./images/lrDescription0.png" alt="screen 0" />
      </div>,
      <div>
        <span>
          De base, la définition des routes se fait via un fichier de
          configuration, qui peut être au format YAML, XML ou PHP. Ce fichier
          doit se trouver dans le dossier config de l'application. Par exemple,
          pour une définition d'une route <code>/home</code> en YAML, nous
          aurions le fichier <code>config/routes.yaml</code> suivant :
        </span>
        <img src="./images/lrDescription1.png" alt="screen 1" />
        <span>
          Cela signifie que si l’URL demandée par le client est{" "}
          <code>/home</code>, le routeur va faire la correspondance sur la base
          du fichier ci-dessus et déduire que le contrôleur à lancer est
          DefaultController::home (l’action, ou la méthode, home de la classe
          DefaultController). Il va retourner cette information au kernel, qui
          va appeler ce contrôleur et lui demander d’exécuter le code contenu
          dans l’action/la méthode home en question.
        </span>
      </div>,
      <div>
        <span>
          Il est également possible de paramétrer les routes directement au sein
          d'un contrôleur via des annotations au-dessus de chaque action. Pour
          ce faire et si ce n'est pas déjà fait, il faut avoir installé le
          composant Annotation : <strong>composer require annotations</strong>.{" "}
          <br />
          La même route sera alors :
        </span>
        <img src="./images/lrDescription2.png" alt="screen 2" />
        <span>
          Définir les routes directement dans le contrôleur au niveau de
          l'action correspondante permet de centraliser la définition des routes
          et des actions associées ce qui offre une meilleure maintenabilité et
          lisibilité.
          <br />
          Dans la suite de ce cours, c’est ce fonctionnement que nous
          privilégierons donc mais gardez bien en mémoire qu’il est aussi
          possible de définir les routes dans un fichier de configuration, comme
          présenté ci-dessus.
        </span>
      </div>,
    ];
    return descriptionsTable[number];
  };
  return (
    <div className="root">
      <Desktop />
      <div className="container">
        <BodyHeader breadcrumb="Home/Guides/Symfony/Le-routing" />

        {/* Création d'une div pour regrouper le composant Navigation et le contenu de Home */}
        <div className="content">
          {/* Composant Navigation */}
          <Navigation />
          {/* Contenu de la page LeRouting */}
          <div className="le-routing-content">
            <div className="le-routing-template">
              {/* Titre Partie 1 */}
              <div className="main-title-lrt-content title-content">
                <h4>1. Fonctionnement du routeur</h4>
              </div>
              {/* Partie 1 */}
              <div className="first-part-lrt-content">
                {/* bloc 1 */}
                <div>
                  <span
                    onClick={(e) =>
                      setDescription(
                        <LrDescription description={descriptions(0)} />
                      )
                    }
                  >
                    <img src="./images/routeur.png" alt="logo dossier" />
                  </span>
                </div>
              </div>
              {/* Titre Partie 2 */}
              <div className="main-title-lrt-content title-content">
                <h4>2. Définir les routes dans le contrôleur</h4>
              </div>
              {/* Partie 2 */}
              <div className="second-part-lrt-content">
                {/* bloc 1 */}
                <div>
                  <span
                    onClick={(e) =>
                      setDescription(
                        <LrDescription description={descriptions(1)} />
                      )
                    }
                  >
                    <img
                      src="./images/file-and-folder.png"
                      alt="logo dossier"
                    />
                  </span>
                </div>
                {/* bloc 2 */}
                <div>
                  <span
                    onClick={(e) =>
                      setDescription(
                        <LrDescription description={descriptions(2)} />
                      )
                    }
                  >
                    <img src="./images/controleur.png" alt="logo controleur" />
                  </span>
                </div>
              </div>
              {/* Titre Partie 3 */}
              <div className="main-title-lrt-content title-content">
                <h4>3. Les templates</h4>
              </div>
              {/* Partie 3 */}
              <div className="third-part-lrt-content">
                {/* bloc 1 */}
                {/* <div>
                  <span
                    onClick={(e) =>
                      setDescription(
                        <LrDescription description={descriptions(3)} />
                      )
                    }
                  >
                    <img src="./images/box.png" alt="logo box" />
                  </span>
                </div> */}
                {/* bloc 2 */}
                {/* <div>
                  <span
                    onClick={(e) =>
                      setDescription(
                        <LrDescription description={descriptions(4)} />
                      )
                    }
                  >
                    <img src="./images/controleur.png" alt="logo controleur" />
                  </span>
                </div> */}
                {/* bloc 3 */}
                {/* <div>
                  <span
                    onClick={(e) =>
                      setDescription(
                        <LrDescription description={descriptions(5)} />
                      )
                    }
                  >
                    <img src="./images/wood.png" alt="logo wood" />
                  </span>
                </div> */}
              </div>
              {/* Titre Partie 4 */}
              <div className="main-title-lrt-content title-content">
                <h4>4. Les commandes</h4>
              </div>
              {/* Partie 4 */}
              <div className="fourth-part-lrt-content">
                {/* bloc 1 */}
                {/* <div>
                  <span
                    onClick={(e) =>
                      setDescription(
                        <LrDescription description={descriptions(6)} />
                      )
                    }
                  >
                    <img
                      src="./images/cupst-terminal.png"
                      alt="logo cupst-terminal"
                    />
                  </span>
                </div> */}
              </div>
              <div className="title-content">
                <h4>Cliquer sur un icône pour afficher le guide</h4>
              </div>
            </div>
            <div className="le-routing-description">{description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeRouting;
