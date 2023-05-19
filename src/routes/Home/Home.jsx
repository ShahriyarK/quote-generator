import { Link, useOutletContext } from "react-router-dom";
import "./Home.css";
import RandomQuote from "../../components/RandomQuote/RandomQuote";
import { useEffect } from "react";
const Home = () => {
  const [, setUserAuth] = useOutletContext();
  useEffect(() => {
    setUserAuth(false);
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
