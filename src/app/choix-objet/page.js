import Image from "next/image";
import Link from "next/link";
import Fleche from "../composant/fleche";
import Breadcrumbs from "../composant/breadcrumbs";

export default function QuiSommesNous() {
  const breadcrumbs = [
    { label: "Accueil", path: "/" },
    { label: "Nos objects culturels", path: "/nos-objects-culturels" },
    { label: "Objet ? : de multiples formes et thématiques variées", path: "/objet-multiple" },
    { label: "Deux enfants au destin différents", path: "/histoire-enfant" },
    { label: "Le choix de l'objet", path: "/choix-objet" },
  ];
  return (
    <>

    <Breadcrumbs items={breadcrumbs}/>
    <div className="w-full">
      {/* Image en arrière-plan */}
      <Image 
        src="/image/slie9.png" 
        alt="choixobjet" 
        width={1920} 
        height={1080} 
        className="w-full h-auto"
        priority
        />
    </div>
       
    <div
  className="absolute top-[104%] left-[50%] w-[45%] h-[150px] transform -translate-y-[50%] -translate-x-[50%] cursor-pointer"
>
  <a
    href="/wordte/Doc13_ObJets_Culturels_Albums_ABC_Cultures_Full_Expanded_Final.pdf"
    download
    className="block w-full h-full"
  >
    <span className="sr-only">Télécharger le document</span>
  </a>
</div>



        {/* Flèche centrée horizontalement et en bas de l’image */}
        <div className="absolute bottom-26 left-1/2 transform -translate-x-1/2 p-2 rounded-full">
          <Fleche prevPath = "/histoire-enfant" nextPath = "/votre-box"/>
        </div>
    </>
  );
}
