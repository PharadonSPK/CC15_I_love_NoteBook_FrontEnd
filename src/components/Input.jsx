import React from "react"; //import โมดูล React จากไลบรารีเพื่อใช้ React.Component ที่เกี่ยวข้อง

const Input = ({ handleChange, value, name, color, title }) => {
  //ประกาศ function component ชื่อ "Input" รับ props เข้ามา 5 ตัวคือ handleChange, value, name, color, title
  return (
    <label className="sidebar-label-container">
      <input onChange={handleChange} type="radio" value={value} name={name} />
      {/* มี type เป็น "radio" และมี event handler onChange ที่ถูกตั้งค่าด้วย prop handleChange และกำหนดค่า value, name จาก props */}
      <span className="checkmark" style={{ backgroundColor: color }}></span>
      {title}
    </label>
  );
};

export default Input;
//Component "Input" ถูก export เพื่อให้สามารถนำไปใช้งานในไฟล์อื่น
