import React, { useContext, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./components";
import { appContext } from "./context/appContext";
import { Home, Login, Signup } from "./pages";

function App() {
  const { getUser } = useContext(appContext);
  useEffect(() => {
    getUser();
    return () => getUser();
  }, []);
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
