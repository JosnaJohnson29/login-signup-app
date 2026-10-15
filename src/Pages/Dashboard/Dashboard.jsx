
import React from "react";
import "./Dashboard.css";

function Dashboard({ user, onLogout }) {
  return (
    <div className="dashboard-page">
      <nav className="dashboard-navbar">
        <h2>My Dashboard</h2>
        <button className="logout-button" onClick={onLogout}>
          Logout
        </button>
      </nav>

      <main className="dashboard-content">
        <div className="welcome-card">
          <div className="welcome-icon">🎉</div>

          <h1>Hi, {user.name}!</h1>
          <h2>Welcome to this page!</h2>

          <p>You have successfully logged in to your account.</p>

          <div className="user-details">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
          </div>

          <button className="dashboard-logout" onClick={onLogout}>
            <span>↪</span> Logout
          </button>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
