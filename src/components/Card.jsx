import { useCart } from "../contexts/CartContext";
import "./card.css"; //import จะนำเข้าไฟล์ CSS และให้โค้ด JavaScript ในไฟล์ปัจจุบันสามารถใช้สไตล์ที่ถูกกำหนดใน "card.css" ได้
// import { CartContext } from "../contexts/CartContext";
// import { useContext } from "react";

// const { addToCart, cart } = useContext(CartContext);

// const cartItemCount = cart[Card];
const Card = ({ img, title, prevPrice, onClick, productId }) => {
  //ประกาศ function component ชื่อ "Card"รับ props เข้ามา 5 ตัวคือ img, title, prevPrice, onClick, productId

  return (
    <>
      <section
        className="pic"

        // Component นี้มีการ render โดยใช้ JSX. มีการใช้ tag <section> ซึ่งถูกกำหนด className เป็น "card" และมี event handler สำหรับคลิก (onClick) ที่เรียกฟังก์ชั่น onClick พร้อมส่ง productId ไปในฟังก์ชั่น.
      >
        <div className="item">
          <img src={img} alt={title} className="card-img" />
          <div className="card-details">
            <div>
              <h3 className="card-title">{title}</h3>
              <div className="price">
                <span>{prevPrice}</span>
              </div>
              {/* <div className="cart"> */}
              <div className="flex justify-center">
                <button
                  className="border-2 border-blue-600 bg-blue-500 hover:bg-blue-700 rounded-xl h-[40px] w-[120px] "
                  onClick={() => {
                    onClick(productId);
                  }}
                >
                  Add To Cart
                </button>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;
//Component "Card" ถูก export เพื่อให้สามารถนำไปใช้งานในไฟล์อื่น
