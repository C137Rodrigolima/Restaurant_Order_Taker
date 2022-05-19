import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const localToken = JSON.parse(localStorage.getItem("auth-token-R_O_T"));
  const admLocalToken = JSON.parse(localStorage.getItem("ADM_auth-token-R_O_T"));
  const [token, setToken] = useState(localToken);
  const [admToken, setAdmToken] = useState(admLocalToken);

  function persistToken(authToken) {
    setToken(authToken);
    localStorage.setItem("auth-token-R_O_T", JSON.stringify(authToken));
  }
  function persistAdmToken(authToken) {
    setAdmToken(authToken);
    localStorage.setItem("ADM_auth-token-R_O_T", JSON.stringify(authToken));
  }

  function signOut(){
    setToken(null);
    setAdmToken(null);
    localStorage.removeItem("auth-token-R_O_T");
    localStorage.removeItem("ADM_auth-token-R_O_T");
  }

  useEffect(() => {
    if(localToken){
      setToken(localToken);
    }
    if(admLocalToken){
      setAdmToken(admLocalToken);
    }
  }, [localToken, admLocalToken]);

  return (
    <AuthContext.Provider value={{ token, admToken, persistToken, persistAdmToken, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;