import { useState } from "react";
//import { useSearchParams } from "react-router-dom";
import "./styles.css";
import Menu from "./components/Menu";
import Content from "./components/Content";

export default function App() {
const avi = [
    {
      page: 9,
      lib: "Première énigme !",
      texteIndice: ["Gardez les lettres", "ab - a = b", "Sacs"]
    },
    {
      page: 12,
      lib: "L'Hôtel des Monnaies",
      texteIndice: [
        "Comparez avec le réel",
        "Une erreur sur la photo",
        "Chat"
      ]
    },
    {
      page: 14,
      lib: "Le palais des Papes",
      texteIndice: [
        "Des exemples sont données sur l'énigme",
        "Fenêtres",
        "Arrivée (le nombre de fenetres dans chaque arche donne une lettre)"
      ]
    },
    {
      page: 19,
      lib: "La gravure",
      texteIndice: [
        "Chantez maintenant",
        "Ces gens sont sur un pont",
        "La lettre D"
      ]
    },
    {
      page: 21,
      lib: "La vigne",
      texteIndice: [
        "Deux outils à combiner, déjà fournis",
        "Le stylo et la vigne",
        "Cage (Entourez le stylo)"
      ]
    },
    {
      page: 23,
      lib: "Le jardin",
      texteIndice: ["Cherchez la fraicheur", "La fontaine", "Meuse (plaque sous cygne)"]
    },
    {
      page: 25,
      lib: "Le nom de la rue",
      texteIndice: [
        "Proche de la plaque",
        "Gravure sous plaque de rue",
        "Rue des ciseaux d'or"
      ]
    },
    {
      page: 28,
      lib: "Le blason",
      texteIndice: [
        "Eliminez les mauvaises",
        "Les mauvaises couleurs",
        "Forums"
      ]
    },
    {
      page: 30,
      lib: "Le blason",
      texteIndice: [
        "Formez un seul mot",
        "Un restaurant de la palce",
        "Cloitre"
      ]
    },
    {
      page: 33,
      lib: "Les clés",
      texteIndice: [
        "Outil fournis en plus du carnet",
        "Pliez les clés",
        "Boucherie"
      ]
    },
    {
      page: 36,
      lib: "Les dés",
      texteIndice: [
        "Imaginez les dés posés sur un plaque en verre",
        "Additionnez est inversé, lisible du dessous",
        "Trois"
      ]
    },
    {
      page: 39,
      lib: "Mots croisés",
      texteIndice: [
        "1: Clément",
        "2: Doms, 3: Salamandre",
        "Moustaches"
      ]
    },
    {
      page: 41,
      lib: "Indice",
      texteIndice: ["Cherchez sur place", "Cadenas au niveau du poteau", "Combien (visible sur cadenas)"]
    },
    {
      page: 44,
      lib: "Le jardin",
      texteIndice: [
        "Melangez",
        "Jaune et bleu donne du vert",
        "Jarre (car fond vert)"
      ]
    },
    {
      page: 47,
      lib: "Ginette & Marcel",
      texteIndice: ["Nord vaut 'N'", "Ginette & Marcel sont au nord", "Nonnes"]
    },
    {
      page: 49,
      lib: "Les corps saints",
      texteIndice: [
        "Des fruits de pierre",
        "Qui parfois contiennent des pignons",
        "Pin"
      ]
    },
    {
      page: 52,
      lib: "Les arches",
      texteIndice: [
        "Trouvez la plaque qui ressemble au dessin",
        "Six lettres à déduire",
        "Maison"
      ]
    },
    {
      page: 54,
      lib: "Dernière énigme !",
      texteIndice: [
        "Plus je suis chaud, plus je suis frais. On me mange.",
        "Un aliment quotidien bien français",
        "Le pain !"
      ]
    }
  ];
const sif = [
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
const params = new URLSearchParams(window.location.search);
const tabEnigmes = ((params.get("vi") === "avi") ? avi : sif);

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
    <div className="App">
      <div className="hero">
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
