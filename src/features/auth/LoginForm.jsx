import { toast } from "react-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../config/axios";
import { useAuth } from "../../hooks/use-auth.js";
import LoginContent from "./LoginContent";

import icon3 from "../../assets/icon3.svg";
import icon4 from "../../assets/icon4.svg";
import mg1 from "../../assets/mg1.jpg";
import Joi from "joi";

const schema = Joi.object({
  emailOrPhoneNumber: Joi.string().required().trim(),
  password: Joi.string().required().min(6).max(13),
});

export default function LoginForm() {
  const [input, setInput] = useState({
    emailOrPhoneNumber: "",
    password: "",
  });
  const navigate = useNavigate();
  const { login } = useAuth();
  console.log(input);

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();

      const { value, error } = schema.validate(input);
      console.log(value);
      // login(value)
      // if (error===undefined){
      //   alert()
      // }

      await login(input);
      // console.log(what);
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };
  return (
    <form onSubmit={handleSubmitForm}>
      <label
        htmlFor="Uname"
        className="text-2xl mt-10 flex justify-center text-sky-300"
      >
        Username
      </label>
      <div className="flex justify-center">
        <input
          className="border-b-4 border-indigo-400 focus:border-sky-300 focus:outline-none"
          type="text"
          id="fname"
          name="fname"
          onChange={(e) =>
            setInput({ ...input, emailOrPhoneNumber: e.target.value })
          }
        />
        <div className="w-[30px] ">
          <img src={icon3} alt="" />
        </div>
      </div>

      <label
        htmlFor="Pword"
        className="text-2xl mt-2 flex justify-center text-sky-300"
      >
        Password:
      </label>
      <div className="flex justify-center ">
        <input
          className="border-b-4 border-indigo-400 focus:border-sky-300 focus:outline-none"
          type="password"
          id="Pword"
          name="Pword"
          onChange={(e) => setInput({ ...input, password: e.target.value })}
        />
        <div className="w-[30px] ">
          <img src={icon4} alt="" />
        </div>
      </div>

      <br />
      <div className="flex justify-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-48 rounded-full">
          Button
        </button>
      </div>
    </form>
  );
}
