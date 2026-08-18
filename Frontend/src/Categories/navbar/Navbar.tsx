import { Link } from "react-router-dom";
import { User } from "phosphor-react";
import { ShoppingCartSimple, ListDashes } from "phosphor-react";
import fashionLogos from "../../assets/fashionLogos.jpg";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="leftPane">
          <Link to={"/"}>
            <img className="logo" src={fashionLogos} alt="business logo" />
          </Link>
        </div>
        <div className="rightPane">
          <div className="profile"></div>
          <Link to={"/profile"}>
            <User size={20} />
          </Link>
          <div className="cart">
            <Link to={"/cart"}>
              <ShoppingCartSimple size={20} />
            </Link>
          </div>
          <div className="menu">
            <Link to={"/menu"}>
              <ListDashes size={20} />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
