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

<div
  className="absolute top-[10%] left-[52%] w-[25%] h-[50px] transform -translate-y-[50%] -translate-x-[50%] cursor-pointer"
>
  <a
    href="/wordte/doc1 bis  exemple formation.docx"
    download
    className="block w-full h-full"
  >
    <span className="sr-only">Télécharger le document</span>
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
