import Button from "../components/Button";
import "./Recommended.css";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
// import myImage from "../myImage.jpg";

const Recommended = ({ handleClick }) => {
  // handleClickเป็นฟังก์ชั่นของonClick เมื่อผู้ใช้คลิกelement
  const { query, setQuery } = useContext(CartContext);

  return (
    <>
      <div>
        <div className="flex items-center gap-[10px]">
          <h2 className="recommended-title">Recommended</h2>
          <input
            type="text"
            className="h-[20px] "
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </div>
        {/* <input
          className="search-input ml-[1000px] pt-[-100px]"
          type="text"
          placeholder="Enter your search Notebook."
        /> */}
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="Acer" title="Acer" />
          <Button onClickHandler={handleClick} value="Dell" title="Dell" />
          <Button onClickHandler={handleClick} value="Lenovo" title="Lenovo" />
          <Button
            onClickHandler={handleClick}
            value="Macbook"
            title="Macbook"
          />
        </div>
      </div>
    </>
  );
};

export default Recommended;
