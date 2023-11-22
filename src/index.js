import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
// createRoot ซึ่งเป็น API ในreact
// document.getElementById("root") คือตำแหน่งที่ React จะทำการ render component ทั้งหมดลงไป
// root.render จะทำให้ Concurrent Mode ถูกเปิดใช้งานอัตโนมัติ ซึ่งช่วยให้เกิดประสิทธิภาพการ render
// ทำการ render component App ลงใน root ที่ถูกสร้างขึ้น
