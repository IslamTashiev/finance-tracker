import React from "react";
import { useContext } from "react";
import styles from "./Home.module.css";
import { appContext } from "../../context/appContext";
import { useEffect } from "react";

export const TransactionList = () => {
  const { todos, getTodos } = useContext(appContext);

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <ul className={styles.transactions}>
      {todos.length ? (
        todos.map((item) => (
          <li>
            <p className={styles.name}>{item.name}</p>
            <p className={styles.amount}>${item.amount}</p>
          </li>
        ))
      ) : (
        <>Loading...</>
      )}
    </ul>
  );
};
