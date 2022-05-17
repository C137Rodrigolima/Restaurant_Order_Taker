import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const localToken = JSON.parse(localStorage.getItem("auth-token-R_O_T"));
  const [token, setToken] = useState(localToken);

  function persistToken(authToken) {
    setToken(authToken);
    localStorage.setItem("auth-token-R_O_T", JSON.stringify(authToken));
  }

  useEffect(() => {
    if(localToken){
      setToken(localToken);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ token, persistToken }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;