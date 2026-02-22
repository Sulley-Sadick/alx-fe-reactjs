import { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [errors, setErrors] = useState("");

  const handleChange = function (e) {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = function (e) {
    e.preventDefault();

    if (!formData.username && !formData.email && !formData.password) {
      setErrors("Please fill out this field");
      return;
    }

    console.log(formData);

    setErrors("");
  };
  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      {errors && <p>{errors}</p>}
      <label htmlFor="username">Username:</label>
      <input type="text" name="username" id="username" value={formData.username} onChange={handleChange} style={{ marginBlock: "0.5rem" }} />

      <label htmlFor="email">Email:</label>
      <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} style={{ marginBlock: "0.5rem" }} />

      <label htmlFor="password">Password:</label>
      <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} style={{ marginBlock: "0.5rem" }} />

      <button type="submit">Submit</button>
    </form>
  );
}

export default RegistrationForm;
