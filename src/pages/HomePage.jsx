import { useContext, useEffect, useState } from "react";
import Products from "../Products/Products";
import Recommended from "../Recommended/Recommended";
import Sidebar from "../Sidebar/Sidebar";
import { useProduct } from "../contexts/ProductContext";
import Card from "../components/Card";
import Nav from "../Navigation/Nav";
import { useCart } from "../contexts/CartContext";
import axios from "../config/axios";
//นำเข้าส่วนประกอบ React, hooks ( useEffect, useState) และการพึ่งพาภายนอกที่จำเป็น เช่น Axios สำหรับการส่งคำขอ HTTP

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { cart, setCart } = useCart();

  //Input Filter
  const [query, setQuery] = useState("");
  const { allProduct, setAllProduct, getAllProduct } = useProduct();
  // ตัวแปรสถานะถูกประกาศโดยใช้useState ซึ่งรวมถึงselectedCategory, query
  //ตัวแปรจาก hooks useCartและuseProductแบบกำหนดเอง
  useEffect(() => {
    getAllProduct();
  }, []);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = allProduct.filter(
    (product) =>
      product.description.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );
  //อาร์เรย์filteredItemsถูกสร้างขึ้นโดยการกรองผลิตภัณฑ์ตามอินพุต

  //Radio Filtering
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  //Button Filtering
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };
  // ฟังก์ชันตัวจัดการเหตุการณ์ ว้สำหรับการเปลี่ยนแปลงอินพุต การเปลี่ยนแปลงปุ่มตัวเลือก และการคลิกปุ่ม ฟังก์ชันเหล่านี้จะอัพเดตตัวแปรสถานะที่เกี่ยวข้อง
  function filteredData(products, selected, query) {
    let filteredProducts = products;
    if (query) {
      filteredProducts = filteredItems;
      // อาร์เรย์filteredItemsถูกสร้างขึ้นโดยการกรองผลิตภัณฑ์ตามอินพุต
    }

    const addToCart = (productId) => {
      axios
        .post("/cart", { productId: productId, quantity: 1 })
        .then((res) => {
          console.log(res.data.cart);
          // alert("Success");
        })
        .catch((err) => {
          console.log(err);
        });
      // ฟังก์ชันaddToCartส่งคำขอ POST ไปยังปลายทาง "/cart" โดยเพิ่มผลิตภัณฑ์ลงในรถเข็นของผู้ใช้ การตอบกลับถูกบันทึกลงในคอนโซล
    };
    //Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ brand, name, price, description }) =>
          brand === selected ||
          name === selected ||
          price === selected ||
          description === selected
      );
    }

    return filteredProducts.map(({ id, imageUrl, description, price }) => (
      <Card
        key={id}
        productId={id}
        img={imageUrl}
        title={description}
        prevPrice={price}
        onClick={addToCart}
      />
    ));
  }

  const result = filteredData(allProduct, selectedCategory, query);
  // ฟังก์ชันfilteredDataจะใช้อาร์เรย์ของผลิตภัณฑ์ หมวดหมู่ที่เลือก และแบบสอบถามเป็นพารามิเตอร์ โดยจะกรองผลิตภัณฑ์ตามพารามิเตอร์ และส่งกลับอาร์เรย์ใหม่
  return (
    <div>
      <Sidebar handleChange={handleChange} />
      {/* <Nav query={query} handleInputChange={handleInputChange} /> */}
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </div>
  );
  // ส่วนประกอบจะเรนเดอร์ส่วนประกอบ UI ต่างๆ
}
