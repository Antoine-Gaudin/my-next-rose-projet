import Image from "next/image";
import Link from "next/link";
import Fleche from "../composant/fleche";
import Breadcrumbs from "../composant/breadcrumbs";

export default function QuiSommesNous() {
  const breadcrumbs = [
    { label: "Accueil", path: "/" },
    { label: "Sommaire", path: "/sommaire" },
    { label: "Pour résumer", path: "/en-resumer" },
    { label: "Développement d'enfant", path: "/developpement-enfant" },
    { label: "Découverte et Inclusion", path: "/decouverte-et-inclusion" },
  ];
  return (
    <>

    <Breadcrumbs items={breadcrumbs}/>
    <div className="w-full">
      {/* Image en arrière-plan */}
      <Image 
        src="/image/slide15.png" 
        alt="choixobjet" 
        width={1920} 
        height={1080} 
        className="w-full h-auto"
        priority
        />
    </div>
       


        {/* Flèche centrée horizontalement et en bas de l’image */}
        <div className="absolute bottom-26 left-1/2 transform -translate-x-1/2 p-2 rounded-full">
          <Fleche prevPath = "/developpement-enfant"/>
        </div>
    </>
  );
}
