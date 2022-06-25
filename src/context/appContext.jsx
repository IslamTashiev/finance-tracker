import { onAuthStateChanged } from "firebase/auth";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";
import React, { createContext, useReducer } from "react";
import { auth, firestore } from "../firebase/config";

const INITIAL_STATE = {
  user: null,
  todos: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "SET_TODOS":
      return {
        ...state,
        todos: action.payload.filter(
          (todo) => todo.authorId === state.user?.uid,
        ),
      };

    default:
      return state;
  }
};

export const appContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const getUser = () => {
    dispatch({
      type: "SET_USER",
      payload: auth.currentUser,
    });
    onAuthStateChanged(auth, (_user) => {
      if (!state.user) {
        dispatch({
          type: "SET_USER",
          payload: _user,
        });
      }
    });
  };

  const getTodos = async () => {
    const q = query(
      collection(firestore, "todos"),
      orderBy("createdAt", "desc"),
    );
    const dataSnapShot = await getDocs(q);
    const data = dataSnapShot.docs.map((item) => ({
      ...item.data(),
      id: item.id,
    }));

    dispatch({
      type: "SET_TODOS",
      payload: data,
    });
  };

  const createTodo = async (todo) => {
    const ref = collection(firestore, "todos");
    await addDoc(ref, todo);
  };
  const deleteTodo = async (id) => {
    const ref = doc(firestore, "todos", id);
    await deleteDoc(ref);
    await getTodos();
  };

  const updateTodo = async (id, todo) => {
    const ref = doc(firestore, "todos", id);
    await updateDoc(ref, todo);
  };

  return (
    <appContext.Provider
      value={{
        user: state.user,
        todos: state.todos,
        getUser,
        getTodos,
        createTodo,
        deleteTodo,
        updateTodo,
      }}>
      {children}
    </appContext.Provider>
  );
};
