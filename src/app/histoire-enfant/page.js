"use client";

import Image from "next/image";
import Fleche from "../composant/fleche";
import Breadcrumbs from "../composant/breadcrumbs";

export default function QuiSommesNous() {
  const breadcrumbs = [
    { label: "Accueil", path: "/" },
    { label: "Nos objects culturels", path: "/nos-objects-culturels" },
    { label: "Objet ? : de multiples formes et thématiques variées", path: "/objet-multiple" },
    { label: "Deux enfants au destin différents", path: "/histoire-enfant" },
  ];

  const handleDownload1 = () => {
    const link = document.createElement("a");
    link.href = "/wordte/doc7 Histoire réelle_Histoire_Poupée_Cultures_ABC_Cultures.docx";
    link.download = "";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownload2 = () => {
    const link = document.createElement("a");
    link.href = "/wordte/doc7 Histoire réelle_Histoire_Poupée_Cultures_ABC_Cultures.docx";
    link.download = "";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />

      <div className="relative w-full">
        {/* Image de fond */}
        <Image
          src="/image/sli8.png"
          alt="Qui sommes-nous"
          width={1920}
          height={1080}
          className="w-full h-auto"
          priority
        />

        {/* Image 10 en haut à droite avec téléchargement au clic */}
        <Image
          src="/image/Image10.png"
          width={200}
          height={300}
          alt="Je découvre"
          className="absolute top-[9%] right-5 w-[50%] h-auto cursor-pointer"
          onClick={handleDownload1}
          priority
        />

        {/* Image 11 en bas à gauche avec téléchargement au clic */}
        <Image
          src="/image/Image11.png"
          width={200}
          height={300}
          alt="Un objet"
          className="absolute bottom-5 left-5 w-[40%] h-auto cursor-pointer"
          onClick={handleDownload2}
          priority
        />
      </div>

      {/* Flèche centrée en bas */}
      <div className="absolute bottom-26 left-1/2 transform -translate-x-1/2 p-2 rounded-full">
        <Fleche prevPath="/objet-multiple" nextPath="/choix-objet" />
      </div>
    </>
  );
}
