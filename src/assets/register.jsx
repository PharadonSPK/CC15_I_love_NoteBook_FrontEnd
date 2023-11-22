import React from "react";
import Joi from "joi";
import { useState } from "react";
import axios from "axios";

const schema = Joi.object({
  emailorphonenumber: Joi.string().required().trim(),
  username: Joi.string().required(),
  lastname: Joi.string().required(),
  password: Joi.string().required().min(6).max(13),
  confirmpassword: Joi.string()
    .required()
    .valid(Joi.ref("password"))
    .min(6)
    .max(13),
});
export default function Register() {
  const [input, setInput] = useState({
    emailorphonenumber: "",
    username: "",
    lastname: "",
    password: "",
    confirmpassword: "",
  });

  const [error, setError] = useState({
    firstname: "",
    lastname: "",
    emailorphonenumber: "",
    password: "",
    confirmpassword: "",
  });

  function handleSubmitForm(event) {
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

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="container mx-auto">
        <div className="w-5/6 px-4 py-4">
          <h1 className="text-center text-2xl font-bold">Hello, world!</h1>
          <div className="flex flex-wrap justify-content-between">
            <input
              className="w-full p-3 rounded-md"
              type="text"
              placeholder="Username"
              onChange={(e) => setInput({ ...input, username: e.target.value })}
            />
            <input
              className="w-full p-3 rounded-md"
              type="text"
              placeholder="Lastname"
              onChange={(e) => setInput({ ...input, lastname: e.target.value })}
            />
            <input
              className="w-full p-3 rounded-md"
              type="text"
              placeholder="emailOrPhoneNumber"
              onChange={(e) =>
                setInput({ ...input, emailorphonenumber: e.target.value })
              }
            />

            <input
              className="w-full p-3 rounded-md"
              type="password"
              placeholder="Password"
              onChange={(e) => setInput({ ...input, password: e.target.value })}
            />
            <input
              className="w-full p-3 rounded-md"
              type="Password"
              placeholder="Confirmpassword"
              onChange={(e) =>
                setInput({ ...input, confirmpassword: e.target.value })
              }
            />
          </div>
          <input
            type="submit"
            value={"submit"}
            className="w-full bg-blue-500 text-white text-center py-2 rounded-md"
          />
        </div>
      </div>
    </form>
  );
}
