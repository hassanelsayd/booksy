import React, { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [menuExpanded, setMenuExpanded] = useState(false);
  return (
    <div className=" navbar  ">
      <div className="brand ">
        <Link to="/">
          <h1>Booksy</h1>
        </Link>
      </div>

      <div
        className="toggle-menu"
        onClick={() => setMenuExpanded(!menuExpanded)}
      >
        <i className="fa-solid fa-bars"></i>
      </div>
      <div
        className={`nav-r flex flex-80 justify-between ${
          menuExpanded ? "active" : ""
        }`}
      >
        <div className="search ">
          <input type="text" placeholder="Search by author, title, name" />
          <i className="fa-solid fa-magnifying-glass "></i>
        </div>

        <div className="settings ">
          <i className="fa-solid fa-heart "></i>
          <div className="user">H</div>
          <h3>EN</h3>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
