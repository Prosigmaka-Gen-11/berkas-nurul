import axios from "axios";
import { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

function Login() {
  const navigate = useNavigate();
  const { handleAfterLogin, isLogin } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(evt) {
    evt.preventDefault();

    axios
      .post("https://dummyjson.com/auth/login", {
        username,
        password,
      })
      .then((hasil) => {
        console.log(hasil.data);
        handleAfterLogin(hasil.data);

        // navigate("/");
      })
      .catch((er) => {
        console.log(er.response);
        alert(er.message);
      });
  }

  if (isLogin) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <center>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <label>
            Username:
            <input
              type="text"
              required
              value={username}
              onChange={(evt) => setUsername(evt.target.value)}
            />
          </label>
          <br /> <br />
          <label>
            Password:
            <input
              type="password"
              required
              value={password}
              onChange={(evt) => setPassword(evt.target.value)}
            />
          </label>
          <br /> <br />
          <button>Login</button>
        </form>
      </center>
    </>
  );
}

export default Login;
