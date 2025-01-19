"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useRouter } from "next/navigation"; // Pour récupérer le documentId du produit
import { FaArrowLeft, FaShoppingCart } from 'react-icons/fa'; // Importation des icônes

const Page = () => {
  const [produit, setProduit] = useState(null); // Produit sélectionné
  const [produitsSimilaires, setProduitsSimilaires] = useState([]); // Produits aléatoires
  const [error, setError] = useState(""); // Gestion des erreurs
  const { documentid } = useParams(); // Récupère le documentId du produit
  const router = useRouter(); // Pour la navigation vers un autre produit

  useEffect(() => {
    const fetchProduitDetails = async () => {
      try {
        // Récupérer les détails du produit actuel
        const responseProduit = await axios.get(
          `https://my-rose-projet.onrender.com/api/produits/${documentid}`
        );
        setProduit(responseProduit.data.data);

        // Récupérer 3 produits aléatoires (en excluant celui en cours)
        const responseTousProduits = await axios.get(
          "https://my-rose-projet.onrender.com/api/produits"
        );

        // Exclure le produit actuel de la liste
        const produitsExclusProduitActuel = responseTousProduits.data.data.filter(
          (prod) => prod.documentId !== documentid
        );

        // Mélanger et obtenir 3 produits aléatoires
        const produitsMeles = produitsExclusProduitActuel.sort(
          () => Math.random() - 0.5
        );
        const produitsAleatoires = produitsMeles.slice(0, 3);

        setProduitsSimilaires(produitsAleatoires);
      } catch (err) {
          console.error("Erreur lors du chargement des produits :", err);
        setError("Impossible de charger le produit.");
      }
    };

    // Appel de la fonction pour récupérer les informations du produit
    fetchProduitDetails();
  }, [documentid]);

  // Affichage en cas d'erreur ou si le produit n'est pas encore chargé
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <>
      {/* Partie en haut : Flèche retour avec texte "Retour en arrière" dans le même bouton */}
      <button
        onClick={() => router.back()} // Retour à la page précédente
        className="flex items-center p-2 m-2 mb-4 bg-gray-200 rounded-full hover:bg-gray-300"
      >
        <FaArrowLeft className="text-lg mr-2" />
        <span className="text-lg font-semibold">Retour en arrière</span>
      </button>
  
      <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {produit ? (
          <>
            {/* Partie gauche : Détails du produit sélectionné */}
            <div>
              <img
                src={produit.urlphoto}
                alt={produit.nom}
                className="w-full h-[35rem] object-cover rounded-lg"
              />
              <h2 className="text-2xl font-semibold mt-4">{produit.nom}</h2>
              <p>{produit.description}</p>
  
              {/* Lien de téléchargement du PDF */}
              {produit.urlpdf && (
                <div className="mt-4">
                  <a
                    href={produit.urlpdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    Télécharger le PDF
                  </a>
                </div>
              )}
            {/* Carte "Passer votre commande" juste en dessous du PDF */}
            <div className="bg-gray-100 p-4 rounded-lg shadow-md mt-8">
              <div className="flex items-center">
                <FaShoppingCart className="text-2xl text-blue-500 mr-4" />
                <span className="text-xl font-semibold">Passer votre commande</span>
              </div>
              <p className="text-sm mt-2">Cliquez ici pour passer votre commande.</p>
              <button
                onClick={() => router.push('/Contact')} // Redirection vers la page de contact
                className="mt-4 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Passer à la commande
              </button>
            </div>
            </div>
  
  
            {/* Partie droite : Produits similaires */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Produits similaires</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {produitsSimilaires.map((produitSimilaire) => (
                  <div
                    key={produitSimilaire.id}
                    className="flex items-center p-4 border rounded-lg shadow hover:bg-gray-100 cursor-pointer"
                    onClick={() =>
                      router.push(`/ficheproduit/${produitSimilaire.documentId}`)
                    }
                    style={{
                      maxWidth: "450px", // Fixe la largeur des cartes produits similaires à 450px
                      marginBottom: "20px",
                    }}
                  >
                    <img
                      src={produitSimilaire.urlphoto}
                      alt={produitSimilaire.nom}
                      className="w-40 h-40 object-cover mr-4 rounded-lg"
                    />
                    <div>
                      <h4 className="font-semibold">{produitSimilaire.nom}</h4>
                      <p className="text-sm">{produitSimilaire.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <p>Chargement des détails du produit...</p>
        )}
      </div>
    </>
  );
  
  
};


export default Page;
