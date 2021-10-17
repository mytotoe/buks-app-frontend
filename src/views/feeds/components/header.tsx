import { Link } from "react-router-dom"
import "./style.scss";

const Header = () => {
  return <header className="header">
    <nav className="navbar">
      <Link to="/feeds" className="nav-logo">Buks App</Link>
      <ul className="nav-menu">
        <li className="nav-item">
          Welcome Babatunde Ojo
        </li>
        <li className="nav-item">
          <Link to="/feeds" className="nav-link">Logout</Link>
        </li>
      </ul>
      <div className="hamburger">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  </header>
}

export default Header;