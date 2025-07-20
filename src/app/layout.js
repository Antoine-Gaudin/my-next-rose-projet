
import "./globals.css";

export const metadata = {
  title: "ABC Cultures",
  description: "ABC CULTURES : un concept où la recherche ethnographique rencontre la pédagogie ",
  icons: {
    icon: "/logocultu.png", // ← adapte si tu utilises .png ou .svg
  },
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

        {children}

        </body>
    </html>
  );
}
