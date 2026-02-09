import Image from "next/image";
import Link from "next/link";
import Fleche from "../composant/fleche";
import Breadcrumbs from "../composant/breadcrumbs";

const breadcrumbs = [
  { label: "Accueil", path: "/" },
  { label: "Qui somme-nous", path: "/qui-sommes-nous" },
  {
    label: "L'univers de l'ethographie visuelle",
    path: "/ethnographie-visuelle",
  },
];

export default function QuiSommesNous() {
  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      <div className="w-full">
        {/* Image en arrière-plan */}
        <Image
          src="/image/slide4.png"
          alt="Qui sommes-nous"
          width={1920}
          height={1080}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* Conteneur des liens de téléchargement */}
      <div className="absolute top-[102%] left-[10%] w-[15%] max-w-[350px] md:w-[50%] lg:w-[50%] flex flex-col space-y-4">
        {/* Lien de téléchargement 1 */}
        <a
          href="/wordte/Doc4 Ethnographie_Visuelle_En_Milieu_Scolaire.pdf"
          target="_blank"
          className="w-full px-6 py-4 bg-white border-4 border-blue-600 text-blue-700 text-lg font-bold text-center rounded-lg hover:bg-blue-100 transition-all"
        >
          Ethnographie visuelle
        </a>

        {/* Lien de téléchargement 2 */}
        <a
          href="/wordte/doc5_Article_Metamorphose_de_la_Tradition_Cargo_with_Rougeon_Article_Corrected_v3.pdf"
          target="_blank"
          className="w-full px-6 py-4 bg-white border-4 border-blue-600 text-blue-700 text-lg font-bold text-center rounded-lg hover:bg-blue-100 transition-all"
        >
          Méthamorphose de la tradition
        </a>
      </div>

      {/* Flèche centrée horizontalement et en bas de l’image */}
      <div className="absolute bottom-26 left-1/2 transform -translate-x-1/2 p-2 rounded-full">
        <Fleche prevPath="/qui-sommes-nous" nextPath="/eduquer-le-regard" />
      </div>
    </>
  );
}
