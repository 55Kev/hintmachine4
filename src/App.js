import { useState } from "react";
import "./styles.css";
import Menu from "./components/Menu";
import Content from "./components/Content";

export default function App() {
  const tabEnigmes = [
    {
      page: 5,
      lib: "Une 1ere énigme",
      texteIndice: ["Une enseigne", "Immobilière", "Le sel de la vie"]
    },
    {
      page: 7,
      lib: "Un panneau codé",
      texteIndice: [
        "Trouvez de quoi se désaltérer",
        "Un écriteau sur la fontaine, inspirez-vous en",
        "Félicitations continuez"
      ]
    },
    {
      page: 9,
      lib: "Des points bizarres",
      texteIndice: [
        "Regardez vos pieds",
        "Re-dessinez le cygne au sol",
        "La maison du cygne"
      ]
    },
    {
      page: 11,
      lib: "Un portail vers la verité",
      texteIndice: [
        "Cherchez la pièce manquante",
        "elle est en métal sur le portail",
        "Quête"
      ]
    },
    {
      page: 13,
      lib: "Orthografik",
      texteIndice: [
        "Trouvez sur le panneau",
        "Père ou pair ?",
        "La maison du cygne et le patio"
      ]
    },
    {
      page: 15,
      lib: "Ne pas être borné",
      texteIndice: ["Parfois en anglais", "Four(s) = 4 en anglais", "Fada"]
    },
    {
      page: 17,
      lib: "Le plan",
      texteIndice: [
        "Trouvez sur le panneau",
        "Les points dessinent",
        "La lettre 'T'"
      ]
    },
    {
      page: 19,
      lib: "Ecran ou nacre ?",
      texteIndice: [
        "Anagramme",
        "Restez prês de la capitainerie",
        "Trouvez l'ancre où est noté 'SLN'"
      ]
    },
    {
      page: 21,
      lib: "La devinette",
      texteIndice: [
        "De qui/quoi parle-t-on ?",
        "Les pavillons !",
        "Un drapeau (donc 'bleu blanc rouge')"
      ]
    },
    {
      page: 23,
      lib: "L'éléphant",
      texteIndice: [
        "Pas d'animal à trouver",
        "Plutôt une grande plante ressemblant à des pieds d'éléphants",
        "'Californie' d'où viennent les yuccas selon le panneau"
      ]
    },
    {
      page: 25,
      lib: "Les clés",
      texteIndice: [
        "Pas besoin de chercher un trou de serrure",
        "Comparez les formes",
        "La clé 'U' est en forme du batiment"
      ]
    },
    {
      page: 27,
      lib: "Paysage codé",
      texteIndice: [
        "Je signale les gros cailloux",
        "Les couleurs de bouées cardinales",
        "'Solution' en gardant couleurs jaune & noire"
      ]
    },
    {
      page: 29,
      lib: "Batterie",
      texteIndice: ["Regardez dans l'axe", "du canon", "Maquis"]
    },
    {
      page: 31,
      lib: "La plante",
      texteIndice: [
        "Aidez-vous du panneau",
        "Quelqu'un qui a peur de l'Europe",
        "Euphorbes"
      ]
    },
    {
      page: 33,
      lib: "L'origami",
      texteIndice: ["Pliez selon instructions", "réponse sur l'aile", "Paquet"]
    },
    {
      page: 34,
      lib: "L'héritier - dernière énigme !",
      texteIndice: [
        "Les balades",
        "Les plages de galets",
        "C'est Caroline la petite-fille !"
      ]
    }
  ];

  const [currentPage, setCurrentPage] = useState("");
  const [historyNav, setHistoryNav] = useState([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ]);
  const [menuToRender, setMenuToRender] = useState(true);
  const [contentToRender, setContentToRender] = useState(false);

  const updateHistory = () => {
    //Copie de l'état puis re-import pour MAJ
    console.log(tabEnigmes[currentPage].texteIndice.length);
    console.log(historyNav);
    const hst = [...historyNav];
    if (historyNav[currentPage] < tabEnigmes[currentPage].texteIndice.length)
      hst[currentPage]++;
    setHistoryNav(hst);
  };
  const handleChoixEnigme = (index) => {
    setCurrentPage(index);
    setMenuToRender(false);
    setContentToRender(true);
  };

  const handleBackToMenu = () => {
    setMenuToRender(true);
    setContentToRender(false);
  };

  return (
    <div className="App container">
      <div className="row hero">
        <h1 className="text-center">.</h1>
      </div>
      <Menu
        render={menuToRender}
        enigmes={tabEnigmes}
        eventChoixEnigme={handleChoixEnigme}
      />
      <Content
        render={contentToRender}
        enigmes={tabEnigmes}
        enigme={currentPage}
        history={historyNav}
        handleBackToMenu={handleBackToMenu}
        handleShowHint={updateHistory}
      />
    </div>
  );
}
