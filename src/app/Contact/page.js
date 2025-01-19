"use client";

import React, { useState } from "react";
import axios from "axios";
import emailjs from "emailjs-com";

const Page = () => {
  const [error, setError] = useState(""); // Gestion des erreurs
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  // Fonction pour gérer l'envoi du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, phone, email, message } = formData;

    // Affichage des données du formulaire avant l'envoi
    console.log("Envoi du formulaire avec les données : ", formData);

    // Envoi du formulaire avec EmailJS
    emailjs.send(
      "service_6kjuqof", // Utilise le Service ID que tu as créé
      "template_tahney6", // Utilise le Template ID que tu as créé
      {
        from_name: name,
        from_phone: phone,
        from_email: email,
        message: message,
      },
      "Sx2z4zep43LaO3RSL" // Utilise ton User ID
    )
      .then(
        (response) => {
          // Affichage de la réponse en cas de succès
          console.log("Email envoyé avec succès : ", response);
          alert("Message envoyé avec succès !");
        },
        (err) => {
          // Log des erreurs retournées par EmailJS
          console.error("Erreur lors de l'envoi de l'email : ", err);
          setError("Une erreur est survenue, veuillez réessayer.");
        }
      );
  };

  // Gérer les changements dans les champs du formulaire
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Contenu principal */}
      <div className="max-w-7xl mx-auto p-8 pt-20">
        {/* Titre principal */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-semibold text-[#FF6347]">Prendre contact</h1>
          <p className="mt-2 text-lg text-[#333]">Une question ? Je suis là pour vous aider !</p>
        </div>

        {/* Conteneur pour l'adresse et le formulaire */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Adresse */}
          <div className="bg-[#f7f7f7] text-[#333] p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Adresse</h3>
            <p>adresse a mettre</p>
            <div className="mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=... [Your Google Map URL]"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
            <p className="mt-4"><strong>Téléphone:</strong> 06.38.90.28.10</p>
          </div>

          {/* Formulaire de contact */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-[#FF6347] mb-4">Envoyer un message</h3>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name" className="block text-sm font-semibold text-[#333]">
                Nom *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input mb-4 p-3 rounded-lg border-2 border-[#FF6347] focus:outline-none focus:ring-2 focus:ring-[#FF6347] w-full"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label htmlFor="phone" className="block text-sm font-semibold text-[#333]">
                Téléphone *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="form-input mb-4 p-3 rounded-lg border-2 border-[#FF6347] focus:outline-none focus:ring-2 focus:ring-[#FF6347] w-full"
                value={formData.phone}
                onChange={handleChange}
                required
              />

              <label htmlFor="email" className="block text-sm font-semibold text-[#333]">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input mb-4 p-3 rounded-lg border-2 border-[#FF6347] focus:outline-none focus:ring-2 focus:ring-[#FF6347] w-full"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label htmlFor="message" className="block text-sm font-semibold text-[#333]">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                className="form-input mb-4 p-3 rounded-lg border-2 border-[#FF6347] focus:outline-none focus:ring-2 focus:ring-[#FF6347] w-full"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

              <button
                type="submit"
                className="w-full py-3 px-6 bg-[#FF6347] text-white font-bold uppercase rounded-lg hover:bg-[#FF4500]"
              >
                Envoyer
              </button>
            </form>

            {error && <p className="text-red-500">{error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
