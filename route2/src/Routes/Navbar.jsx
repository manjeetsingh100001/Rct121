import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const activeStyle = { color: "red", textDecoration: "none" };
  return (
    <nav style={{ display: "flex", gap: "2rem", justifyContent: "center" }}>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        to="/contact"
      >
        Contact
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        to="/users"
      >
        Users
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        to="/login"
      >
        Login
      </NavLink>
    </nav>
  );
};

export default Navbar;
