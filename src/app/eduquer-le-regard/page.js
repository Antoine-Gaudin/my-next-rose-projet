import Image from "next/image";
import Link from "next/link";
import Fleche from "../composant/fleche";
import Breadcrumbs from "../composant/breadcrumbs";

const breadcrumbs = [
  { label: "Accueil", path: "/" },
  { label: "Qui somme-nous", path: "/qui-sommes-nous" },
  { label: "L'univers de l'ethographie visuelle", path: "/ethnographie-visuelle" },
  { label: "Eduquer le regard", path: "/eduquer-le-regard" },
];

export default function Pedagogie() {
  // Liste des images avec leur texte associé
  const images = [
    { src: "/image/Image2.png", text: "observer", link: "#" },
    { src: "/image/Image3.png", text: "écouter", link: "#" },
    { src: "/image/Image4.png", text: "s’interroger", link: "#" },
    { src: "/image/Image5.png", text: "réfléchir", link: "#" },
    { src: "/image/Image6.png", text: "noter : écrire et lire", link: "#" },
    { src: "/image/Image7.png", text: "énumérer : compter", link: "#" },
    { src: "/image/Image8.png", text: "apprendre imaginer, inventer", link: "#" }
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbs}/>

      {/* Image de fond */}
      <div className="w-full">
        <Image 
          src="/image/slide5.png" 
          alt="Qui sommes-nous" 
          width={1920} 
          height={1080} 
          className="w-full h-auto"
          priority
        />
      </div>

      {/* Conteneur des images Image1 et Image9 (limité en largeur et ajusté à droite) */}
      <div className="absolute top-0 left-0 w-full flex justify-between max-w-[80%] px-6 md:px-12 lg:px-20 py-6">
        <Image 
          src="/image/Image1.png" 
          alt="Image1" 
          width={180} 
          height={180} 
          className="w-[9rem] h-[9rem]"
        />
        
        <Image 
          src="/image/Image9.png" 
          alt="Image9" 
          width={180} 
          height={180} 
          className="w-[9rem] h-[9rem]"
        />
      </div>

      {/* Conteneur des avatars (encore plus bas à 75%) */}
      <div className="flex flex-col items-center justify-center w-full absolute top-[75%] transform -translate-y-1/2">
        <div className="flex justify-center items-center flex-wrap gap-8 p-6">
          {images.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <Link href={item.link}>
                <Image 
                  src={item.src} 
                  alt={item.text} 
                  width={140} 
                  height={140} 
                  className="w-32 h-32 cursor-pointer transition-transform transform hover:scale-105"
                />
              </Link>
              <div className="bg-white shadow-md px-4 py-3 rounded-lg text-blue-700 font-bold mt-3 text-lg w-48 border-4 border-blue-600">
                {item.text}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Flèche centrée en bas */}
      <div className="absolute bottom-26 left-1/2 transform -translate-x-1/2 p-2 rounded-full">
        <Fleche prevPath="/ethnographie-visuelle" />
      </div>
    </>
  );
}
