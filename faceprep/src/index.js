import ReactDOM from "react-dom/client";
import App from "./App";
import LoginContext from "./ContextApi/LoginAuthentication";
import { BrowserRouter  } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <LoginContext>
      <BrowserRouter>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </BrowserRouter>
    </LoginContext>
);


