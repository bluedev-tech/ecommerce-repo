import "./Categories/homepage/HomePageDesign.css";
import HomePage from "./Categories/homepage/HomePage";
import Profile from "./pages/profile/Profile";
import Menu from "./pages/menu/Menu";
import Cart from "./pages/cart/Cart";
import Navbar from "./Categories/navbar/Navbar";
import NotFound from "./pages/not-found/NotFound";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
