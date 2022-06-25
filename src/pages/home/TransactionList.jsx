import React from "react";
import { useContext } from "react";
import styles from "./Home.module.css";
import { appContext } from "../../context/appContext";
import { useEffect } from "react";
import { useState } from "react";
import { UpdateForm } from "./UpdateForm";

export const TransactionList = () => {
  const { todos, getTodos, deleteTodo } = useContext(appContext);
  const [formIsActive, setFormIsActive] = useState(false);

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <ul className={styles.transactions}>
      {todos.length ? (
        todos.map((item) => (
          <li key={item.id}>
            {!formIsActive ? (
              <>
                <p className={styles.name}>{item.name}</p>
                <p className={styles.amount}>${item.amount}</p>
              </>
            ) : (
              <UpdateForm func={setFormIsActive} item={item} />
            )}

            <div className={styles.control}>
              <button onClick={() => setFormIsActive(!formIsActive)}>
                update
              </button>
              <button onClick={() => deleteTodo(item.id)}>delete</button>
            </div>
          </li>
        ))
      ) : (
        <>Loading...</>
      )}
    </ul>
  );
};
