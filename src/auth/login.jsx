import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/login.module.css';

const Login = () => {
  const [userDetails, setUserDetails] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserDetails((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Login attempted with:', userDetails);
  };

  return (
    <div className={styles.container}>
      <h1>Log In</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={userDetails.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className={styles.input}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password" className={styles.label}>
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={userDetails.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className={styles.input}
            required
          />
        </div>
        <button type="submit" className={styles.button}>
          Log In
        </button>
      </form>
      <p>
        Don't have an account? <Link to="/signup" className={styles.link}>Sign Up</Link>
      </p>
    </div>
  );
};

export default Login;