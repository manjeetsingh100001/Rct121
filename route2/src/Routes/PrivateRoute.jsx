import { useContext } from "react";
import { Navigate, Route } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function PrivateRoute({ children, to }) {
  const [state] = useContext(AuthContext);

  if (state.isAuth) {
    return children;
  }

  return <Navigate to={to || "/login"} />;
}

export default PrivateRoute;