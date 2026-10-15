
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

function Signup({ onSignup, registeredUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const passwordRules = [
    {
      label: "At least 8 characters",
      valid: password.length >= 8,
    },
    {
      label: "One uppercase letter (A-Z)",
      valid: /[A-Z]/.test(password),
    },
    {
      label: "One number (0-9)",
      valid: /[0-9]/.test(password),
    },
    {
      label: "One special character (@#$! etc.)",
      valid: /[^A-Za-z0-9\s]/.test(password),
    },
  ];

  const handleSignup = (e) => {
    e.preventDefault();
    setError("");

    if (registeredUser?.email === email.trim().toLowerCase()) {
      setError("This email is already registered in this session.");
      return;
    }

    if (!passwordRules.every((rule) => rule.valid)) {
      setError("Please meet all password requirements.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    onSignup({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      password,
    });
  };

  return (
    <div className="signup-page">
      <div className="signup-card">
        <h1>Create Account</h1>
        <p className="signup-subtitle">
          Fill in your details to get started
        </p>

        <form onSubmit={handleSignup}>
          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
            required
          />

          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
          />

          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            type="tel"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            autoComplete="tel"
            pattern="[0-9]{10}"
            title="Enter a 10-digit phone number"
            maxLength={10}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Create a strong password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
            required
          />

          <div className="password-rules">
            <p>Password must contain:</p>
            {passwordRules.map((rule) => (
              <p
                key={rule.label}
                className={rule.valid ? "rule-valid" : "rule-invalid"}
              >
                {rule.valid ? "✓" : "○"} {rule.label}
              </p>
            ))}
          </div>

          <label htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            type="password"
            placeholder="Re-enter your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            autoComplete="new-password"
            required
          />

          {error && <p className="form-error">{error}</p>}

          <button type="submit">Sign Up</button>
        </form>

        <p className="signup-switch">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
