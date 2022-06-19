import { serverTimestamp } from "firebase/firestore";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { appContext } from "../../context/appContext";

export const TransactionForm = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const { createTodo, user, getTodos } = useContext(appContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const createdItem = {
      name,
      amount,
      authorId: user.uid,
      createdAt: serverTimestamp(),
    };

    createTodo(createdItem);
    getTodos();

    setName("");
    setAmount("");
  };

  return (
    <>
      <h3>Add a Transaction</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Transaction name:</span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type='text'
            required
          />
        </label>
        <label>
          <span>Amount ($):</span>
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type='text'
            required
          />
        </label>
        <button>Add Transaction</button>
      </form>
    </>
  );
};
