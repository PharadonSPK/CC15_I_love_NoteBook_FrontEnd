import { BsFillBasketFill } from "react-icons/bs";
import "./card.css";

const Card = ({ img, title, prevPrice, newPrice, onClick, productId }) => {
  return (
    <>
      <section
        className="card"
        onClick={() => {
          onClick(productId);
        }}
      >
        <div className="item">
          <img src={img} alt={title} className="card-img" />
          <div className="card-details">
            <div>
              <h3 className="card-title">{title}</h3>
              <div className="price">
                {prevPrice} <span>{newPrice}</span>
                <BsFillBasketFill className="bag-icon" />
              </div>
            </div>
            {/* <h3 className="card-title">{title}</h3>
            <section className="card-price">
              <div className="price">
                <del>{prevPrice}</del> {newPrice}
              </div>
              <div className="bag">
                <BsFillBasketFill className="bag-icon" />
              </div>
            </section> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;
