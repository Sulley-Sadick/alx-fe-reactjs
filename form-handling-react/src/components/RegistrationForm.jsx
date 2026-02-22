import { useState } from "react";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  const handleSubmit = function (e) {
    e.preventDefault();

    if (!username || !email || !password) {
      setErrors("Please fill out this field");
      return;
    }

    setErrors("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      {errors && <p>{errors}</p>}
      <label htmlFor="username">Username:</label>
      <input type="text" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} style={{ marginBlock: "0.5rem" }} />

      <label htmlFor="email">Email:</label>
      <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ marginBlock: "0.5rem" }} />

      <label htmlFor="password">Password:</label>
      <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ marginBlock: "0.5rem" }} />

      <button type="submit">Submit</button>
    </form>
  );
}

export default RegistrationForm;
