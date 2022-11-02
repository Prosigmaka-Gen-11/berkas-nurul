import { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [userData, setUserData] = useState(function () {
    const savedUserData = localStorage.getItem("userData");

    if (savedUserData) {
      const parsedUserData = JSON.parse(savedUserData);
      return parsedUserData;
    } else {
      return {};
    }
  });

  const [token, setToken] = useState(function () {
    const savedToken = localStorage.getItem("token");
    return savedToken ?? null;
  });

  //kondisi udah login atau belum
  const isLogin = token != null;

  //fungsi setelah login biar datanya kesimpan
  function handleAfterLogin(data) {
    setUserData(data);
    setToken(data.token);
    localStorage.setItem("userData", JSON.stringify(data));
    localStorage.setItem("token", data.token);
  }

  //fungsi logout
  function logout() {
    localStorage.removeItem("userData");
    localStorage.removeItem("token");
    setUserData({});
    setToken(null);
  }
  return (
    <AuthContext.Provider
      value={{
        userData,
        setUserData,
        token,
        setToken,
        isLogin,
        handleAfterLogin,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
