import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaHouseLock } from "react-icons/fa6";
import { BsDoorOpenFill } from "react-icons/bs";
import { IoMdReverseCamera } from "react-icons/io";
import "./Nav.css";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../hooks/use-auth.js";

const Nav = ({ handleInputChange, query }) => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  return (
    <nav>
      <div className="nav-container">
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your search Notebook."
        />
      </div>
      <div className="profile-container">
        <a href="">
          <AiOutlineShoppingCart className="nav-icons" onClick={() => {}} />
        </a>

        <a href="">
          <FaHouseLock
            className="nav-icons"
            onClick={() => {
              navigate("/login");
            }}
          />
        </a>
        <a href="">
          <IoMdReverseCamera
            className="nav-icons"
            onClick={() => {
              navigate("/register");
            }}
          />
        </a>
        <a href="">
          <BsDoorOpenFill className="nav-icons" onClick={logout} />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
