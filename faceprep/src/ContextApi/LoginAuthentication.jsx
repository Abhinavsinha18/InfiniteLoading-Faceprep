import { createContext, useState } from "react";

export const LoginAuthentication = createContext();

const LoginContext = ({ children }) => {
  const [isLoginAuth, setLoginAuth] = useState(
    JSON.parse(sessionStorage.getItem("isLoginAuth"))
  );
  const ToggleLoginauth = () => {
    setLoginAuth((e) => {
      sessionStorage.setItem("isLoginAuth", !e);
      return !e;
    });
  };
  return (
    <LoginAuthentication.Provider value={{ isLoginAuth, ToggleLoginauth }}>
      {children}
    </LoginAuthentication.Provider>
  );
};
export default LoginContext;
