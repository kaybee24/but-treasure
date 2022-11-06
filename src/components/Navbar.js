import { Link } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
    return (
        <nav className='navbar'>
            <Link to="/" className='navbar-link'>Home</Link>
            <Link to="/about" className='navbar-link'>About</Link>
            <Link to="/products" className='navbar-link'>Products</Link>
        </nav>
    )
}
