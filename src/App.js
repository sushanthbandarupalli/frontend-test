import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import AllBikes from "./components/AllBikes";
import Register from "./components/Register";
import Login from "./components/Login";
import withTitle from "./components/withTitle";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
import Orders from "./components/Orders";

const HomeWithTitle = withTitle(HomePage, "Home - BikersGarage");
const LoginWithTitle = withTitle(Login, "Login");
const RegisterWithTitle = withTitle(Register, "Register");

function App() {
  return (
    <div className="App">
      {/* Create Navbar here  */}
      <Routes>
        <Route path="/" element={<HomeWithTitle />} />
        <Route path="/all-bikes" element={<AllBikes />} />
        <Route path="/login" element={<LoginWithTitle />} />
        <Route path="/register" element={<RegisterWithTitle />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </div>
  );
}

export default App;
