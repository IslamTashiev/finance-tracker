import React, { useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import styles from "./Login.module.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isPending } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className={styles["login-form"]}>
      <h2>Login</h2>
      <label>
        <span>Email:</span>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type='email'
        />
      </label>
      <label>
        <span>Password:</span>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type='password'
        />
      </label>
      {error && <p>{error}</p>}
      <button className='btn'>Login</button>
    </form>
  );
};
