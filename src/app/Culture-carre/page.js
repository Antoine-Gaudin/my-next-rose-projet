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
        src="/image/slide12.png" 
        alt="Qui sommes-nous" 
        width={1920} 
        height={1080} 
        className="w-full h-auto"
        priority
        />
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