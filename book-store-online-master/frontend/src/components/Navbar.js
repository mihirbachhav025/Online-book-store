import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from '../assets/bookwagon.png'

const Navbar = ({ click }) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img className="logo_image" src={logo} alt="logo"/>
        <span className="navbar__logo">Book Wagon</span>
      </div>

      <ul className="navbar__links">
        <li><input className="search_box" type="text" placeholder="Search.." /></li>
        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart <span className="cartlogo__badge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li className="navbar__shop">
          <Link className="shop__link" to="/">Shop</Link>
        </li>
      </ul>

      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
