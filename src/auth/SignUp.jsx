import React from "react";
import { Link } from "react-router-dom";
import style from "../styles/signup.module.css";

const Signup = () => {
  return (
    <div className={style.container}>
      <h1>Sign Up</h1>
      <form className={style.form}>
        <div className={style.formGroup}>
          <label htmlFor="name" className={style.label}>
            Name:
          </label>
          <input type="text" id="name" placeholder="Enter your name" className={style.input} />
        </div>
        <div className={style.formGroup}>
          <label htmlFor="email" className={style.label}>
            Email:
          </label>
          <input type="email" id="email" placeholder="Enter your email" className={style.input} />
        </div>
        <div className={style.formGroup}>
          <label htmlFor="password" className={style.label}>
            Password:
          </label>
          <input type="password" id="password" placeholder="Enter your password" className={style.input} />
        </div>
        <button type="submit" className={style.button}>
          Sign Up
        </button>
      </form>
      <p>
        Already have an account? <Link to="/login" className={style.link}>Log In</Link>
      </p>
    </div>
  );
};

export default Signup;
