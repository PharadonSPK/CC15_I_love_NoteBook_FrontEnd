import Button from "../components/Button";
import "./Recommended.css";
// import myImage from "../myImage.jpg";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        {/* <img className="centered-image" src={myImage} alt="My Image" /> */}
        <h2 className="recommended-title">Recommended</h2>
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
