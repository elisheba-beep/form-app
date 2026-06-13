import React, { useState } from "react";
import InputField from "./InputField";
import { handleSignupSubmit } from "../functions/handleSubmit";

const Signup = ({ onSwitch }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
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
      <h1>Sign Up</h1>
      <form
        onSubmit={(e) =>
          handleSignupSubmit(e, formData, validateEmail, setErrors, setFormData)
        }
      >
        <InputField
          label="Username"
          id="username"
          type="text"
          value={formData.username}
          onChange={handleChange}
          error={errors.username}
        />
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
        <InputField
          label="Confirm Password"
          id="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
          error={errors.confirmPassword}
        />
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account?{" "}
        <button className="link-btn" onClick={onSwitch}>
          Login
        </button>
      </p>
    </div>
  );
};

export default Signup;
