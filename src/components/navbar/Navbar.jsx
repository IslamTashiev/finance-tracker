import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { appContext } from "../../context/appContext";
import { useLogout } from "../../hooks/useLogout";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const { logout, error, isPending } = useLogout();
  const { user } = useContext(appContext);
  const { navigate } = useNavigate();

  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>
          <Link to='/'>Мои финансы</Link>
        </li>
        {!user ? (
          <>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/signup'>Signup</Link>
            </li>
          </>
        ) : (
          <>
            <p>Hello, {user.displayName}</p>
            <button onClick={logout} className='btn'>
              Logout
            </button>
          </>
        )}
      </ul>
    </nav>
  );
};
