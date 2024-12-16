import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white py-4 px-6 shadow-md">
      <ul className="flex items-center justify-center space-x-8">
        <li>
          <Link
            to="/"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            Note App
          </Link>
        </li>
        <li>
          <Link
            to="/active"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            Active Notes
          </Link>
        </li>
        <li>
          <Link
            to="/archived"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            Archived Notes
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
