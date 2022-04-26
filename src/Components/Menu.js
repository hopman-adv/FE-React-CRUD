import { NavLink } from "react-router-dom";

export default function Menu(props) {
  return (
    <nav className="w3-bar w3-border w3-light-grey">
      <NavLink
        to="/"
        className={(navData) =>
          navData.isActive
            ? "w3-bar-item w3-button w3-green"
            : "w3-bar-item w3-button"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/signup"
        className={(navData) =>
          navData.isActive
            ? "w3-bar-item w3-button w3-green"
            : "w3-bar-item w3-button"
        }
      >
        Signup
      </NavLink>
      <NavLink
        to="/login"
        className={(navData) =>
          navData.isActive
            ? "w3-bar-item w3-button w3-green"
            : "w3-bar-item w3-button"
        }
      >
        Login
      </NavLink>
      <NavLink
        to="/users"
        className={(navData) =>
          navData.isActive
            ? "w3-bar-item w3-button w3-green"
            : "w3-bar-item w3-button"
        }
      >
        Users
      </NavLink>
      <NavLink
        to="/profile"
        className={(navData) =>
          navData.isActive
            ? "w3-bar-item w3-button w3-green"
            : "w3-bar-item w3-button"
        }
      >
        Profile
      </NavLink>
    </nav>
  );
}
