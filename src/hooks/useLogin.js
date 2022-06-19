import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/config";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isCancelled, setIsCancelled] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const login = async (email, password) => {
    setError(null);
    setIsPending(false);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log("Вы вошли на аккаунт " + response.user.email);
      setError(null);
      setIsPending(false);
    } catch (error) {
      if (!isCancelled) {
        setError(error.message);
      }
    }
  };

  return { login, error, isPending };
};
