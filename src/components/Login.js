import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginRegister.css';
import showPasswordIcon from '../images/show.png';
import hidePasswordIcon from '../images/hide.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert('All fields are required!');
    }
    // Add login logic here
  };

  return (
    <div className="form-container">
      <form className="form-box" onSubmit={handleSubmit}>
        <h3 className="form-header">Login</h3>
        <input
          type="email"
          placeholder="Email*"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div className="password-field">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password*"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <img
            src={showPassword ? hidePasswordIcon : showPasswordIcon}
            alt="Toggle Password Visibility"
            className="password-toggle-icon"
            onClick={togglePasswordVisibility}
          />
        </div>
        <button type="submit" className="submit-btn">Login</button>
        <p>
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
