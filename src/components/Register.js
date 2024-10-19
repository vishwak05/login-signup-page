import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PasswordStrengthMeter from './PasswordStrengthMeter';
import './LoginRegister.css';
import showPasswordIcon from '../images/show.png';
import hidePasswordIcon from '../images/hide.png';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');
  const [showPassword, setShowPassword] = useState(false); // For password toggle

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !email || !password || !confirmPassword || !role) {
      alert('All fields are required!');
    } else if (password !== confirmPassword) {
      alert('Passwords do not match!');
    } else {
      // Add registration logic here
    }
  };

  return (
    <div className="form-container">
      <form className="form-box" onSubmit={handleSubmit}>
        <h3 className="form-header">Register</h3>
        <input
          type="text"
          placeholder="Username*"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
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
        <small>Min 5 alphabets and Min 3 numbers are required*</small>
        <PasswordStrengthMeter password={password} />
        <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Confirm Password*"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
        />
        <select value={role} onChange={(e) => setRole(e.target.value)} required>
          <option value="">Select Role*</option>
          <option value="Athlete">Athlete</option>
          <option value="Coach">Coach</option>
          <option value="Admin">Admin</option>
        </select>
        <button type="submit" className="submit-btn">Register</button>
        <p>
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
