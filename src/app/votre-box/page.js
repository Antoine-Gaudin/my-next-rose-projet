"use client";

import Image from "next/image";
import Breadcrumbs from "../composant/breadcrumbs";
import Fleche from "../composant/fleche";

export default function Pedagogie() {
  const breadcrumbs = [
    { label: "Accueil", path: "/" },
    { label: "Nos objects culturels", path: "/nos-objects-culturels" },
    { label: "Objet ? : de multiples formes et thématiques variées", path: "/objet-multiple" },
    { label: "Deux enfants au destin différents", path: "/histoire-enfant" },
    { label: "Le choix de l'objet", path: "/choix-objet" },
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />

      {/* Image de fond */}
      <div className="relative w-full">
        <Image
          src="/image/slie10.png"
          alt="Qui sommes-nous"
          width={1920}
          height={1080}
          className="w-full h-auto object-cover"
          priority
        />

        {/* Conteneur des liens de téléchargement */}
        <div className="absolute top-[50%] right-[5%] w-[70%] max-w-[800px] md:w-[50%] lg:w-[50%] flex flex-col space-y-4">

          {/* Lien de téléchargement 1 */}
          <a
            href="/wordte/xls1 Liste des Livres et Ressources articles.docx"
            download
            className="w-full px-6 py-4 bg-white border-4 border-blue-600 text-blue-700 text-lg font-bold text-center rounded-lg hover:bg-blue-100 transition-all"
          >
            Les définitions, articles de pédagogie et d'ethonologie, contes légendes et mythes
          </a>

          {/* Lien de téléchargement 2 */}
          <a
            href="/wordte/xls2 Liste des Livres et Ressources.docx"
            download
            className="w-full px-6 py-4 bg-white border-4 border-blue-600 text-blue-700 text-lg font-bold text-center rounded-lg hover:bg-blue-100 transition-all"
          >
            Les livres, albums pour enfants
          </a>

          {/* Lien de téléchargement 3 */}
          <a
            href="/wordte/xls3 Liste_Livres_ABC_Cultures_Updated_with_Details.docx"
            download
            className="w-full px-6 py-4 bg-white border-4 border-blue-600 text-blue-700 text-lg font-bold text-center rounded-lg hover:bg-blue-100 transition-all"
          >
            Les aides pédagogiques, un jeu, une technique ou pratique liés à l'objet
          </a>
        </div>
      </div>

      {/* Flèche navigation */}
      <div className="absolute bottom-26 left-1/2 transform -translate-x-1/2 p-2 rounded-full">
        <Fleche prevPath="/Culture-carre" nextPath="/developpement-enfant" />
      </div>
    </>
  );
}
