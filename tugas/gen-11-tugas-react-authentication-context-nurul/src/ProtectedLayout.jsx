import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

function ProtectedLayout() {
  const { isLogin } = useContext(AuthContext);
  console.log(isLogin);

  if (isLogin) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
}
export default ProtectedLayout;
