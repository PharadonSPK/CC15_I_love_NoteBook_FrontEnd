import "./Brand.css";
import Input from "../../components/Input";

function Brand({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Brand</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>

        <Input
          handleChange={handleChange}
          value="asus"
          title="Asus"
          name="test"
        />

        <Input handleChange={handleChange} value="hp" title="HP" name="test" />

        <Input
          handleChange={handleChange}
          value="huawei"
          title="Huawei"
          name="test"
        />

        <Input handleChange={handleChange} value="lg" title="LG" name="test" />

        <Input
          handleChange={handleChange}
          value="msi"
          title="MSI"
          name="test"
        />
      </div>
    </div>
  );
}

export default Brand;
