import { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';

// Define color variables
const textColor = "text-black";
const bgColor = "bg-white";
const hoverColor = "hover:text-red-900";
const buttonBgColor = "bg-blue-500";
const buttonHoverBgColor = "hover:bg-blue-600";

const Header = () => {
  const [isLogedIn, setisLogedIn] = useState(false);

  const cartItems = useSelector((store) => store.cart.items);

  return (
     <div className={`shadow-lg ${bgColor}`}>
    <div className={` py-4 flex justify-between items-center mx-28 `}> {/* Added shadow-lg class */}
      <div className="flex items-center">
        <img className="w-12" src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-logo.png" alt="Swiggy Logo" />
      </div>
      <div className="flex gap-10 items-center">
        <ul className={`flex space-x-4 ${textColor}`}>
          <li><Link to="/" className={`${hoverColor}`}><HomeIcon /></Link></li>
          <li><Link to="/about" className={`${hoverColor}`}><InfoIcon /></Link></li>
          <li><Link to="/contact" className={`${hoverColor}`}><ContactPageIcon /></Link></li>
          <li><Link to="/instamart" className={`${hoverColor}`}>Instamart</Link></li>
          <li>
            <Link to="/Cart" className={`${hoverColor} flex items-center`}>
              <ShoppingCartIcon />
              <span>Cart: {cartItems.length}</span>
            </Link>
          </li>
        </ul>
        <button
          className={`${buttonBgColor} ${textColor} px-4 py-2 rounded ${buttonHoverBgColor}`}
          onClick={() => setisLogedIn(!isLogedIn)}
        >
          {isLogedIn ? <PersonIcon /> : "LOG IN"}
        </button>
      </div>
    </div>
    </div>
  );
};

export default Header;
