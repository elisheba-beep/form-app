import React from "react";

const InputField = ({ label, id, type, value, onChange, error }) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} value={value} onChange={onChange} />
      {error && <div className="error-text">{error}</div>}
    </div>
  );
};

export default InputField;
