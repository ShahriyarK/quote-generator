import {
  Outlet,
  useOutletContext,
  Navigate,
  useParams,
} from "react-router-dom";
import { accessLocalStorage } from "../../Utilities/LocalStorage";

const ProtectedRoute = () => {
  const [userAuth] = useOutletContext();
  const params = useParams();
  const authTokken = accessLocalStorage("auth-tokken", "fetch");
  
  return (
    <>
      {authTokken === params.userId || userAuth ? (
        <Outlet />
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default ProtectedRoute;
