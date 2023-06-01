import { Link, useLocation, useParams } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const location = useLocation();
  const path = useParams();
  return (
    <nav className="navbar">
      {location.pathname.includes('user') ? (
        <h2>
          <Link className="logo" to={`/user/${path.userId}`}>
            Magic Quote<br></br> Generator
          </Link>
        </h2>
      ) : (
        <h2>
          <Link className="logo" to="/">
            Magic Quote<br></br> Generator
          </Link>
        </h2>
      )}
      {(location.pathname === "/" || location.pathname === "/signup") && (
        <span>
          <Link className="login" to="/login">
            login
          </Link>
        </span>
      )}
      {location.pathname.includes('user') && (
        <span>
          <Link className="login" to="/">
            logout
          </Link>
        </span>
      )}
    </nav>
  );
};

export default NavBar;
