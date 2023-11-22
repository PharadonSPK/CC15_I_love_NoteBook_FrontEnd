import Brand from "./Brand/Brand";
import "./Sidebar.css";

const Sidebar = ({ handleChange }) => {
  // ฟังก์ชันนี้มักถูกใช้เป็น event handler สำหรับเหตุการณ์เปลี่ยนแปลงค่าใน React
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>I-Love-Notebook</h1>
        </div>
        <Brand handleChange={handleChange} />
      </section>
    </>
  );
};

export default Sidebar;
