import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedLayout() {
  const authState = useSelector((state) => state.auth);

  if (authState.isLogin) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
}
