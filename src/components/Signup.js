import React, { useState } from "react";
import InputField from "./InputField";

const Signup = ({ onSwitch }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setErrors({ ...errors, [e.target.id]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!formData.username) newErrors.username = "Username is required.";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required.";
    if (formData.password.length < 6)
      newErrors.password = "Password needs 6+ characters.";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";

    if (Object.keys(newErrors).length > 0) return setErrors(newErrors);

    alert("Signup successful!");
    setFormData({ username: "", email: "", password: "", confirmPassword: "" });
  };

  return (
    <div className="inner-container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
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
