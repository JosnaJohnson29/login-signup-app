
import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";

import Login from "./Pages/Login/Login.jsx";
import Signup from "./Pages/Signup/Signup.jsx";
import Dashboard from "./Pages/Dashboard/Dashboard.jsx"
import "./App.css";

function AppRoutes() {
  const [registeredUser, setRegisteredUser] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  const handleSignup = (user) => {
    setRegisteredUser(user);
    alert("Account created successfully! Please log in.");
    navigate("/login");
  };

  const handleLogin = (email, password) => {
    if (
      registeredUser &&
      registeredUser.email === email &&
      registeredUser.password === password
    ) {
      setCurrentUser(registeredUser);
      navigate("/dashboard");
      return true;
    }

    return false;
  };

  const handleLogout = () => {
    setCurrentUser(null);
    navigate("/login");
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to="/login" replace />}
      />

      <Route
        path="/signup"
        element={
          <Signup
            onSignup={handleSignup}
            registeredUser={registeredUser}
          />
        }
      />

      <Route
        path="/login"
        element={
          currentUser ? (
            <Navigate to="/dashboard" replace />
          ) : (
            <Login onLogin={handleLogin} />
          )
        }
      />

      <Route
        path="/dashboard"
        element={
          currentUser ? (
            <Dashboard
              user={currentUser}
              onLogout={handleLogout}
            />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />

      <Route
        path="*"
        element={<Navigate to="/login" replace />}
      />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
