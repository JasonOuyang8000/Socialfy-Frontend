import { Link } from 'react-router-dom';
import './navbar.css';


const Navbar = () => (
    <nav className="navbar navbar-expand-lg shadow">
    <div className="container">
       <Link className="navbar-brand" to="/">Navbar</Link>
       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
        </button>
     
        <ul className="navbar-nav">
            <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="">Home</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="">Features</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="">Pricing</Link>
            </li>
        </ul>
    
        </div>
    </nav>
);

export default Navbar;