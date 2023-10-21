import React from "react"; //rfc
import Joi from "joi";
import axios from "axios";
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
  function handleSubmitForm(e) {
    e.preventDefault(); //กดซับมิทไม่รีเฟชหน้าให้
    const { value, error } = schema.validate(input);
    console.log(value, error);
    if (error) {
      return alert("I kawaei");
    }
    axios.post("http://localhost:8888/auth/register", value);
  }
  //   console.log(input);
  return (
    <div className="wrapper">
      <form onSubmit={handleSubmitForm}>
        <h1>Register</h1>

        <div className="input-box">
          <div className="input-field">
            <input
              type="text"
              placeholder="firstName"
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
          <div className="input-field">
            <input
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
