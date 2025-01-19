"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation"; // Importation du router pour la navigation

const Page = () => {
  const [categories, setCategories] = useState([]); // Stocke les catégories
  const [error, setError] = useState(""); // Gestion des erreurs
  const router = useRouter(); // Initialisation du router

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // Effectuer la requête pour récupérer les catégories
        const response = await axios.get(
          "https://my-rose-projet.onrender.com/api/categories"
        );

        // Affichage en console des données des catégories
        console.log("Catégories reçues :", response.data.data);  // Affiche toutes les catégories
        console.log("Données de fond de la première catégorie :", response.data.data[0]?.urlfond); // Affiche les données 'urlfond'

        // Sauvegarder les données des catégories dans l'état
        setCategories(response.data.data || []);
      } catch (err) {
        console.error("Erreur lors du chargement des catégories :", err);
        setError("Impossible de charger les catégories.");
      }
    };

    // Appeler la fonction pour récupérer les catégories au démarrage du composant
    fetchCategories();
  }, []);

  // Affichage en console de toutes les catégories à chaque rendu
  console.log("Catégories dans l'état :", categories);  

  // Fonction pour rediriger vers la sous-catégorie
  const handleCategoryClick = (documentId) => {
    router.push(`../souscategorie/${documentId}`); // Redirection vers la page dynamique
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Catégories</h1>
                {/* Texte centré "Choisissez votre Objet" */}
                <div className="text-center mt-8">
            <h2 className="text-xl font-semibold">Choississez 1 objet de chaque catégorie pour constituer une box</h2>
            <p className="text-red-500 mt-2">Commande via la page de contact</p>
          </div>
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((categorie) => (
          <div
            key={categorie.id}
            className="p-4 rounded-lg hover:cursor-pointer"  // Correction de l'erreur 'hover: cursor-pointer'
            onClick={() => handleCategoryClick(categorie.documentId)}  // Lancer la redirection au clic sur l'image
          >
            {categorie.urlfond && (
              <img
                src={categorie.urlfond}  // Utilisation du champ `urlfond` pour afficher l'image
                alt={categorie.nom}
                className="w-full h-auto mt-2"  // Enlever 'rounded-lg' et les autres bordures
                style={{ border: 'none' }}  // Assurer qu'aucune bordure n'est appliquée
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
