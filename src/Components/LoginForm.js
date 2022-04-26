export default function LoginForm(props) {
  return (
    <div id="Login" className="user-acces w3-container">
      <form id="login-form">
        <p>Log into you profile.</p>
        <div className="signup-box">
          <p>
            <label htmlFor="username">User name:</label>
            <input
              className="signup-username-input w3-input"
              type="text"
              id="username-login"
              required
              minLength="3"
              maxLength="20"
              placeholder="Enter username..."
            />
          </p>
          <p>
            <label htmlFor="password">Password:</label>
            <input
              className="signup-password-input w3-input"
              type="text"
              id="password-login"
              required
              pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,40}"
              maxLength="40"
              minLength="8"
              placeholder="Enter password..."
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
