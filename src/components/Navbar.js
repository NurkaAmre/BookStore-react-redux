import { NavLink } from 'react-router-dom';

const Navbar = () => (
        <header>
            <nav>
                <NavLink to="/">Bookstore CMS</NavLink>
                <NavLink to="/">Books</NavLink>
                <NavLink to="/categories">Categories</NavLink>
            </nav>
        </header>
);

export default Navbar;
