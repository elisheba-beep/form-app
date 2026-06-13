import React, { useState } from "react";
import InputField from "./InputField";
import { handleLoginSubmit } from "../functions/handleSubmit";

const Login = ({ onSwitch }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setErrors({ ...errors, [e.target.id]: "" });
  };

  return (
    <div className="inner-container">
      <h1>Login</h1>
      <form
        onSubmit={(e) =>
          handleLoginSubmit(e, formData, validateEmail, setErrors, setFormData)
        }
      >
        <InputField
          label="Email"
          id="email"
          type="text"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />
        <InputField
          label="Password"
          id="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
        />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account?{" "}
        <button className="link-btn" onClick={onSwitch}>
          Sign up
        </button>
      </p>
    </div>
  );
};

export default Login;
