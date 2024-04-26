// LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles/LoginPage.css';

const LoginPage = ({ onLogin }) => {
  const navigate = useNavigate(); // Use useNavigate hook to get access to the navigate function

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement login logic here (e.g., API call)
    // For now, just pass username to parent component
    onLogin(username);
    // Redirect to the Todo page after successful login
    navigate('/todo');
  };

  return (
    <div className="loginForm">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="loginInput"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="loginInput"
      />
      <button onClick={handleLogin} className="loginButton">Login</button>
    </div>
  );
};

export default LoginPage;
