import Link from "next/link";

const Breadcrumbs = ({ items }) => {
  return (
    <nav className="text-sm text-gray-600 mt-2 ml-4">
      <ul className="flex items-center space-x-2">
        {items.map((item, index) => (
          <li key={item.path} className="flex items-center">
            {index > 0 && <span className="mx-2">/</span>}
            <Link href={item.path} className="text-blue-600 hover:underline">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
