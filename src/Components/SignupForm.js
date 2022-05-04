import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../Services/useFetch.js";
import Loader from "./Loader";
import * as ax from "../Services/auth.js";

export default function SignupForm(props) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { post } = useFetch("https://localhost:8443/api");

  function handleFormSubmit(event) {
    event.preventDefault();
    const payload = { username, email, password };
    console.log(payload);
    setIsLoading(true);
    post("/auth/signup", payload)
      .then((response) => {
        console.log(response);
        setEmail("");
        setPassword("");
        setUsername("");
        setIsLoading(false);
        ax.login(username, password).then(userReady => {
            navigate("/profile");
        });
      })
      .catch((error) => {
        console.log("Nastal error: ");
        console.log(error);
        setEmail("");
        setPassword("");
        setUsername("");
        setIsLoading(false);
      });
  }

  return (
    <div id="Signup" className="user-acces w3-container">
      <form id="signup-form" onSubmit={handleFormSubmit}>
        <p>Choose user name, password and insert your email.</p>
        <div className="signup-box">
          <p>
            <label htmlFor="username">User name:</label>
            <input
              className="signup-username-input w3-input"
              type="text"
              id="username"
              value={username}
              required
              minLength="3"
              maxLength="20"
              pattern="^[a-zA-Z0-9]{3,20}"
              placeholder="Enter username..."
              onChange={(e) => setUsername(e.target.value)}
            />
          </p>
          <p>
            <label htmlFor="email">Email:</label>
            <input
              className="signup-email-input w3-input"
              type="text"
              id="email"
              value={email}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"
              minLength="1"
              maxLength="50"
              placeholder="Enter email..."
              onChange={(e) => setEmail(e.target.value)}
            />
          </p>
          <p>
            <label htmlFor="password">Password:</label>
            <input
              className="signup-password-input w3-input"
              type="text"
              id="password"
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
            {isLoading ? (
              <Loader />
            ) : (
              <input
                type="submit"
                id="signup-submit"
                className="w3-button w3-green"
                value="Sign up"
              />
            )}
          </p>
        </div>
      </form>
    </div>
  );
}
