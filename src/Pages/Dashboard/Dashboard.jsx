
import React from "react";
import "./Dashboard.css";

function Dashboard() {
  const handleLogout = () => {
    window.location.href = "/login";
  };

  return (
    <div className="dashboard-page">
      <nav className="dashboard-navbar">
        <h2>My Dashboard</h2>
        <button className="logout-top" onClick={handleLogout}>
          Logout
        </button>
      </nav>

      <div className="dashboard-container">
        <div className="dashboard-card">
          <div className="celebration-emoji">🎉</div>

          <h1>Hi, Josna Johnson!</h1>
          <h2>Welcome to this page!</h2>

          <p className="success-message">
            You have successfully logged in to your account.
          </p>

          <div className="user-details">
            <p><strong>Name:</strong> Josna Johnson</p>
            <p><strong>Email:</strong> josnajohnson01@gmail.com</p>
            <p><strong>Phone:</strong> 8098631537</p>
          </div>

          <button className="logout-bottom" onClick={handleLogout}>
            ↪ Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
