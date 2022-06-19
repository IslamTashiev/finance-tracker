import { signOut } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/config";

export const useLogout = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const logout = async (email, password) => {
    setError(null);
    setIsPending(false);
    try {
      await signOut(auth);
      console.log("Вы вышли из своего аккаунта!");
      setError(null);
      setIsPending(false);
    } catch (error) {
      setError(error.message);
    }
  };

  return { logout, error, isPending };
};
