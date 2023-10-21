import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.svg";

export default function Navbar() {
  return (
    <div className="text-3xl font-bold underline flex justify-between">
      <h1>I-Love-NoteBook</h1>
      <div className="flex justify-between w-[200px] border-2">
        <div className="w-[40px] ">
          <img src={icon1} alt="" />
        </div>
        <div className="w-[40px] mr-8 border-4">
          <img src={icon2} alt="" />
        </div>
      </div>
    </div>
  );
}
