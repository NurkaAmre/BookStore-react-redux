import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <header className="top-section d-flex">
    <nav>
      <NavLink to="/" className="logo">Bookstore CMS</NavLink>
      <NavLink to="/" className="d-flex arip">Books</NavLink>
      <NavLink to="/categories" className="d-flex arip">Categories</NavLink>
    </nav>
  </header>
);

export default Navbar;
