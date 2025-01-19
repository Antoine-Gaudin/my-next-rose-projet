"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useRouter } from "next/navigation"; // Utilisation de useRouter pour la navigation
import { FaArrowLeft, FaShoppingCart } from 'react-icons/fa'; // Importation des icônes

const Page = () => {
  const [sousCategorie, setSousCategorie] = useState(null); // Stocke les informations de la sous-catégorie
  const [produits, setProduits] = useState([]); // Stocke les produits associés
  const [error, setError] = useState(""); // Gestion des erreurs
  const { documentid } = useParams(); // Récupère le documentId de la sous-catégorie dans l'URL
  const router = useRouter(); // Initialisation du router pour la redirection

  useEffect(() => {
    const fetchSousCategorieDetails = async () => {
      try {
        if (documentid) {
          // Effectuer la requête pour récupérer les détails de la sous-catégorie avec produits
          const response = await axios.get(
            `https://my-rose-projet.onrender.com/api/souscategories/${documentid}?populate=produits`
          );

          // Affichage en console des données de la sous-catégorie
          console.log("Sous-catégorie reçue :", response.data.data);

          // Sauvegarder les données de la sous-catégorie dans l'état
          setSousCategorie(response.data.data || {});
          setProduits(response.data.data?.produits || []); // Assurez-vous de bien récupérer les produits
        }
      } catch (err) {
        console.error("Erreur lors du chargement de la sous-catégorie :", err);
        setError("Impossible de charger les produits de la sous-catégorie.");
      }
    };

    // Appeler la fonction pour récupérer les détails de la sous-catégorie
    fetchSousCategorieDetails();
  }, [documentid]);

  // Fonction de redirection vers la page produit
  const handleProductClick = (productId) => {
    // Rediriger vers la page de produit en utilisant l'ID du produit
    router.push(`/ficheproduit/${productId}`);
  };

  // Affichage des informations de la sous-catégorie ou de l'erreur
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-4">
      {/* Partie en haut : Flèche retour avec texte "Retour en arrière" dans le même bouton */}
      <button
        onClick={() => router.back()} // Retour à la page précédente
        className="flex items-center p-2 m-2 mb-4 bg-gray-200 rounded-full hover:bg-gray-300"
      >
        <FaArrowLeft className="text-lg mr-2" />
        <span className="text-lg font-semibold">Retour en arrière</span>
      </button>
  
      {sousCategorie ? (
        <>
          {/* Affichage du titre de la sous-catégorie */}
          <h1 className="text-2xl font-bold mb-4">{sousCategorie.nom}</h1>
  
          {/* Texte centré "Choisissez votre Objet" */}
          <div className="text-center mt-8">
            <h2 className="text-xl font-semibold">Choisissez votre Objet</h2>
            <p className="text-red-500 mt-2">Commande via la page de contact</p>
          </div>
  
          {/* Affichage des produits associés à la sous-catégorie */}
          <div className="mt-4">
            <div className="flex flex-wrap gap-4 justify-center">
              {produits.map((produit) => (
                <div
                  key={produit.id}
                  className="flex flex-col items-center p-4 border rounded-lg shadow hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleProductClick(produit.documentId)} // Appeler la fonction de redirection
                  style={{ maxWidth: "285px" }} // Fixe la largeur maximale des cartes de produits
                >
                  <h3 className="text-lg font-semibold">{produit.nom}</h3> {/* Nom du produit */}
                  <p className="text-center">{produit.description}</p> {/* Description du produit */}
                  {produit.urlphoto && (
                    <img
                      src={`${produit.urlphoto}`} // Affichage de l'image du produit
                      alt={produit.nom}
                      className="w-[250px] h-[250px] object-cover mt-2 rounded-lg" // Taille définie de l'image
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <p>Chargement des produits...</p>
      )}
    </div>
  );
  
  
  
  
};

export default Page;
