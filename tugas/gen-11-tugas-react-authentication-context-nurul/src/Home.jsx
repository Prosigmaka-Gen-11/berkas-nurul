import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

function Home() {
  const navigate = useNavigate();
  const { userData, token, logout } = useContext(AuthContext);

  function handleLogout() {
    logout();
    // navigate("/login");
  }

  return (
    <>
      <h1>Home</h1>
      <Link to="/post"> Go to Post</Link>
      <br /> <br />
      <Link to="/comment">Go to Comment</Link>
      <h2>Welcome {userData.firstName} </h2>
      <p>Ini token anda: {token} </p>
      <br /> <br />
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}

export default Home;
