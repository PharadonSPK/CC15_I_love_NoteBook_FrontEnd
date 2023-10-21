import Brand from "./Brand/Brand";
// import Price from "./Price/Price";
// import Colors from "./Colors/Colors";
import "./Sidebar.css";

const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>I-Love-Notebook</h1>
        </div>
        <Brand handleChange={handleChange} />
        {/* <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} /> */}
      </section>
    </>
  );
};

export default Sidebar;
