import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-white">Page 1</Link>
        </li>
        <li>
          <Link to="/usercard" className="text-white">Page 2</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
