import React from "react";
const Menu = () => {
  return (
    <ul className="menu ">
      <li className="active">
        Home
        <span className="bolit"></span>
      </li>
      <li>
        Bestseller
        <span className="bolit"></span>
      </li>
      <li>
        Category <i className="fa-solid fa-angle-down"></i>
      </li>
      <li>
        Find a store
        <span className="bolit"></span>
      </li>
      <li>
        Blog
        <span className="bolit"></span>
      </li>
    </ul>
  );
};

export default Menu;
