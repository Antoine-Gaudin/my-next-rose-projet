import Link from "next/link";

const Fleche = ({ prevPath = null, nextPath = null }) => {
  return (
    <div className="flex justify-center items-center gap-4 p-4">
      {/* Flèche gauche avec texte */}
      {prevPath && (
        <Link href={prevPath} className="flex items-center gap-2 p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition px-4">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Précédent</span>
        </Link>
      )}

      {/* Flèche droite avec texte */}
      {nextPath && (
        <Link href={nextPath} className="flex items-center gap-2 p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition px-4">
          <span>Suivant</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 18L15 12L9 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      )}
    </div>
  );
};

export default Fleche;
