// App.js
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import LoginScreen from "./components/LoginScreen";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "./utils/useAuth";
; // Update the path

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route
          path="/"
          element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
        />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
