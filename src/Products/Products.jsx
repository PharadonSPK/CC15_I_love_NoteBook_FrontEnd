import { useCart } from "../contexts/CartContext";
import { useProduct } from "../contexts/ProductContext";
//นำเข้าhook จากบริบท
const Products = ({ result }) => {
  const { allProduct } = useProduct();
  // ใช้useProducthook เพื่อรับallProductข้อมูลจาก "ProductContext"
  return (
    <>
      <section className="card-container">{result}</section>
      {/* แสดงเนื้อหา card-container เป็นชุดของส่วนประกอบ  ผลิตภัณฑ์ */}
    </>
  );
};

export default Products;
