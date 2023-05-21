import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Loginpage from "./Login";
import Private from "../Functions/PrivatePage";
const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Loginpage />}></Route>
      <Route path="/home" element={<Private><Home/></Private>}/>
    </Routes>
  );
};
export default Routing;
