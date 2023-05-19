import { Link, useLocation, useParams } from "react-router-dom";
import "./NavBar.css";

const NavBar = ({ userAuth }) => {
  const location = useLocation();
  const path = useParams();
  return (
    <nav className="navbar">
      {userAuth ? (
        <h2>
          <Link className="works" to={`/user/${path.userId}`}>
            Magic Quote<br></br> Generator
          </Link>
        </h2>
      ) : (
        <h2>
          <Link className="works" to="/">
            Magic Quote<br></br> Generator
          </Link>
        </h2>
      )}
      {(location.pathname === "/" || location.pathname === "/signup") && (
        <span>
          <Link className="login" to="/login">
            Log in
          </Link>
        </span>
      )}
      {userAuth && (
        <span>
          <Link className="login" to="/">
            Log out
          </Link>
        </span>
      )}
    </nav>
  );
};

export default NavBar;
