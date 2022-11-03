import { useDispatch, useSelector } from "react-redux";
import { logout } from "./authSlice";

export default function Home() {
  const authSlice = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Ini Home</h1>
      <br /> <br />
      <h2> Welcome to,</h2>
      <p>Ini token anda: </p>
      <br />
      <br />
      <button>Logout</button>
    </>
  );
}
