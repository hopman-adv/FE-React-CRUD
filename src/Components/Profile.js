import { useState } from "react";
import * as ax from "../Services/update.js";
import TokenService from "../Services/token.service.js";
import { useNavigate } from "react-router-dom";

export default function Profile(props) {
  const navigate = useNavigate();
  const [username, setUsername] = useState(
    TokenService.getUsername() ?? "USER NOT LOGGED IN!"
  );
  const [email, setEmail] = useState(
    TokenService.getEmail() ?? "USER NOT LOGGED IN!"
  );
  const [id, setId] = useState(TokenService.getId() ?? "USER NOT LOGGED IN!");

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log("Updating profile...");
    try {
      ax.update(id, username, email).then((response) => {
        console.log(response);
        if (response === "Unlogged!") {
          alert("User not logged!");
          TokenService.removeUser();
          navigate("/login");
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="w3-container">
      <div className="w3-card-4 w3-section w3-content">
        <header className="w3-container w3-green">
          <h2>Your profile</h2>
        </header>
        <form id="profile-form" onSubmit={handleFormSubmit}>
          <div className="w3-container">
            <p>Id:</p>
            <p
              id="id"
              className="w3-input"
              onChange={(e) => setId(e.target.value)}
            >
              {id}
            </p>
            <hr />
            <p>Name:</p>
            <input
              id="name"
              value={username}
              className="w3-input"
              minLength="3"
              maxLength="20"
              pattern="^[a-zA-Z0-9]{3,20}"
              onChange={(e) => setUsername(e.target.value)}
            ></input>
            <hr />
            <p>Email:</p>
            <input
              id="email"
              value={email}
              className="w3-input"
              minLength="1"
              maxLength="50"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <hr />

            <p>
              <input
                id="update-button"
                className="w3-btn w3-green"
                type="submit"
                value="Update profile"
              />
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
