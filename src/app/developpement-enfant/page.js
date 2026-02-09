import Image from "next/image";
import Link from "next/link";
import Fleche from "../composant/fleche";
import Breadcrumbs from "../composant/breadcrumbs";

export default function Pedagogie() {
  const breadcrumbs = [
    { label: "Accueil", path: "/" },
    { label: "Sommaire", path: "/sommaire" },
    { label: "Pour résumer", path: "/en-resumer" },
    { label: "Développement d'enfant", path: "/developpement-enfant" },
  ];
  return (
    <>
    <Breadcrumbs items={breadcrumbs}/>
    <div className="w-full">
      {/* Image en arrière-plan */}
      <Image 
        src="/image/slie14.png" 
        alt="Qui sommes-nous" 
        width={1920} 
        height={1080} 
        className="w-full h-auto"
        priority
        />
    </div>
       
      {/* Conteneur des liens de téléchargement */}
      <div className="absolute top-[127%] right-[5%] w-[15%] max-w-[350px] md:w-[50%] lg:w-[50%] flex flex-col space-y-4">
        {/* Lien de téléchargement 1 */}
        <a
          href="/wordte/Doc12 Mode_d_Evaluation_ABC_Cultures_Roue_Competences_Auto_Evaluation_Specifique_with_Competence_Definition_Updated.pdf"
          target="_blank"
          className="w-full px-6 py-4 bg-white border-4 border-blue-600 text-blue-700 text-lg font-bold text-center rounded-lg hover:bg-blue-100 transition-all"
        >
          Mode d'évaluation
        </a>
      </div>


        {/* Flèche centrée horizontalement et en bas de l’image */}
        <div className="absolute bottom-26 left-1/2 transform -translate-x-1/2 p-2 rounded-full">
          <Fleche prevPath="/en-resumer" nextPath="/decouverte-et-inclusion"/>
        </div>
        </>
  );
}