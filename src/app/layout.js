import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import "./globals.css";

export const metadata = {
  title: "Rose marie",
  description: "Site avant premier jet ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        {/* Importation de la police Tangerine */}
        <link
          href="https://fonts.googleapis.com/css2?family=Tangerine&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navigation/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
