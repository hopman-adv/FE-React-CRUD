import Input from "./Input";
import * as ax from "../Services/auth.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmitForm(e) {
    e.preventDefault();
    try {
      ax.login(username, password).then((response) => {
        if (response === undefined || response === null) {
          setUsername("");
          setPassword("");
        } else {
          navigate("/profile");
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div
      id="Login"
      onSubmit={handleSubmitForm}
      className="user-acces w3-container"
    >
      <form id="login-form">
        <p>Log into you profile.</p>
        <div className="signup-box">
          <p>
            <label htmlFor="username">User name:</label>
            <Input
              className="signup-username-input w3-input"
              type="text"
              id="username-login"
              value={username}
              required
              minLength="3"
              maxLength="20"
              placeholder="Enter username..."
              onChange={(e) => setUsername(e.target.value)}
            />
          </p>
          <p>
            <label htmlFor="password">Password:</label>
            <Input
              className="signup-password-input w3-input"
              type="text"
              id="password-login"
              value={password}
              required
              pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,40}"
              maxLength="40"
              minLength="8"
              placeholder="Enter password..."
              onChange={(e) => setPassword(e.target.value)}
            />
          </p>

          <p>
            <input
              type="submit"
              id="signup-submit"
              className="w3-btn w3-green"
              value="Log in"
            />
          </p>
        </div>
      </form>
    </div>
  );
}
