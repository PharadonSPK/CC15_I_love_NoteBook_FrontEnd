import React from "react"; //import โมดูล React จากไลบรารีเพื่อใช้ React.Component ที่เกี่ยวข้อง

const Button = ({ onClickHandler, value, title }) => {
  //ประกาศ function component ชื่อ "Button" รับ props เข้ามา 3 ตัวคือ onClickHandler value title
  return (
    <button onClick={onClickHandler} value={value} className="btns">
      {title}
    </button>
  );
};
// Component นี้ return JSX ที่เป็นโค้ดของปุ่ม (button) โดยกำหนดค่า onClick เป็น onClickHandler, ค่า value เป็น value, และกำหนด className เป็น "btns". แสดงข้อความที่ถูกส่งเข้ามาผ่าน props ที่ชื่อ title.

export default Button;
//Component "Button" ถูก export เพื่อให้สามารถนำไปใช้งานในไฟล์อื่น
