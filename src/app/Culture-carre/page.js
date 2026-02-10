import Image from "next/image";
import Link from "next/link";
import Fleche from "../composant/fleche";
import Breadcrumbs from "../composant/breadcrumbs";

export default function Pedagogie() {
  const breadcrumbs = [
    { label: "Accueil", path: "/" },
    { label: "Notre pédagogie", path: "/notre-pedagogie" },
    { label: "Le carré culturel", path: "/Culture-carre" },
  ];

  return (
    <>
    <Breadcrumbs items={breadcrumbs}/>
    <div className="w-full">
      {/* Image en arrière-plan */}
      <Image 
        src="/image/slide12v2.png" 
        alt="Qui sommes-nous" 
        width={1920} 
        height={1080} 
        className="w-full h-auto"
        priority
        />
    </div>
       
{/* --- ? Info accordion --- */}
<div className="group absolute top-[38%] right-[50%] z-20">
  <div className="w-[45px] h-[45px] bg-[#f7f309] border-[3px] border-black rounded-full flex items-center justify-center cursor-pointer animate-bounce-slow shadow-lg">
    <span className="text-black font-bold text-2xl select-none">?</span>
  </div>
  <div className="absolute top-[50px] right-0 w-[350px] max-h-0 overflow-hidden opacity-0 group-hover:max-h-[600px] group-hover:opacity-100 transition-all duration-500 ease-in-out bg-white/95 border-2 border-black rounded-xl shadow-2xl p-0 group-hover:p-5">
    <p className="text-black text-sm leading-relaxed">
      Ce carré pédagogique présente l&apos;architecture de la démarche ABC Cultures.
    </p>
    <p className="text-black text-sm leading-relaxed">
      Chaque objet culturel constitue un point d&apos;entrée vers une pluralité de savoirs&nbsp;: histoires, cultures, récits, formes, arts et sciences.
    </p>
    <p className="text-black text-sm leading-relaxed">
      À partir de l&apos;objet, l&apos;enfant observe, touche, manipule, dessine et met en mots. Les apprentissages se construisent par circulation entre les disciplines, et non par juxtaposition de contenus.
    </p>
    <p className="text-black text-sm leading-relaxed">
      Les fiches associées (fiche technique de l&apos;objet, fiche de lecture et étude ethnographique, aides pédagogiques, activités artistiques) accompagnent cette exploration et permettent aux enseignants, parents et étudiants de structurer leur pratique dans une logique de continuité.
    </p>
  </div>
</div>

<div
  className="absolute top-[38%] left-[72%] w-[20%] h-[70px] transform -translate-y-[50%] -translate-x-[50%] cursor-pointer"
>
  <a
    href="/wordte/DOC8 Fiche_Technique_Observation_Objets_Culturels_ABC_Cultures.pdf"
    target="_blank"
    className="block w-full h-full"
  >
    <span className="sr-only">Télécharger le document</span>
  </a>
</div>

    <div
  className="absolute top-[53%] left-[72%] w-[25%] h-[70px] transform -translate-y-[50%] -translate-x-[50%] cursor-pointer"
>
  <a
    href="/wordte/DOC9 Brochure Pédagogique.pdf"
 target="_blank"
    className="block w-full h-full"
  >
    <span className="sr-only">Télécharger le document</span>
  </a>
</div>



<div
  className="absolute top-[70%] left-[73%] w-[35%] h-[80px] transform -translate-y-[50%] -translate-x-[50%] cursor-pointer"
>
  <a
    href="/wordte/DOC10 materiels_pedagogiques_complet_4.pdf"
target="_blank"
    className="block w-full h-full"
  >
    <span className="sr-only">Télécharger le document</span>
  </a>
</div>

<div
  className="absolute top-[85%] left-[72%] w-[23%] h-[80px]  transform -translate-y-[50%] -translate-x-[50%] cursor-pointer"
>
  <a
    href="/wordte/DOC11 materiels_pedagogiques_complet_final_v2.pdf"
target="_blank"
    className="block w-full h-full"
  >
    <span className="sr-only">Télécharger le document</span>
  </a>
</div>


        {/* Flèche centrée horizontalement et en bas de l’image */}
        <div className="absolute bottom-26 left-1/2 transform -translate-x-1/2 p-2 rounded-full">
          <Fleche prevPath="/notre-pedagogie"/>
        </div>
        </>
  );
}