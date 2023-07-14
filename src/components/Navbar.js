import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <ul className="navbar">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/admins">Admin</NavLink>
      </li>
      <li>
        <NavLink to="/users">User</NavLink>
      </li>
      <li>
        <NavLink to="/AImodels">AI Model</NavLink>
      </li>
      <li>
        <NavLink to="/upload">Upload</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
    </ul>
  );
}
