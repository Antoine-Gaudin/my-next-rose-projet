import Image from "next/image";
import Fleche from "../composant/fleche";
import Breadcrumbs from "../composant/breadcrumbs";

export default function ObjectMultiple() {

  const breadcrumbs = [
    { label: "Accueil", path: "/" },
    { label: "Nos objects culturels", path: "/nos-objects-culturels" },
    { label: "Objet ? : de multiples formes et thématiques variées", path: "/objet-multiple" },
  ];

  return (
    <>
    <Breadcrumbs items={breadcrumbs}/>
      <div className="relative w-full">
        {/* Image en arrière-plan */}
        <Image 
          src="/image/slide7.png" 
          alt="Qui sommes-nous" 
          width={1920} 
          height={1080} 
          className="w-full h-auto"
          priority
        />

        {/* Flèche centrée horizontalement et en bas de l’image */}
        <div className="absolute bottom-26 left-1/2 transform -translate-x-1/2 p-2 rounded-full">
          <Fleche prevPath="/nos-objects-culturels" nextPath="/histoire-enfant" />
        </div>
      </div>
    </>
  );
}
