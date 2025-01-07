import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-white">Dashbord</Link>
        </li>
        <li>
          <Link to="/Weather" className="text-white">Météo</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
