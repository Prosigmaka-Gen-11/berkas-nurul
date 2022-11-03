import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { handleAfterLogin } from "./AuthSlice";
import { useState } from "react";

export default function Login() {
  const authSlice = useSelector((state) => state.auth);
  const dispatch = useDispatch();

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
        dispatch(handleAfterLogin(hasil.data));
      })
      .catch((er) => {
        console.log(er.response);
        alert(er.message);
      });
  }

  if (authSlice.isLogin) {
    return <Navigate to="/" />;
  }

  return (
    <>
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
    </>
  );
}
