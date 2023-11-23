import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
/* Pages accueil, contact, et lightMode */
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Param from "./pages/Param";
/* Pages langages */
import Symfony from "./pages/Symfony";
import Js from "./pages/Js";
import JsReact from "./pages/JsReact";
import Php from "./pages/Php";
/* Pages de la catégorie Symfony */
import CreerUnProjetSymfony from "./pages/symfony/CreerUnProjetSymfony";
import LesBasesDeSymfony from "./pages/symfony/LesBasesDeSymfony";
import LeRouting from "./pages/symfony/LeRouting";
import LesVariables from "./pages/php/LesVariables";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Pages accueil, contact, et lightMode */}
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/param" element={<Param />} />
        {/* Pages langages */}
        <Route path="/js" element={<Js />} />
        <Route path="/js-react" element={<JsReact />} />
        <Route path="/php" element={<Php />} />
        <Route path="/php-symfony" element={<Symfony />} />
        {/* Pages de la catégorie JS */}
        {/* Pages de la catégorie React */}
        {/* Pages de la catégorie Php */}
        <Route
          path="/php-les-variables-et-les-constantes"
          element={<LesVariables />}
        />
        {/* Pages de la catégorie Symfony */}
        <Route
          path="/php-symfony-creer-un-projet-symfony"
          element={<CreerUnProjetSymfony />}
        />
        <Route
          path="/php-symfony-les-bases-de-symfony"
          element={<LesBasesDeSymfony />}
        />
        <Route path="/php-symfony-le-routing" element={<LeRouting />} />
      </Routes>
    </BrowserRouter>
  );
}
