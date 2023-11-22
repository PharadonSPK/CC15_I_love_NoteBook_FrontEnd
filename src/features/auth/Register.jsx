import React from "react"; //rfc
import Joi from "joi"; //การนำเข้า Joi สำหรับการตรวจสอบอินพุต
import axios from "axios";
import "./Register.css";
import { useState } from "react";

const schema = Joi.object({
  emailOrPhoneNumber: Joi.string().required().trim(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  password: Joi.string().required().min(6).max(13),
  confirmPassword: Joi.string()
    .required()
    .valid(Joi.ref("password"))
    .min(6)
    .max(13),
});

export default function Register() {
  const [input, setInput] = useState({
    emailOrPhoneNumber: "",
    firstName: "",
    lastName: "",
    confirmPassword: "",
    password: "",
  });

  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    emailOrPhoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  function handleSubmitForm(e) {
    e.preventDefault(); //กดซับมิทไม่รีเฟชหน้าให้
    const { value, error } = schema.validate(input, { abortEarly: false });
    console.log(value, error);
    if (error) {
      const result = error.details.reduce((acc, el) => {
        const { message, path } = el;
        acc[path[0]] = message;
        return acc;
      }, {});
      return setError(result);
    }
    axios.post("http://localhost:8888/auth/register", value);
  }
  // console.log(error.confirmPassword);
  return (
    <div className="wrapper w-full flex flex-col justify-center items-center h-screen">
      <form onSubmit={handleSubmitForm}>
        <h1>Register</h1>

        <div className="input-box">
          <div className="input-field">
            <input
              type="text"
              placeholder="FirstName"
              required
              onChange={(e) =>
                setInput({ ...input, firstName: e.target.value })
              }
            />
          </div>

          <div className="input-field">
            <input
              type="text"
              placeholder="LastName"
              required
              onChange={(e) => setInput({ ...input, lastName: e.target.value })}
            />
          </div>
        </div>

        <div className="input-box">
          <div className="input-field">
            <input
              type="text"
              placeholder="EmailOrPhoneNumber"
              required
              onChange={(e) =>
                setInput({ ...input, emailOrPhoneNumber: e.target.value })
              }
            />
          </div>
        </div>

        <div className="input-box">
          <div className="input-field">
            <input
              type="password"
              placeholder="Password"
              required
              onChange={(e) => setInput({ ...input, password: e.target.value })}
            />
          </div>
          <div
            className={`input-field ${
              error.confirmPassword ? `bg-red-500` : `bg-[skyblue]`
            }`}
          >
            <input
              // className={`${error.confirmPassword ? null: alert(122)}`}
              // className="bg-red-500"
              type="password"
              placeholder="ConfirmPassword"
              required
              onChange={(e) =>
                setInput({ ...input, confirmPassword: e.target.value })
              }
            />
          </div>
        </div>
        <button type="submit" className="btn">
          Register
        </button>
      </form>
    </div>
  );
}
