import Image from "next/image";
import Fleche from "../composant/fleche";
import Breadcrumbs from "../composant/breadcrumbs";

export default function ObjectCulturels() {

  const breadcrumbs = [
    { label: "Accueil", path: "/" },
    { label: "Contact", path: "/Contact" },

  ];

  return (
    <>
    <Breadcrumbs items={breadcrumbs}/>
      <div className="relative w-full">
        {/* Image en arrière-plan */}
        <Image 
          src="/image/slidev216.png" 
          alt="Qui sommes-nous" 
          width={1920} 
          height={1080} 
          className="w-full h-auto"
          priority
        />

      {/* Conteneur des liens de téléchargement */}
      <div className="absolute top-[80%] right-[10%] w-[15%] max-w-[350px] md:w-[50%] lg:w-[50%] flex flex-col space-y-4">
        {/* Lien de téléchargement 1 */}
        <a
          href="/wordte/doc1_Formation_ABC_Cultures_Activites.pdf"
          target="_blank"
          className="w-full px-6 py-4 bg-white border-4 border-blue-600 text-blue-700 text-lg font-bold text-center rounded-lg hover:bg-blue-100 transition-all"
        >
          Activités de formations
        </a>

        {/* Lien de téléchargement 2 */}
        <a
          href="/wordte/Doc1 bis exemple formation.pdf"
          target="_blank"
          className="w-full px-6 py-4 bg-white border-4 border-blue-600 text-blue-700 text-lg font-bold text-center rounded-lg hover:bg-blue-100 transition-all"
        >
          Fiches pédagogiques
        </a>
      </div>

        {/* Lien centré verticalement sur l'image et positionné à droite */}
        <div className="absolute top-[40%] right-[12%] transform -translate-y-[40%]">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=abc.cultures76@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-bold underline text-lg"
          >
            abc.cultures76@gmail.com
          </a>
        </div>

        {/* Flèche centrée en bas */}
        <div className="absolute bottom-26 left-1/2 transform -translate-x-1/2 p-2 rounded-full">
          <Fleche prevPath="/" />
        </div>
      </div>
    </>
  );
}
