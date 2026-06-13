export const handleSignupSubmit = (
  e,
  formData,
  validateEmail,
  setErrors,
  setFormData,
) => {
  e.preventDefault();
  let newErrors = {};

  if (!formData.username.trim()) newErrors.username = "Username is required.";

  if (!formData.email.trim()) {
    newErrors.email = "Email is required.";
  } else if (!validateEmail(formData.email)) {
    newErrors.email = "Please enter a valid email address.";
  }

  if (!formData.password.trim()) {
    newErrors.password = "Password is required.";
  } else if (formData.password.length < 6) {
    newErrors.password = "Password must be at least 6 characters long.";
  }

  if (!formData.confirmPassword.trim()) {
    newErrors.confirmPassword = "Please confirm your password.";
  } else if (formData.password !== formData.confirmPassword) {
    newErrors.confirmPassword = "Passwords do not match.";
  }

  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    return;
  }

  console.log("Signup attempt:", {
    username: formData.username,
    email: formData.email,
  });
  alert("Signup successful!");
  setFormData({ username: "", email: "", password: "", confirmPassword: "" });
};

export const handleLoginSubmit = (
  e,
  formData,
  validateEmail,
  setErrors,
  setFormData,
) => {
  e.preventDefault();
  let newErrors = {};

  if (!formData.email.trim()) {
    newErrors.email = "Email is required.";
  } else if (!validateEmail(formData.email)) {
    newErrors.email = "Please enter a valid email address.";
  }

  if (!formData.password.trim()) {
    newErrors.password = "Password is required.";
  } else if (formData.password.length < 6) {
    newErrors.password = "Password must be at least 6 characters long.";
  }

  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    return;
  }

  console.log("Login attempt:", { email: formData.email });
  alert("Login successful!");
  setFormData({ email: "", password: "" }); // Clear form
};
