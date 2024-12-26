import './Navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import cart from '../../assets/add-cart_.png';
import { useContext, useState } from 'react';
import { StoreContext } from '../context/StoreContext';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className="navbar">
      <Link to="/">
        <img src={logo} alt="logo" className="logo" />
      </Link>

      <div className="navbar-text">
        <h3>Alexa <br />Book Point</h3>
      </div>

      <ul className="navbar-menu">
        <Link to="/" onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
        <Link to="/aboutus" onClick={() => setMenu("about-us")} className={menu === "about-us" ? "active" : ""}>About us</Link>
        <Link to="/usedbooks" onClick={() => setMenu("used-books")} className={menu === "used-books" ? "active" : ""}>Used Books</Link>
        <Link 
         to="/#book-display" 
         onClick={() => setMenu("new-books")} 
         className={menu === "new-books" ? "active" : ""}
         >
          New Books
        </Link>

     
      </ul>

      <Link to="/cart">
        <div className="navbar-right">
          <img src={cart} alt="" className="cart-icon" />
          <h4 className="cart-text">Check Cart</h4>
          <div className="cart-notify">
            <div className={getTotalCartAmount() === 0 ? "" : "notification"}></div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
