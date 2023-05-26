import { Link, useOutletContext } from "react-router-dom";
import "./Home.css";
import RandomQuote from "../../components/RandomQuote/RandomQuote";
import { useEffect } from "react";
import { accessLocalStorage } from "../../Utilities/LocalStorage";

const Home = () => {
  const [, setUserAuth] = useOutletContext();
  useEffect(() => {
    setUserAuth(false);
    accessLocalStorage('auth-tokken', 'save', null);
    accessLocalStorage('signup-success', 'save', null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="home">
      <RandomQuote />
      <p className="message">
        <span>
          <Link className="sign-up" to="signup">
            Sign up
          </Link>
        </span>{" "}
        and get started by creating your own quotes.
      </p>
    </div>
  );
};

export default Home;
