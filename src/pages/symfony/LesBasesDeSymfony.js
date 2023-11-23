import React, { useState } from "react";
import BodyHeader from "../../components/BodyHeader";
import Desktop from "../../components/Desktop";
import Navigation from "../../components/Navigation";
import LbdsDescription from "../../components/symfony/LbdsDescription";

const LesBasesDeSymfony = () => {
  /* On crée un useState pour changer l'affichage du composant au clic sur différents boutons */
  const [description, setDescription] = useState(<LbdsDescription />);
  const descriptions = (number) => {
    const descriptionsTable = [
      // 0
      <div>
        <span>
          Les routes sont déclarées dans le fichier{" "}
          <code>config/routes.yaml</code>. Il est possible de déclarer les
          routes autrement, pour des usages plus avancés.
        </span>
        <img src="./images/lbdsDescription0.png" alt="screen 0" />
      </div>,
      // 1
      <div>
        <span>
          Pour savoir quelle route correspond à la requête, le système de
          routing va parcourir les routes jusqu'à trouver la première
          correspondante :
          <ul>
            <li>
              Ainsi, si un utilisateur se rend sur l'index, le système de
              routing va analyser la première route : il trouve index, la route
              correspond, il envoie au kernel le contrôleur correspondant.
            </li>
            <li>
              Si un autre utilisateur souhaite aller sur la page /contact, le
              routeur va comparer avec la route index, qui ne correspond pas. Il
              passe donc à la seconde route, qui correspond. Il envoie donc au
              kernel l'information sur le contrôleur de la seconde route, nommé
              contact.
            </li>
          </ul>
          Le diagramme ci-dessous correspond au procédé du système de routing
          pour retrouver les informations correspondant à la route /contact.
        </span>
        <img src="./images/lbdsDescription1.png" alt="screen 1" />
      </div>,
      // 2
      <div>
        <span>
          Un contrôleur est la partie qui orchestre notre application. Lorsque
          celle-ci reçoit une requête, comme afficher une nouvelle page, le
          contrôleur se charge de retourner la réponse attendue. Lorsque nous
          travaillons avec Symfony, contrôleur signifie à la fois :
          <ul>
            <li>Une méthode qui retourne un objet Response à une requête.</li>
            <li>La classe qui contient ces méthodes.</li>
          </ul>
        </span>
        <img src="./images/lbdsDescription2.png" alt="screen 2" />
      </div>,
      // 3
      <div>
        <span>
          Un <strong>bundle</strong> est une bibliothèque spécialement adaptée
          pour Symfony permettant d'ajouter un ensemble de fonctionnalités à une
          application. Le gestionnaire de dépendances <strong>Composer</strong>{" "}
          permet d'installer des bundles. Pour installer le bundle{" "}
          <strong>Twig</strong> :
        </span>
        <img src="./images/lbdsDescription3.png" alt="screen 3" />
      </div>,
      // 4
      <div>
        <span>
          Un contrôleur peut aussi hériter de la classe{" "}
          <code>
            Symfony\Bundle\FrameworkBundle\Controller\AbstractController
          </code>
          . C'est une classe mise à disposition par Symfony offrant des
          raccourcis, dont la possibilité de générer plus facilement des objets
          Response.
        </span>
        <img src="./images/lbdsDescription4.png" alt="screen 4" />
        <span>
          Ligne 8 : on hérite notre classe de
          <code>
            Symfony\Bundle\FrameworkBundle\Controller\AbstractController
          </code>{" "}
          qui va nous donner accès à plusieurs méthodes. <br />
          Lignes 18 à 20 : on utilise plutôt la méthode <code>
            render()
          </code>{" "}
          qui permet de générer une <strong>Response</strong> à partir d'un
          template <strong>Twig</strong>.
        </span>
      </div>,
      // 5
      <div>
        <span>
          Le fonctionnement de Twig est basé sur du HTML, associé à une syntaxe
          propre.
          <ul>
            <li>
              Le fichier a pour extension .html.twig, qui est la convention pour
              les fichiers Twig.
            </li>
            <li>
              Les fichiers sont placés dans le dossier{" "}
              <strong>templates</strong>, puis dans le dossier{" "}
              <strong>default</strong> (qui correspond ici au contrôleur
              DefaultController). Par convention, les fichiers Twig se trouvent
              dans le nom de dossier correspondant au nom du contrôleur.
            </li>
          </ul>
        </span>
        <img src="./images/lbdsDescription5.png" alt="screen 5" />
      </div>,
      // 6
      <div>
        <span>
          Une commande est un script permettant de faciliter le travail des
          développeurs ou d'automatiser des actions. <br />
          Sur une installation minimale de Symfony, il existe :
          <ul>
            <li>des commandes concernant le cache de l'application</li>
            <li>des commandes pour déboguer</li>
            <li>des commandes en rapport avec le système de routing</li>
          </ul>
          Pour connaître la liste des commandes disponibles, dans le dossier de
          l'application, exécutez :
        </span>
        <img src="./images/lbdsDescription6.png" alt="screen 6" />
      </div>,
      // <div>
      //   <span>
      //     Se placer dans le répertoire ou est installé XAMPP (
      //     <strong>C:\xampp</strong>), et créer le répertoire "
      //     <strong>apps</strong>".
      //   </span>
      //   <img src="./images/symfony1im0.png" alt="" />
      // </div>,
    ];
    return descriptionsTable[number];
  };
  return (
    <div className="root">
      <Desktop />
      <div className="container">
        <BodyHeader breadcrumb="Home/Guides/Symfony/Les-bases-de-symfony" />

        {/* Création d'une div pour regrouper le composant Navigation et le contenu de Home */}
        <div className="content">
          {/* Composant Navigation */}
          <Navigation />
          {/* Contenu de la page LesBasesDeSymfony */}
          <div className="les-bases-de-symfony-content">
            <div className="les-bases-de-symfony-template">
              {/* Titre Partie 1 */}
              <div className="main-title-lbdst-content title-content">
                <h4>1. Le système de routing</h4>
              </div>
              {/* Partie 1 */}
              <div className="first-part-lbdst-content">
                {/* bloc 1 */}
                <div>
                  <span
                    onClick={(e) =>
                      setDescription(
                        <LbdsDescription description={descriptions(0)} />
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
                        <LbdsDescription description={descriptions(1)} />
                      )
                    }
                  >
                    <img src="./images/mind-mapping.png" alt="logo mapping" />
                  </span>
                </div>
              </div>
              {/* Titre Partie 2 */}
              <div className="main-title-lbdst-content title-content">
                <h4>2. Les contrôleurs</h4>
              </div>
              {/* Partie 2 */}
              <div className="second-part-lbdst-content">
                {/* bloc 1 */}
                <div>
                  <span
                    onClick={(e) =>
                      setDescription(
                        <LbdsDescription description={descriptions(2)} />
                      )
                    }
                  >
                    <img src="./images/controleur.png" alt="logo controleur" />
                  </span>
                </div>
              </div>
              {/* Titre Partie 3 */}
              <div className="main-title-lbdst-content title-content">
                <h4>3. Les templates</h4>
              </div>
              {/* Partie 3 */}
              <div className="third-part-lbdst-content">
                {/* bloc 1 */}
                <div>
                  <span
                    onClick={(e) =>
                      setDescription(
                        <LbdsDescription description={descriptions(3)} />
                      )
                    }
                  >
                    <img src="./images/box.png" alt="logo box" />
                  </span>
                </div>
                {/* bloc 2 */}
                <div>
                  <span
                    onClick={(e) =>
                      setDescription(
                        <LbdsDescription description={descriptions(4)} />
                      )
                    }
                  >
                    <img src="./images/controleur.png" alt="logo controleur" />
                  </span>
                </div>
                {/* bloc 3 */}
                <div>
                  <span
                    onClick={(e) =>
                      setDescription(
                        <LbdsDescription description={descriptions(5)} />
                      )
                    }
                  >
                    <img src="./images/wood.png" alt="logo wood" />
                  </span>
                </div>
              </div>
              {/* Titre Partie 4 */}
              <div className="main-title-lbdst-content title-content">
                <h4>4. Les commandes</h4>
              </div>
              {/* Partie 4 */}
              <div className="fourth-part-lbdst-content">
                {/* bloc 1 */}
                <div>
                  <span
                    onClick={(e) =>
                      setDescription(
                        <LbdsDescription description={descriptions(6)} />
                      )
                    }
                  >
                    <img
                      src="./images/cupst-terminal.png"
                      alt="logo cupst-terminal"
                    />
                  </span>
                </div>
              </div>
              <div className="title-content">
                <h4>Cliquer sur un icône pour afficher le guide</h4>
              </div>
            </div>
            <div className="les-bases-de-symfony-description">
              {description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LesBasesDeSymfony;
