"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

const HomePage = () => {
  const [headers, setHeaders] = useState([]); // Stocke les en-têtes
  const [menus, setMenus] = useState([]); // Stocke les menus
  const [error, setError] = useState(""); // Gestion des erreurs

  useEffect(() => {
    const fetchHeaders = async () => {
      try {
        // Effectuer la requête pour récupérer les en-têtes depuis l'URL correcte
        const response = await axios.get("https://my-rose-projet.onrender.com/api/headers");

        // Affichage en console des en-têtes reçus
        console.log("En-têtes reçus :", response.data.data);

        // Trier les en-têtes en fonction de 'order' de manière croissante
        const sortedHeaders = response.data.data.sort((a, b) => a.order - b.order);

        // Sauvegarder les en-têtes triés dans l'état
        setHeaders(sortedHeaders || []);
      } catch (err) {
        console.error("Erreur lors du chargement des en-têtes :", err);
        setError("Impossible de charger les en-têtes.");
      }
    };

    // Appel de la fonction pour récupérer les en-têtes
    fetchHeaders();
  }, []);

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        // Effectuer la requête pour récupérer les menus
        const response = await axios.get("https://my-rose-projet.onrender.com/api/menus");

        // Affichage en console des menus reçus
        console.log("Menus reçus :", response.data.data);

        // Sauvegarder les données des menus dans l'état
        setMenus(response.data.data || []);
      } catch (err) {
        console.error("Erreur lors du chargement des menus :", err);
        setError("Impossible de charger les menus.");
      }
    };

    // Appel de la fonction pour récupérer les menus
    fetchMenus();
  }, []);

  useEffect(() => {
    // Si la page contient le paramètre d'ancrage "#header1", on fait défiler la page vers cet élément
    if (window.location.hash === "#header1") {
      setTimeout(() => {
        const target = document.getElementById("header1");
        if (target) {
          target.scrollIntoView({
            behavior: "smooth", // Défilement fluide
            block: "start", // Aligné au début de l'écran
            inline: "start", // Aligné au début de la ligne
          });
        }
      }, 100); // Délai de 100ms pour s'assurer que l'élément est dans le DOM
    }
  }, []);

  return (
    <>
      {/* Affichage des erreurs */}
      {error && <p className="text-red-500 text-center">{error}</p>}

      {/* Affichage de l'image headers[0] */}
      {headers[0]?.urlphoto && (
        <img
          src={headers[0].urlphoto}
          alt={`Image ${headers[0].id}`}
           
          className="w-full h-auto"
        />
      )}
<div className="mt-8 relative w-full">
  {/* Affichage de l'image en tant que fond pour la section */}
  {headers[1]?.urlphoto && (
    <img
      src={headers[1].urlphoto}
      alt={`Image ${headers[1].nom}`}
      className="w-full h-auto absolute top-0 left-0 z-0"
      id="header1" // L'image reste en arrière-plan
    />
  )}

  {/* Conteneur des menus avec un margin-top pour décaler le contenu du menu */}
  <div className="relative z-10 flex flex-wrap justify-center gap-2 pt-[6.5rem]">
    {menus
      .sort((a, b) => a.order - b.order) // Trie les menus par 'order' de manière croissante
      .map((menu) => (
        <div key={menu.id} className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
          <div className="flex items-center space-x-4 justify-start">
            {/* Affichage de l'image du menu à gauche avec padding conditionnel */}
            {menu.urlmenu && (
              <img
                src={menu.urlmenu} // Utilisation de l'URL de l'image
                alt={`Image ${menu.id}`}
                className={`w-10 h-10 object-cover rounded ${menu.lettre ? "ml-10 w-8 h-8" : "w-10 h-10"}`} // Padding conditionnel
              />
            )}

            {/* Affichage du numéro ou de la lettre */}
            {menu.numero ? (
              <h3 className="text-[#FF6347] font-semibold text-xl sm:text-2xl md:text-3xl">{menu.numero}</h3> // Taille réduite
            ) : (
              <a
              href={`#header-image-${menu.nameattribution}`}
                className="text-[#4b8bf5] hover:text-[#2c68b8] font-semibold text-lg sm:text-xl md:text-2xl"
              >
                {menu.lettre}
              </a>
            )}
          </div>
        </div>
      ))}
  </div>
</div>

{/* Affichage des autres en-têtes à partir du troisième élément */}
{headers.slice(2).map((header, index) => {
  console.log(header); // Placez le console.log ici dans la fonction de rappel
  return (
    <div key={header.id} className={`bg-white pb-6 rounded-lg ${index === 0 ? "mt-[25rem]" : "mt-[5rem]"}`}>
      {/* Affichage de l'image de l'en-tête avec un ID unique */}
      {header.urlphoto && (
        <img
          src={header.urlphoto}
          alt={`Image ${header.nom}`}
          id={`header-image-${header.nom}`} // Ajout d'un ID unique
          className="w-full h-auto"
        />
      )}
    </div>
  );
})}







    </>
  );
};

export default HomePage;
