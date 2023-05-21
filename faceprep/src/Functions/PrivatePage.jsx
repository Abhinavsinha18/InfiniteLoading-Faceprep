import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { LoginAuthentication } from "../ContextApi/LoginAuthentication";
const Private = ({ children }) => {
  const { isLoginAuth } = useContext(LoginAuthentication);
  if (isLoginAuth) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
};

export default Private;
