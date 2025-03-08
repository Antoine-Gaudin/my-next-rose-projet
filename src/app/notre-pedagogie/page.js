import Image from "next/image";
import Link from "next/link";
import Fleche from "../composant/fleche";
import Breadcrumbs from "../composant/breadcrumbs";

export default function Pedagogie() {

  const breadcrumbs = [
    { label: "Accueil", path: "/" },
    { label: "Notre pédagogie", path: "/notre-pedagogie" },

  ];

  return (
    <>
    <Breadcrumbs items={breadcrumbs}/>
    <div className="w-full">
      {/* Image en arrière-plan */}
      <Image 
        src="/image/slide11.png" 
        alt="Qui sommes-nous" 
        width={1920} 
        height={1080} 
        className="w-full h-auto"
        priority
        />
    </div>
       
        {/* Flèche centrée horizontalement et en bas de l’image */}
        <div className="absolute bottom-26 left-1/2 transform -translate-x-1/2 p-2 rounded-full">
          <Fleche prevPath="/" nextPath = "/Culture-carre"/>
        </div>
        </>
  );
}