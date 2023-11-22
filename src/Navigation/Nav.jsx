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
    <nav className="top-0 absolute py-10 w-full ">
      <div className="nav-container">
        {/* <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your search Notebook."
        /> */}
        {/* <button
          className="button-input"
          onClick={handleInputChange}
          value={query}
        >
          ok
        </button> */}
      </div>
      <div className="w-full">
        <div className="profile-container flex translate- gap-5 w-ful justify-end">
          <AiOutlineShoppingCart
            className="display text-2xl"
            onClick={() => {
              navigate("/ProfilePage");
            }}
          />

          <FaHouseLock
            className="display text-2xl"
            onClick={() => {
              navigate("/login");
            }}
          />

          <a href="">
            <IoMdReverseCamera
              className="display text-2xl"
              onClick={() => {
                navigate("/register");
              }}
            />
          </a>
          <a href="">
            <BsDoorOpenFill className="display text-2xl" onClick={logout} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
