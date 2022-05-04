import { NavLink } from "react-router-dom";
import { logoutUser } from "../Services/auth";
import { useNavigate } from "react-router-dom";

export default function Menu({ userLogged }) {
  const navigate = useNavigate();

  function handleUserLogout() {
    logoutUser();
    navigate("/login");
  }

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
      {!userLogged && (
        <>
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
        </>
      )}
      {userLogged && (
        <>
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
          <button className={"w3-bar-item w3-button"} onClick={handleUserLogout}>Logout</button>
        </>
      )}
    </nav>
  );
}
