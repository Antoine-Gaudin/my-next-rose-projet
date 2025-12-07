import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative w-full bg-white !important">
      {/* Image en arrière-plan */}
      <Image 
        src="/image/sli1v2.png" 
        alt="Slider Image" 
        width={1920} 
        height={1080} 
        className="w-full h-auto"
        priority
      />

      {/* Conteneur des liens aligné à droite */}
      <div className="absolute top-6 right-6 bg-blue-700 bg-opacity-90 px-4 py-2 rounded-lg">
        <div className="flex gap-4">
          <Link 
            href="/qui-sommes-nous"
            className="px-6 py-3 bg-blue-600 border-4 border-yellow-400 text-yellow-300 font-bold text-lg rounded-lg hover:bg-blue-700 transition-all text-center"
          >
            QUI SOMMES-NOUS ?
          </Link>
          <Link 
            href="/nos-objects-culturels"
            className="px-6 py-3 bg-blue-600 border-4 border-yellow-400 text-yellow-300 font-bold text-lg rounded-lg hover:bg-blue-700 transition-all text-center"
          >
            NOS OBJETS CULTURELS
          </Link>
          <Link 
            href="/notre-pedagogie"
            className="px-6 py-3 bg-blue-600 border-4 border-yellow-400 text-yellow-300 font-bold text-lg rounded-lg hover:bg-blue-700 transition-all text-center"
          >
            NOTRE PÉDAGOGIE
          </Link>
          <Link 
            href="/Contact"
            className="px-6 py-3 bg-blue-600 border-4 border-yellow-400 text-yellow-300 font-bold text-lg rounded-lg hover:bg-blue-700 transition-all text-center"
          >
            CONTACTS
          </Link>
        </div>
      </div>

      {/* Zone 6 - Ajustée plus haut et à droite avec plus de largeur */}
      <div className="absolute top-[25%] right-[9%]">
        <Link 
          href="/sommaire"
          className="px-16 py-4 bg-blue-600 border-4 border-yellow-400 text-yellow-300 font-bold text-xl rounded-lg hover:bg-blue-700 transition-all text-center"
        >
          DES OBJETS CULTURELS POUR LES ENFANTS DE 6 À 9 ANS
        </Link>
      </div>

            {/* Zone 6 - Ajustée plus haut et à droite avec plus de largeur */}
      <div className="absolute top-[53%] right-[37%]">
        <Link 
    href="https://drive.google.com/drive/folders/1h4QsXYNc7XgtxOzHm4aHd3ywXWzIdAAM?usp=drive_link"
    target="_blank"
    rel="noopener noreferrer"
          className="px-16 py-4 bg-blue-600 border-4 border-yellow-400 text-yellow-300 font-bold text-xl rounded-lg hover:bg-blue-700 transition-all text-center"
        >
          Télécharger la documentation
        </Link>
      </div>
    </div>
  );
}
