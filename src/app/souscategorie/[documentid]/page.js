"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useRouter } from "next/navigation"; // Utilisation de useParams pour récupérer le documentId depuis l'URL
import { FaArrowLeft, FaShoppingCart } from 'react-icons/fa'; // Importation des icônes
const Page = () => {
  const [category, setCategory] = useState(null); // Stocke la catégorie récupérée
  const [error, setError] = useState(""); // Gestion des erreurs
  const { documentid } = useParams(); // Récupère le documentId depuis l'URL
  const router = useRouter(); // Initialisation du router

  useEffect(() => {
    const fetchCategoryDetails = async () => {
      try {
        if (documentid) {
          // Effectuer la requête pour récupérer les détails de la catégorie avec sous-catégories
          const response = await axios.get(
            `https://my-rose-projet.onrender.com/api/categories/${documentid}?populate=souscategories`
          );

          // Affichage en console des données de la catégorie
          console.log("Catégorie reçue :", response.data.data);

          // Sauvegarder les données de la catégorie dans l'état
          setCategory(response.data.data || {});
        }
      } catch (err) {
        console.error("Erreur lors du chargement de la catégorie :", err);
        setError("Impossible de charger les détails de la catégorie.");
      }
    };

    // Appeler la fonction pour récupérer les détails de la catégorie
    fetchCategoryDetails();
  }, [documentid]);

  // Fonction pour rediriger vers une sous-catégorie
  const handleSousCategorieClick = (sousCategorieId) => {
    router.push(`/produit/${sousCategorieId}`); // Redirection vers la page dynamique des sous-catégories
  };

  // Affichage des informations de la catégorie ou de l'erreur
  if (error) return <p className="text-red-500">{error}</p>;

  // Tri des sous-catégories par ordre croissant
  const sortedSousCategories = category?.souscategories?.sort((a, b) => a.order - b.order) || [];

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
      {category ? (
        <>
          {/* Affichage du titre de la catégorie */}
          <h1 className="text-2xl font-bold mb-4">{category.nom}</h1>

          {/* Affichage des sous-catégories triées */}
          <div className="mt-4">
            <h2 className="text-xl font-semibold">Sous-catégories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {sortedSousCategories.map((sousCategorie) => (
                <div
                  key={sousCategorie.id}
                  className="p-4 rounded-lg hover:cursor-pointer"
                  onClick={() => handleSousCategorieClick(sousCategorie.documentId)} // Cliquer pour aller à la sous-catégorie
                >
                  {/* Affichage uniquement de l'image de fond de la sous-catégorie */}
                  {sousCategorie.urlfond && (
                    <img
                      src={sousCategorie.urlfond}  // Utilisation du champ `urlfond` pour afficher l'image
                      alt={sousCategorie.nom}
                      className="w-full h-auto mt-2 rounded-lg"
                      style={{ border: 'none' }}  // Assurer qu'aucune bordure n'est appliquée
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <p>Chargement des données de la catégorie...</p>
      )}
    </div>
  );
};

export default Page;
