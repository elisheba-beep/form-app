import React, { useState } from "react";
import InputField from "./InputField";

const Login = ({ onSwitch }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setErrors({ ...errors, [e.target.id]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required.";
    if (formData.password.length < 6)
      newErrors.password = "Password needs 6+ characters.";

    if (Object.keys(newErrors).length > 0) return setErrors(newErrors);

    alert("Login successful!");
    setFormData({ email: "", password: "" });
  };

  return (
    <div className="inner-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
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
