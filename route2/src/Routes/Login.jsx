import axios from "axios";
import { useContext } from "react";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function Login() {
  const [state, dispatch] = useContext(AuthContext);
  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();

  const loginUser = async () => {
    axios({
      url: "https://reqres.in/api/login",
      method: "POST",
      data: {
        email: "eve.holt@reqres.in",
        password: "cityslicka"
      }
    })
      .then((res) => {
        alert("success");
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: res.data.token
        });
        // on success move to users
        const redirect = searchParams.get("redirectTo");
        if (redirect) {
          navigate(redirect);
        } else {
          navigate("/users");
        }
      })
      .catch((err) => {
        alert("failure");
      });
  };

  if (state.isAuth) {
    // redirect user to dashboard
    return <Navigate to="/" />;
  }

  return (
    <>
      <h2> Login</h2>
      <button onClick={loginUser}>Login</button>
    </>
  );
}
export default Login;
