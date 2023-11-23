import React, { useState } from "react";
import BodyHeader from "../../components/BodyHeader";
import Navigation from "../../components/Navigation";
import Desktop from "../../components/Desktop";
import CupsDescription from "../../components/symfony/CupsDescription";

const CreerUnProjetSymfony = () => {
  /* On crée un useState pour changer l'affichage du composant au clic sur différents boutons */
  const [description, setDescription] = useState(<CupsDescription />);
  const descriptions = (number) => {
    const descriptionsTable = [
      <span>
        Installer PHP 7.4 et Composer sur la machine, et les avoir disponible en
        ligne de commande. (
        <a href="https://getcomposer.org/download/">Composer</a>)
      </span>,
      <div>
        <span>
          Se placer dans le répertoire ou est installé XAMPP (
          <strong>C:\xampp</strong>), et créer le répertoire "
          <strong>apps</strong>".
        </span>
        <img src="./images/symfony1im0.png" alt="" />
      </div>,
      <div>
        <span>
          Executer la commande :{" "}
          <code>composer create-project symfony/skeleton symfony</code> dans le
          terminal. Cela créera un répertoire "<strong>symfony</strong>"
          contenant l'architecture Symfony.
        </span>
        <img src="./images/symfony1im1.png" alt="" />
      </div>,
      <div>
        <span>
          Ouvrir le fichier{" "}
          <code>C:\xampp\apache\conf\extra\httpd-vhosts.conf</code> et ajouter
          les lignes suivantes :{" "}
        </span>
        <img src="./images/symfony1im2.png" alt="" />
      </div>,
      <span>
        Redémarrer le serveur Apache. (sur XAMPP, sur la ligne APACHE, "STOP"
        puis "START").
      </span>,
      <div>
        <span>
          Ouvrir le fichier hosts{" "}
          <code>C:\Windows\System32\drivers\etc\hosts</code> et ajouter les
          lignes suivantes :
        </span>
        <img src="./images/symfony1im5.png" alt="" />
      </div>,
      <span>
        Dans le navigateur, taper dans la barre d'adresse l'URL :{" "}
        <a href="http://symfony.localhost">http://symfony.localhost</a>
      </span>,
      <div>
        <span>
          Avec VsCode, dans <code>src/Controller</code>, créer un fichier{" "}
          <code>DefaultController.php</code> et y insérer le code suivant :
        </span>
        <img src="./images/symfony1im4.png" alt="" />
      </div>,
    ];
    return descriptionsTable[number];
  };

  return (
    <div className="root">
      <Desktop />
      <div className="container">
        <BodyHeader breadcrumb="Home/Guides/Symfony/Creer-un-projet-symfony" />

        {/* Création d'une div pour regrouper le composant Navigation et le contenu de Home */}
        <div className="content">
          {/* Composant Navigation */}
          <Navigation />
          {/* Contenu de la page CreerUnProjetSymfony */}
          <div className="creer-un-projet-symfony-content">
            <div className="creer-un-projet-symfony-template">
              {/* Titre Partie 1 */}
              <div className="main-title-cupst-content title-content">
                <h4>1. Créer un projet Symfony</h4>
              </div>
              {/* Partie 1 */}
              <div className="first-part-cupst-content">
                <div>
                  <span
                    onClick={(e) =>
                      setDescription(
                        <CupsDescription description={descriptions(0)} />
                      )
                    }
                  >
                    <img src="./images/cupst-php.png" alt="logo php" />
                  </span>
                </div>
                <div>
                  <span
                    onClick={(e) =>
                      setDescription(
                        <CupsDescription description={descriptions(1)} />
                      )
                    }
                  >
                    <img src="./images/file-and-folder.png" alt="logo php" />
                  </span>
                </div>
                <div>
                  <span
                    onClick={(e) =>
                      setDescription(
                        <CupsDescription description={descriptions(2)} />
                      )
                    }
                  >
                    <img src="./images/cupst-terminal.png" alt="logo php" />
                  </span>
                </div>
              </div>
              {/* Titre Partie 2 */}
              <div className="second-title-cupst-content title-content">
                <h4>
                  2. Configurer Apache pour accéder à notre site web (avec
                  XAMPP)
                </h4>
              </div>
              {/* Partie 2 */}
              <div className="second-part-cupst-content">
                <div>
                  <span
                    onClick={(e) =>
                      setDescription(
                        <CupsDescription description={descriptions(3)} />
                      )
                    }
                  >
                    <img src="./images/file-and-folder.png" alt="logo php" />
                  </span>
                </div>
                <div>
                  <span
                    onClick={(e) =>
                      setDescription(
                        <CupsDescription description={descriptions(4)} />
                      )
                    }
                  >
                    <img src="./images/cupst-restart.png" alt="logo php" />
                  </span>
                </div>
                <div>
                  <span
                    onClick={(e) =>
                      setDescription(
                        <CupsDescription description={descriptions(5)} />
                      )
                    }
                  >
                    <img src="./images/file-and-folder.png" alt="logo php" />
                  </span>
                </div>
                <div>
                  <span
                    onClick={(e) =>
                      setDescription(
                        <CupsDescription description={descriptions(6)} />
                      )
                    }
                  >
                    <img src="./images/cupst-url.png" alt="logo php" />
                  </span>
                </div>
                <div>
                  <span
                    onClick={(e) =>
                      setDescription(
                        <CupsDescription description={descriptions(7)} />
                      )
                    }
                  >
                    <img src="./images/cupst-txt.png" alt="logo php" />
                  </span>
                </div>
              </div>
              <div className="title-content">
                <h4>Cliquer sur un icône pour afficher le guide</h4>
              </div>
            </div>
            <div className="creer-un-projet-symfony-description">
              {description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreerUnProjetSymfony;
