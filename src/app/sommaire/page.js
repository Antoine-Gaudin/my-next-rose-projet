import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/app/composant/breadcrumbs";

export default function ObjectCulturels() {

  const breadcrumbs = [
    { label: "Accueil", path: "/" },
    { label: "Sommaire", path: "/sommaire" },
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      <div className="relative w-full">
        {/* Image en arrière-plan */}
        <Image 
          src="/image/slide2.png" 
          alt="Qui sommes-nous" 
          width={1920} 
          height={1080} 
          className="w-full h-auto object-cover"
          priority
        />

        {/* Conteneur des liens positionné de manière responsive */}
        <div className="absolute top-[10vh] right-[5vw] w-[90%] max-w-[800px] md:w-[50%] lg:w-[50%] flex flex-col space-y-4">
          
          {/* Zone 2 */}
          <Link 
            href="/qui-sommes-nous" 
            className="w-full px-6 py-4 bg-white border-4 border-blue-600 text-blue-700 text-lg font-bold text-center rounded-lg hover:bg-blue-100 transition-all"
          >
            BIENVENUE DANS NOTRE UNIVERS  
            <p className="text-sm font-normal">Entrez dans l’ethnographie et sa pédagogie : L’éducation du regard</p>
          </Link>

          {/* Zone 3 */}
          <Link 
            href="/nos-objects-culturels" 
            className="w-full px-6 py-4 bg-white border-4 border-blue-600 text-blue-700 text-lg font-bold text-center rounded-lg hover:bg-blue-100 transition-all"
          >
            L’objet au cœur des besoins culturels  
            <p className="text-sm font-normal">Leurs univers et environnements aux carrefours des continents</p>
            <span className="font-bold text-sm block mt-2">CHOISISSEZ VOTRE OBJET</span>
          </Link>

          {/* Zone 4 */}
          <Link 
            href="/notre-pedagogie" 
            className="w-full px-6 py-4 bg-white border-4 border-blue-600 text-blue-700 text-lg font-bold text-center rounded-lg hover:bg-blue-100 transition-all"
          >
            Pourquoi une pédagogie de l’objet ? Nos objectifs  
            <p className="text-sm font-normal">Aides et supports pédagogiques</p>
            <span className="font-bold text-sm block mt-2">La culture au Carré</span>
          </Link>

          {/* Zone 5 */}
          <Link 
            href="/en-resumer" 
            className="w-full px-6 py-4 bg-white border-4 border-blue-600 text-blue-700 text-lg font-bold text-center rounded-lg hover:bg-blue-100 transition-all"
          >
            En Résumé :  
            <p className="text-sm font-normal">Pour l’ACQUISITION DE quelles compétences ?</p>
            <span className="font-bold text-sm block mt-2">Pour un enseignement multiculturel</span>
          </Link>

          {/* Zone 6 */}
          <Link 
            href="/Contact" 
            className="w-full px-6 py-4 bg-white border-4 border-blue-600 text-blue-700 text-lg font-bold text-center rounded-lg hover:bg-blue-100 transition-all"
          >
            Où et comment nous CONTACTER
          </Link>
        </div>
      </div>
    </>
  );
}
