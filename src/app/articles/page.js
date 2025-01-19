"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation"; // Pour gérer la redirection

const Articles = () => {
  const [articles, setArticles] = useState([]); // Stocke les articles
  const [error, setError] = useState(""); // Gère les erreurs
  const router = useRouter(); // Pour la redirection

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        // Récupérer les articles depuis l'API
        const response = await axios.get("https://my-rose-projet.onrender.com/api/articles");
        console.log("Articles reçus :", response.data.data);
        setArticles(response.data.data);
      } catch (err) {
        console.error("Erreur lors du chargement des articles :", err);
        setError("Impossible de charger les articles.");
      }
    };

    // Appeler la fonction pour récupérer les articles
    fetchArticles();
  }, []);

  // Vérification de l'erreur
  if (error) return <p className="text-red-500">{error}</p>;

  // Fonction de redirection ou d'affichage du PDF
  const handleArticleClick = (article) => {
    if (article.urlpdf) {
      // Si le PDF existe, on l'affiche
      window.open(article.urlpdf, "_blank");
    } else {
      // Sinon, redirection vers la page article/[documentid]/page.js
      router.push(`/article/${article.documentId}`);
    }
  };

  // Fonction pour limiter la description à 50 caractères
  const limitDescription = (description) => {
    return description.length > 50 ? description.slice(0, 50) + "..." : description;
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Articles</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div
            key={article.id}
            className="p-4 border rounded-lg shadow hover:bg-gray-100 cursor-pointer"
            onClick={() => handleArticleClick(article)}
            style={{ maxWidth: "350px" }} // Redimensionner les cartes pour la responsivité
          >
            <h3 className="text-lg font-semibold">{article.title}</h3>
            <p>{limitDescription(article.description)}</p> {/* Limiter la description à 50 caractères */}
            {/* Affichage de l'image de l'article s'il y en a une */}
            {article.urlphoto && (
              <img
                src={article.urlphoto}
                alt={article.title}
                className="w-full h-48 object-cover mt-2 rounded-lg" // Taille de l'image définie
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
