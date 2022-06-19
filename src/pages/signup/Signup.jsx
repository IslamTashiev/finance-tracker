import { updateCurrentUser } from "firebase/auth";
import React, { useState } from "react";
import { useSignup } from "../../hooks/useSignup";
import styles from "./Signup.module.css";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const { signup, error, isPending } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(email, password, userName);
  };

  return (
    <form onSubmit={handleSubmit} className={styles["signup-form"]}>
      <h2>Signup</h2>
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
      <label>
        <span>Your Name:</span>
        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          type='text'
        />
      </label>
      {error && <p>{error}</p>}
      <button className='btn'>Login</button>
    </form>
  );
};
