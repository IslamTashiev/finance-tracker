import React, { useState } from "react";
import { useContext } from "react";
import { appContext } from "../../context/appContext";
import styles from "./Home.module.css";

export const UpdateForm = ({ item, func }) => {
  const { updateTodo, getTodos } = useContext(appContext);
  const [title, setTitle] = useState(item.name);
  const [amount, setAmount] = useState(item.amount);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedTodo = {
      ...item,
      name: title,
      amount,
    };
    await updateTodo(item.id, updatedTodo);
    func(false);
    getTodos();
  };
  return (
    <form onSubmit={handleUpdate} className={styles.inputs}>
      <input
        onChange={(e) => setTitle(e.target.value)}
        className={styles.input}
        type='text'
        value={title}
      />
      <input
        onChange={(e) => setAmount(e.target.value)}
        className={styles.input}
        type='text'
        value={amount}
      />
      <button className={styles.none}></button>
    </form>
  );
};
