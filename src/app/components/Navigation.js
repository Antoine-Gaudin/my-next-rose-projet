// components/Navbar.js
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-[#C29D6B] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Link href="/">ABC Cultures</Link>
        </div>
        <div className="flex space-x-4">
          <Link  href="/#header1" className="text-white hover:text-gray-300">
            Bienvenue dans notre univers
          </Link>
          <Link href="/Box-culturelles" className="text-white hover:text-gray-300">
            Une pédagogie de l'objet
          </Link>
          <Link href="/articles" className="text-white hover:text-gray-300">
            Articles
          </Link>
          <Link href="/Contact" className="text-white hover:text-gray-300">
            Contact
          </Link>

        </div>
      </div>
    </nav>
  );
}

